// scripts/prerender.mjs
//
// GitHub Pages has no server-side routing. Without this step a request for
// /papers/<slug> falls through to 404.html, which serves the app shell with an
// HTTP 404 status: browsers render the page fine, but crawlers see a 404 and
// drop it. Writing a real dist/papers/<slug>/index.html gives each paper page a
// 200 status, its own <title>/description/canonical, ScholarlyArticle JSON-LD,
// and a <noscript> body that is readable before React hydrates.
//
// Run from postbuild, after dist/index.html exists.

import { build } from "esbuild";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ORIGIN = "https://dhawan98.github.io";

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Replace exactly one occurrence of `pattern`, or fail loudly. */
const replaceOnce = (html, pattern, replacement, label) => {
  const matches = html.match(pattern);
  if (!matches || matches.length !== 1) {
    throw new Error(
      `prerender: expected exactly 1 match for ${label}, found ${matches ? matches.length : 0}. ` +
        `index.html changed shape — update scripts/prerender.mjs.`
    );
  }
  return html.replace(pattern, () => replacement);
};

/** papers.ts is TypeScript, so transpile it to a temp module before importing. */
const loadPapers = async () => {
  const tmp = join(dist, ".papers.prerender.mjs");
  await build({
    entryPoints: [join(root, "src/lib/papers.ts")],
    outfile: tmp,
    format: "esm",
    platform: "node",
    bundle: true,
    logLevel: "silent",
  });
  try {
    const mod = await import(pathToFileURL(tmp).href + `?t=${Date.now()}`);
    return mod.papers;
  } finally {
    await rm(tmp, { force: true });
  }
};

const authorLine = (paper) => paper.authors.map((a) => a.name).join(", ");

const describe = (paper) =>
  paper.metaDescription || paper.tldr || paper.abstract.slice(0, 300);

const jsonLd = (paper) =>
  JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      headline: paper.title,
      name: paper.title,
      abstract: paper.abstract,
      author: paper.authors.map((a) => ({
        "@type": "Person",
        name: a.name,
        affiliation: paper.affiliations.length
          ? { "@type": "Organization", name: paper.affiliations[0] }
          : undefined,
      })),
      datePublished: paper.year,
      publisher: paper.venue,
      url: `${ORIGIN}/papers/${paper.slug}/`,
      keywords: paper.keywords,
      ...(paper.links.arxiv ? { sameAs: paper.links.arxiv } : {}),
    },
    null,
    2
  );

const noscriptBody = (paper) => {
  const links = Object.entries(paper.links)
    .filter(([, href]) => href)
    .map(
      ([kind, href]) =>
        `          <li>${escapeHtml(kind)}: ${escapeHtml(href)}</li>`
    )
    .join("\n");

  const sections = (paper.sections || [])
    .map(
      (s) =>
        `        <h2>${escapeHtml(s.title)}</h2>\n` +
        s.paragraphs
          .map((p) => `        <p>${escapeHtml(p)}</p>`)
          .join("\n")
    )
    .join("\n");

  return `      <noscript>
        <h1>${escapeHtml(paper.title)}</h1>
        <p>${escapeHtml(authorLine(paper))}</p>
        <p>${escapeHtml(paper.venue)} · ${escapeHtml(paper.year)}</p>
${paper.award ? `        <p>${escapeHtml(paper.award)}</p>\n` : ""}        <h2>Abstract</h2>
        <p>${escapeHtml(paper.abstract)}</p>
${sections}
${links ? `        <ul>\n${links}\n        </ul>\n` : ""}        <p><a href="${ORIGIN}/">Back to Aashish Dhawan's site</a></p>
      </noscript>`;
};

const renderPaper = (shell, paper) => {
  const url = `${ORIGIN}/papers/${paper.slug}/`;
  const title = `${paper.title} · Aashish Dhawan`;
  const description = describe(paper);

  let html = shell;

  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`, "<title>");

  html = replaceOnce(
    html,
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    'meta[name="description"]'
  );

  html = replaceOnce(
    html,
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${url}" />`,
    "link[rel=canonical]"
  );

  html = replaceOnce(
    html,
    /<meta property="og:type" content="[^"]*" \/>/,
    `<meta property="og:type" content="article" />`,
    "og:type"
  );

  html = replaceOnce(
    html,
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${url}" />`,
    "og:url"
  );

  html = replaceOnce(
    html,
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    "og:title"
  );

  html = replaceOnce(
    html,
    /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    "og:description"
  );

  html = replaceOnce(
    html,
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    "twitter:title"
  );

  html = replaceOnce(
    html,
    /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    "twitter:description"
  );

  // Swap the site-wide Person schema for this paper's ScholarlyArticle schema.
  html = replaceOnce(
    html,
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">\n${jsonLd(paper)}\n    </script>`,
    "JSON-LD"
  );

  // Swap the site-wide crawler fallback for this paper's content.
  html = replaceOnce(
    html,
    /<noscript>[\s\S]*?<\/noscript>/,
    noscriptBody(paper),
    "<noscript>"
  );

  return html;
};

const sitemap = (papers) => {
  const today = new Date().toISOString().slice(0, 10);
  const entry = (loc, priority) =>
    `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entry(`${ORIGIN}/`, "1.0"),
    ...papers.map((p) => entry(`${ORIGIN}/papers/${p.slug}/`, "0.8")),
    "</urlset>",
    "",
  ].join("\n");
};

const main = async () => {
  const shell = await readFile(join(dist, "index.html"), "utf8");
  const papers = await loadPapers();

  if (!papers?.length) throw new Error("prerender: no papers found in src/lib/papers.ts");

  for (const paper of papers) {
    const dir = join(dist, "papers", paper.slug);
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, "index.html"), renderPaper(shell, paper), "utf8");
    console.log(`prerendered /papers/${paper.slug}/`);
  }

  await writeFile(join(dist, "sitemap.xml"), sitemap(papers), "utf8");
  console.log(`sitemap.xml — ${papers.length + 1} urls`);
};

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
