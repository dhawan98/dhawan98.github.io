import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Award, Quote, Copy, Check, Image as ImageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiArxiv } from "react-icons/si";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { getPaperBySlug, type Paper, type PaperFigure } from "@/lib/papers";
import NotFound from "./NotFound";

/* ------------------------------------------------------------------ */
/*  Figure — renders the image, or a graceful placeholder if missing.  */
/* ------------------------------------------------------------------ */
const Figure: React.FC<{ figure: PaperFigure; className?: string }> = ({ figure, className }) => {
  const [failed, setFailed] = React.useState(false);
  const showImage = Boolean(figure.src) && !failed;

  const isTall = figure.display === "tall";

  return (
    <figure className={cn("my-8", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-xl border border-border",
          showImage ? "bg-white" : "bg-card",
          isTall && "mx-auto max-w-[540px]"
        )}
      >
        {showImage ? (
          <img
            src={figure.src}
            alt={figure.alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className="block w-full h-auto"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center bg-gradient-to-br from-secondary/60 to-secondary/20">
            <ImageIcon className="h-8 w-8 text-muted-foreground/60" />
            <p className="max-w-md text-sm text-muted-foreground">{figure.alt}</p>
          </div>
        )}
      </div>
      {figure.caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
          {figure.caption}
        </figcaption>
      )}
    </figure>
  );
};

/* ------------------------------------------------------------------ */
/*  Link buttons row (arXiv / PDF / Code / …)                          */
/* ------------------------------------------------------------------ */
const LinkButton: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({
  href,
  icon,
  label,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5",
      "text-sm font-medium transition-all duration-300",
      "hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md",
      "focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-background"
    )}
  >
    {icon}
    <span>{label}</span>
  </a>
);

/* ------------------------------------------------------------------ */
/*  BibTeX block with copy-to-clipboard                                */
/* ------------------------------------------------------------------ */
const BibtexBlock: React.FC<{ bibtex: string }> = ({ bibtex }) => {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <div className="relative">
      <button
        onClick={copy}
        aria-label="Copy BibTeX"
        className={cn(
          "absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md border border-border",
          "bg-background/80 px-2.5 py-1.5 text-xs font-medium backdrop-blur transition-colors hover:bg-secondary"
        )}
      >
        {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
        {copied ? "Copied" : "Copy"}
      </button>
      <pre className="overflow-x-auto rounded-xl border border-border bg-secondary/40 p-5 text-sm leading-relaxed">
        <code className="font-mono text-foreground/90">{bibtex}</code>
      </pre>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Section heading                                                    */
/* ------------------------------------------------------------------ */
const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-6 flex flex-col items-center">
    <h2 className="text-2xl md:text-3xl font-medium tracking-tight">{children}</h2>
    <div className="mt-3 h-px w-16 bg-primary/40" />
  </div>
);

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
const PaperPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const paper: Paper | undefined = getPaperBySlug(slug);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (paper) {
      document.title = `${paper.title} · Aashish Dhawan`;
    }
    return () => {
      document.title = "Aashish Dhawan | PhD Researcher · University of Florida · AI & NLP";
    };
  }, [paper]);

  if (!paper) return <NotFound />;

  const multiAffiliation = paper.affiliations.length > 1;

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky mini-header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
          <a
            href="/#publications"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
            <span>Aashish Dhawan</span>
          </a>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 pb-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-12 md:pt-16 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-sm font-medium">
            {paper.venue}
          </span>

          <h1 className="mx-auto mt-6 max-w-3xl text-3xl md:text-5xl font-medium tracking-tight leading-tight">
            {paper.title}
          </h1>

          {/* Authors */}
          <p className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-base md:text-lg">
            {paper.authors.map((a, i) => {
              const content = (
                <span className={cn(a.isYou ? "font-semibold text-foreground" : "text-muted-foreground")}>
                  {a.name}
                  {multiAffiliation && a.affiliations?.length ? (
                    <sup className="ml-0.5 text-xs text-muted-foreground">
                      {a.affiliations.join(",")}
                    </sup>
                  ) : null}
                </span>
              );
              return (
                <span key={i} className="inline-flex items-center">
                  {a.url ? (
                    <a href={a.url} target="_blank" rel="noopener noreferrer" className="hover-underline">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </span>
              );
            })}
          </p>

          {/* Affiliations */}
          <p className="mt-2 text-sm text-muted-foreground">
            {multiAffiliation
              ? paper.affiliations.map((aff, i) => (
                  <span key={i} className="mx-2 inline-block">
                    <sup className="mr-0.5">{i + 1}</sup>
                    {aff}
                  </span>
                ))
              : paper.affiliations[0]}
          </p>

          {/* Award banner */}
          {paper.award && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-700 dark:text-amber-300">
              <Award size={16} />
              <span>{paper.award}</span>
            </div>
          )}

          {/* Link buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {paper.links.arxiv && (
              <LinkButton href={paper.links.arxiv} icon={<SiArxiv size={16} />} label="arXiv" />
            )}
            {paper.links.pdf && (
              <LinkButton href={paper.links.pdf} icon={<FileText size={16} />} label="PDF" />
            )}
            {paper.links.code && (
              <LinkButton href={paper.links.code} icon={<FaGithub size={16} />} label="Code" />
            )}
            {paper.links.project && (
              <LinkButton href={paper.links.project} icon={<FileText size={16} />} label="Project" />
            )}
          </div>

          {/* TL;DR */}
          {paper.tldr && (
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {paper.tldr}
            </p>
          )}
        </motion.div>

        {/* Teaser */}
        {paper.teaser && <Figure figure={paper.teaser} className="mt-10" />}

        {/* Highlights */}
        {paper.highlights && paper.highlights.length > 0 && (
          <section className="mt-14">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="mb-4 text-lg font-medium">Highlights</h2>
              <ul className="space-y-3">
                {paper.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Abstract */}
        <section className="mt-16">
          <SectionHeading>Abstract</SectionHeading>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {paper.abstract}
          </p>
        </section>

        {/* Body sections */}
        {paper.sections?.map((s, i) => (
          <section key={i} className="mt-16">
            <SectionHeading>{s.title}</SectionHeading>
            <div className="mx-auto max-w-3xl space-y-4">
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-lg leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
            {s.figure && <Figure figure={s.figure} />}
          </section>
        ))}

        {/* Keywords */}
        {paper.keywords && paper.keywords.length > 0 && (
          <section className="mt-16">
            <div className="flex flex-wrap justify-center gap-2">
              {paper.keywords.map((k, i) => (
                <span
                  key={i}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {k}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* BibTeX */}
        <section className="mt-16">
          <div className="mb-4 flex items-center gap-2">
            <Quote size={18} className="text-muted-foreground" />
            <h2 className="text-xl font-medium">BibTeX</h2>
          </div>
          <BibtexBlock bibtex={paper.bibtex} />
        </section>

        {/* Back link */}
        <div className="mt-16 text-center">
          <a
            href="/#publications"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            <span>Back to all publications</span>
          </a>
        </div>
      </main>
    </div>
  );
};

export default PaperPage;
