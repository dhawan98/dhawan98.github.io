// src/lib/papers.ts
// Data model for standalone academic "project pages" (one route per paper).
// Add a new paper by appending an entry here; the /papers/:slug route renders it.

export interface PaperLinks {
  arxiv?: string;
  pdf?: string;
  code?: string;
  project?: string;
  video?: string;
  poster?: string;
}

export interface PaperAuthor {
  name: string;
  /** 1-based indices into `affiliations` */
  affiliations?: number[];
  url?: string;
  /** highlight the site owner in the author list */
  isYou?: boolean;
}

export interface PaperFigure {
  /** Path under /public, e.g. "/papers/americasnlp-2026/teaser.png". Falls back to a
   *  styled placeholder until the file exists, so pages look intentional pre-assets. */
  src?: string;
  alt: string;
  caption?: string;
  /** "tall" constrains width (for portrait diagrams); "wide" (default) fills the column. */
  display?: "wide" | "tall";
}

export interface PaperSection {
  title: string;
  paragraphs: string[];
  figure?: PaperFigure;
}

export interface Paper {
  slug: string;
  title: string;
  /** short venue string shown as a pill, e.g. "AmericasNLP 2026 · ACL" */
  venue: string;
  year: string;
  /** optional award/headline banner, e.g. "1st place overall — AmericasNLP 2026" */
  award?: string;
  authors: PaperAuthor[];
  affiliations: string[];
  links: PaperLinks;
  /** one-line takeaway shown under the title */
  tldr?: string;
  abstract: string;
  teaser?: PaperFigure;
  /** punchy bullet results shown as a highlights strip */
  highlights?: string[];
  sections?: PaperSection[];
  bibtex: string;
  keywords?: string[];
  /** used for <title> and meta description */
  metaDescription?: string;
}

const YOU = "Aashish Dhawan";

export const papers: Paper[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // 1. WMT26 shared task system paper
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "wmt26-northeastern-indian-translation",
    title:
      "BM25-Augmented Many-Shot Translation for Low-Resource North-Eastern Indian Languages",
    venue: "WMT 2026 · EMNLP, Budapest",
    year: "2026",
    award:
      "#1 in 10 directions and #2 in 8 more across the WMT26 primary leaderboards at EMNLP 2026, Budapest",
    authors: [
      { name: "Aashish Dhawan", affiliations: [1], isYou: true },
      { name: "Christopher Driggers-Ellis", affiliations: [1] },
      { name: "Dzmitry Kasinets", affiliations: [1] },
      { name: "Christan Grant", affiliations: [1] },
      { name: "Daisy Zhe Wang", affiliations: [1] },
    ],
    affiliations: ["University of Florida"],
    links: {
      arxiv: "https://arxiv.org/abs/2608.13722",
      pdf: "https://arxiv.org/pdf/2608.13722",
      code: "https://github.com/dhawan98/Gators_wmt26",
    },
    teaser: {
      src: "/papers/wmt26-northeastern-indian-translation/teaser.png",
      alt: "Overview of the gators pipeline: a source query is paired with BM25-retrieved exemplars and leave-one-out dev exemplars, assembled into a retrieval-augmented many-shot prompt, translated by Gemini 2.5 Flash in both directions, and scored with ChrF++.",
      caption:
        "Figure 1 — Overview of the gators pipeline. BM25 selects r retrieval exemplars conditioned on the query q and d leave-one-out dev exemplars; prompt construction assembles them into a retrieval-augmented many-shot prompt for Gemini, evaluated with ChrF++.",
    },
    tldr:
      "A retrieval-augmented many-shot translation system for WMT26 at EMNLP 2026 in Budapest that finished #1 in 10 translation directions and #2 in 8 more across the primary leaderboards, using BM25 example retrieval plus Gemini 2.5 Flash without model fine-tuning.",
    abstract:
      "This paper describes the University of Florida Gators submission to the WMT26 Low-Resource Indic Language Translation shared task. We adapt the retrieval-augmented many-shot translation pipeline from our AmericasNLP 2026 system to translate between English and eleven North-Eastern Indian languages in both directions. At inference time, BM25 retrieves the most similar parallel examples from a language-specific training bank, and Gemini 2.5 Flash translates the input conditioned on these examples. No model fine-tuning is involved. Training banks combine official WMT26 data with publicly available corpora such as Samanantar and prior WMT shared task releases. A grid search over retrieval count r and development exemplar count d across all 22 language-direction pairs selects the best configuration for each submission.",
    highlights: [
      "#1 in 10 translation directions and #2 in 8 more across the WMT26 primary leaderboards.",
      "Won both English→Assamese and Assamese→English on the primary leaderboard.",
      "Targets translation between English and 11 North-Eastern Indian languages in both directions.",
      "Uses BM25 retrieval to build many-shot prompts for Gemini 2.5 Flash at inference time.",
      "Requires no model fine-tuning; performance comes from retrieval and prompt design.",
      "Combines official WMT26 shared-task data with Samanantar and prior WMT releases.",
      "Tunes retrieval count and exemplar count separately across all 22 language-direction pairs.",
    ],
    sections: [
      {
        title: "Approach",
        paragraphs: [
          "The system adapts the retrieval-augmented translation recipe from our AmericasNLP 2026 work to a broader multilingual shared-task setting. Instead of fine-tuning a translation model, it retrieves the most relevant parallel examples for each input with BM25 and conditions Gemini 2.5 Flash on those examples in a many-shot prompt.",
          "Because the method is retrieval-driven, each language direction gets its own training bank and its own prompt configuration. This keeps the pipeline lightweight while still letting it specialize to low-resource translation pairs through example selection.",
        ],
      },
      {
        title: "Data and Selection",
        paragraphs: [
          "Training banks are built by combining the official WMT26 shared-task data with public multilingual corpora including Samanantar and earlier WMT releases. That gives the retriever a larger pool of candidate demonstrations while staying grounded in task-relevant parallel data.",
          "For submission tuning, the system runs a grid search over retrieval count and development exemplar count across all 22 language-direction pairs. The final configuration for each direction is selected from development performance rather than applying a single shared prompt budget everywhere.",
        ],
      },
      {
        title: "Official Results",
        paragraphs: [
          "The shared task is part of EMNLP 2026 in Budapest as part of the Eleventh Conference on Machine Translation (WMT26), scheduled for October 28-29, 2026. In the published results booklet, the University of Florida Gators primary system finishes #1 in 10 translation directions and #2 in 8 more, placing in the top two for 18 of the 20 reported directions.",
          "That spread is more impressive than a single headline win: the system tops both English→Assamese and Assamese→English, leads several other directions including Mizo, Manipuri, Bodo, and Karbi settings, and stays consistently near the front almost everywhere else. It is a strong demonstration that well-designed retrieval-augmented inference can compete at the very top of a shared task in genuinely low-resource settings.",
        ],
      },
    ],
    keywords: [
      "machine translation",
      "low-resource NLP",
      "retrieval-augmented generation",
      "Indic languages",
      "many-shot prompting",
    ],
    metaDescription:
      "Aashish Dhawan et al. — a BM25-augmented many-shot translation system for WMT26 at EMNLP 2026 in Budapest, finishing #1 in 10 directions and #2 in 8 more.",
    bibtex: `@misc{dhawan2026bm25,
  title         = {BM25-Augmented Many-Shot Translation for Low-Resource North-Eastern Indian Languages},
  author        = {Dhawan, Aashish and Driggers-Ellis, Christopher and Kasinets, Dzmitry and Grant, Christan and Wang, Daisy Zhe},
  year          = {2026},
  eprint        = {2608.13722},
  archivePrefix = {arXiv},
  primaryClass  = {cs.CL}
}`,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. Flagship — AmericasNLP 2026 Shared Task winner
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "americasnlp-2026",
    title:
      "Retrieval-Augmented Long-Context Translation for Cultural Image Captioning",
    venue: "AmericasNLP 2026 · ACL",
    year: "2026",
    award: "1st place overall — AmericasNLP 2026 Shared Task on Cultural Image Captioning",
    authors: [
      { name: "Aashish Dhawan", affiliations: [1], isYou: true },
      { name: "Christopher Driggers-Ellis", affiliations: [1] },
      { name: "Dzmitry Kasinets", affiliations: [1] },
      { name: "Daisy Zhe Wang", affiliations: [1] },
      { name: "Christan Grant", affiliations: [1] },
    ],
    affiliations: ["University of Florida"],
    links: {
      arxiv: "https://arxiv.org/abs/2605.20626",
      pdf: "https://arxiv.org/pdf/2605.20626",
      code: "https://github.com/dhawan98/AmericasNLP2026-Gators-Submission",
    },
    tldr:
      "A two-stage pipeline — Qwen2.5-VL for Spanish captions, then retrieval-augmented many-shot prompting with Gemini 2.5 Flash — that won the AmericasNLP 2026 shared task on cultural image captioning for Indigenous languages.",
    abstract:
      "We present the University of Florida (Gators) submission to the AmericasNLP 2026 shared task on cultural image captioning for Indigenous languages. Our system uses a two-stage pipeline: it first generates a Spanish intermediate caption for each image with Qwen2.5-VL, then produces the target-language caption via retrieval-augmented, many-shot prompting with Gemini 2.5 Flash. Retrieval surfaces culturally and visually relevant in-context examples, letting a general-purpose LLM translate into low-resource languages it was never explicitly trained on. On the development set the approach improves over the shared-task baseline by 164.1%, 131.7%, and 122.6% for the three language variants, with sustained improvements exceeding 150% on the evaluation set. We find that retrieval effectiveness varies substantially by language and depends on having a sufficiently large in-domain example pool, and that language-specific synthetic data contributes roughly 28 chrF++ points to Guaraní. Our submission was the overall winner of the shared task and ranked second in human evaluation among finalist entries.",
    teaser: {
      src: "/papers/americasnlp-2026/teaser.png",
      alt: "Overview of the two-stage retrieval-augmented captioning pipeline, from cultural image to target-language caption.",
      caption:
        "Figure 1 — Overview of the proposed two-stage pipeline. Stage 1: a VLM (Qwen2.5-VL) produces a Spanish caption; Stage 2: BM25 retrieval + many-shot prompting with Gemini 2.5 Flash generates the target Indigenous-language caption.",
      display: "tall",
    },
    highlights: [
      "1st place overall in the AmericasNLP 2026 shared task on cultural image captioning.",
      "Up to 164% improvement over the shared-task baseline on dev; >150% sustained on the eval set.",
      "Two-stage design: Qwen2.5-VL Spanish captions → retrieval-augmented many-shot prompting with Gemini 2.5 Flash.",
      "Language-specific synthetic data added ~28 chrF++ points for Guaraní.",
      "Ranked 2nd in human evaluation among finalist systems.",
    ],
    sections: [
      {
        title: "Method",
        paragraphs: [
          "Rather than fine-tune a captioning model on scarce Indigenous-language data, we decompose the task into two stages that each play to a strong general-purpose model. In the first stage, Qwen2.5-VL looks at the image and produces a faithful Spanish caption — a high-resource pivot the vision-language model handles reliably.",
          "In the second stage, we translate that caption into the target Indigenous language with Gemini 2.5 Flash using retrieval-augmented, many-shot prompting. For each input we retrieve the most relevant caption pairs from an in-domain example pool and pack them into a long-context prompt, letting the model translate into languages it was never explicitly trained on by analogy to nearby examples.",
        ],
      },
      {
        title: "Results",
        paragraphs: [
          "The system improves over the shared-task baseline by 164.1%, 131.7%, and 122.6% across the three language variants on the development set, with improvements above 150% carried over to the held-out evaluation set. It was the overall winner of the shared task and placed second in the human evaluation among finalist entries.",
          "Two findings stood out. Retrieval effectiveness is highly language-dependent and hinges on a sufficiently large in-domain pool of examples to retrieve from. And targeted synthetic data matters: language-specific augmentation contributed roughly 28 chrF++ points for Guaraní.",
        ],
      },
    ],
    keywords: [
      "low-resource NLP",
      "Indigenous languages",
      "retrieval-augmented generation",
      "image captioning",
      "machine translation",
    ],
    metaDescription:
      "Aashish Dhawan et al. — the University of Florida Gators submission that won the AmericasNLP 2026 shared task on cultural image captioning for Indigenous languages.",
    bibtex: `@misc{dhawan2026retrieval,
  title         = {Retrieval-Augmented Long-Context Translation for Cultural Image Captioning: Gators submission for AmericasNLP 2026 shared task},
  author        = {Dhawan, Aashish and Driggers-Ellis, Christopher and Kasinets, Dzmitry and Wang, Daisy Zhe and Grant, Christan},
  year          = {2026},
  eprint        = {2605.20626},
  archivePrefix = {arXiv},
  primaryClass  = {cs.CL}
}`,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. Indigenous MT with synthetic data (LoResMT)
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "indigenous-mt-synthetic",
    title:
      "Improving Indigenous Language Machine Translation with Synthetic Data and Language-Specific Preprocessing",
    venue: "LoResMT 2026 · EACL",
    year: "2026",
    authors: [
      { name: "Aashish Dhawan", affiliations: [1], isYou: true },
      { name: "Christopher Driggers-Ellis", affiliations: [1] },
      { name: "Christan Grant", affiliations: [1] },
      { name: "Daisy Zhe Wang", affiliations: [1] },
    ],
    affiliations: ["University of Florida"],
    links: {
      arxiv: "https://arxiv.org/abs/2601.03135",
      pdf: "https://arxiv.org/pdf/2601.03135",
      code: "https://github.com/dhawan98/mBART50-extended",
    },
    tldr:
      "Synthetic parallel data plus language-specific preprocessing consistently improves low-resource Indigenous machine translation with a fine-tuned mBART-50 — and where it doesn't, the failure points straight at morphology.",
    abstract:
      "Parallel corpora for low-resource Indigenous languages are scarce, which limits neural machine translation quality. We augment the available data with synthetic sentence pairs generated by a high-capacity multilingual translation model, and fine-tune mBART-50 on both curated-only and synthetically augmented data, evaluating with chrF++. We pair this with language-specific preprocessing — orthographic normalization and noise-aware filtering. Results show consistent gains for Guaraní–Spanish and Quechua–Spanish, while experiments on Aymara expose the limits of generic preprocessing for highly agglutinative languages, motivating morphology-aware handling.",
    highlights: [
      "Synthetic data lifts Guaraní–Spanish from 42.00 to 44.00 chrF++ and Aymara–Spanish from 26.85 to 30.82 (+3.97).",
      "Consistent chrF++ gains across Aymara, Guaraní, and Quechua over a curated-only mBART-50 baseline.",
      "Forward-translated synthetic sentence pairs expand scarce parallel corpora in data-scarce settings.",
      "Orthographic normalization and noise-aware filtering as language-specific preprocessing.",
      "Aymara's low absolute scores expose where generic preprocessing breaks down for agglutinative morphology.",
    ],
    sections: [
      {
        title: "Approach",
        paragraphs: [
          "We tackle data scarcity from two directions. First, we generate synthetic parallel sentence pairs with a high-capacity multilingual translation model to expand the curated corpora. Second, we apply language-specific preprocessing — orthographic normalization to reduce spurious surface variation, and noise-aware filtering to keep augmentation from injecting low-quality pairs.",
          "We fine-tune mBART-50 on both curated-only and augmented data and compare with chrF++, isolating the contribution of synthetic data and of each preprocessing step.",
        ],
      },
      {
        title: "Findings",
        paragraphs: [
          "Augmentation and normalization yield consistent improvements for Guaraní–Spanish and Quechua–Spanish. Aymara is the instructive exception: its highly agglutinative morphology blunts generic preprocessing, pointing toward morphology-aware normalization as the next step.",
          "On the AmericasNLP development sets, adding forward-translated synthetic data improves chrF++ across all three languages — largest for Aymara (+3.97), followed by Guaraní (+2.00) and Quechua (+0.71) — competitive with reported shared-task systems.",
        ],
        figure: {
          src: "/papers/indigenous-mt-synthetic/results.png",
          alt: "Development-set chrF++ comparison across Aymara, Guaraní, and Quechua, including our curated-only and curated+synthetic mBART-50 models.",
          caption:
            "Table 3 — Development-set chrF++ for Aymara (aym), Guaraní (gn), and Quechua (quy). Our curated+synthetic mBART-50 improves over the curated-only baseline across all three languages.",
        },
      },
    ],
    keywords: [
      "low-resource machine translation",
      "synthetic data",
      "mBART",
      "Indigenous languages",
      "chrF++",
    ],
    metaDescription:
      "Aashish Dhawan et al. — improving low-resource Indigenous machine translation with synthetic parallel data and language-specific preprocessing on a fine-tuned mBART-50.",
    bibtex: `@misc{dhawan2026improving,
  title         = {Improving Indigenous Language Machine Translation with Synthetic Data and Language-Specific Preprocessing},
  author        = {Dhawan, Aashish and Driggers-Ellis, Christopher and Grant, Christan and Wang, Daisy Zhe},
  year          = {2026},
  eprint        = {2601.03135},
  archivePrefix = {arXiv},
  primaryClass  = {cs.CL}
}`,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 4. CRF post-processing for image segmentation (CV)
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "crf-segmentation",
    title: "Post Processing of Image Segmentation using Conditional Random Fields",
    venue: "arXiv 2025 · orig. INDIACom 2019",
    year: "2025",
    authors: [
      { name: "Aashish Dhawan", affiliations: [1], isYou: true },
      { name: "Pankaj Bodani", affiliations: [2] },
      { name: "Vishal Garg", affiliations: [1] },
    ],
    affiliations: ["JMIETI, Radaur, India", "Space Applications Centre (SAC), ISRO"],
    links: {
      arxiv: "https://arxiv.org/abs/2510.09833",
      pdf: "https://arxiv.org/pdf/2510.09833",
      code: "https://github.com/dhawan98/Post-Processing-of-Image-Segmentation-using-CRF",
    },
    tldr:
      "A study of Conditional Random Field post-processing for image segmentation, comparing CRF variants across satellite imagery and high-quality aerial photographs.",
    abstract:
      "Conditional Random Fields (CRFs) are a common post-processing step for sharpening the boundaries of image segmentation maps. We investigate how different CRF formulations affect segmentation clarity, evaluating them on two contrasting datasets: lower-quality satellite imagery and high-quality aerial photographs. By comparing performance across image-quality regimes, we identify which CRF variant works best in each setting and characterize the strengths and limitations of each approach.",
    teaser: {
      src: "/papers/crf-segmentation/teaser.png",
      alt: "An aerial street scene, its labelled ground truth, and the initial segmentation result.",
      caption:
        "Figure 11 — (a) input aerial image, (b) labelled ground truth, and (c) the initial segmentation result that CRF post-processing then refines.",
    },
    highlights: [
      "Compares CRF variants for segmentation post-processing across image-quality regimes.",
      "Evaluated on lower-quality satellite imagery and high-quality aerial photographs.",
      "Identifies which CRF formulation is best suited to each setting.",
    ],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Segmentation models often produce maps with ragged or uncertain boundaries. CRFs refine these maps by encouraging label agreement between similar, nearby pixels. We evaluate several CRF formulations — linear, grid, and fully-connected (dense) — and ask a practical question: which one to reach for given the quality of the input imagery?",
          "Testing across satellite and aerial datasets — deliberately different in resolution and noise — surfaces clear trade-offs and shows that the best-performing CRF variant is not the same across image-quality regimes.",
        ],
      },
      {
        title: "Results",
        paragraphs: [
          "Sweeping the fully-connected CRF's negative-probability parameter progressively cleans up the segmentation: clutter is removed and object boundaries — the bus, the car, the tree canopy — sharpen as the setting increases from 80% to 99%.",
        ],
        figure: {
          src: "/papers/crf-segmentation/results.png",
          alt: "Four segmentation outputs showing CRF refinement at 80, 90, 95, and 99 percent negative probability.",
          caption:
            "Figure 12 — Output at increasing negative-probability levels (80%, 90%, 95%, 99%). Higher values yield cleaner, better-delineated segments.",
        },
      },
    ],
    keywords: [
      "computer vision",
      "image segmentation",
      "conditional random fields",
      "remote sensing",
    ],
    metaDescription:
      "Aashish Dhawan, Pankaj Bodani, Vishal Garg — a study of Conditional Random Field post-processing for image segmentation across satellite and aerial imagery.",
    bibtex: `@misc{dhawan2025post,
  title         = {Post Processing of Image Segmentation using Conditional Random Fields},
  author        = {Dhawan, Aashish and Bodani, Pankaj and Garg, Vishal},
  year          = {2025},
  eprint        = {2510.09833},
  archivePrefix = {arXiv},
  primaryClass  = {cs.CV}
}`,
  },
];

export const getPaperBySlug = (slug?: string): Paper | undefined =>
  papers.find((p) => p.slug === slug);

export const paperSlugByArxiv: Record<string, string> = papers.reduce(
  (acc, p) => {
    const id = p.links.arxiv?.split("/abs/")[1];
    if (id) acc[id] = p.slug;
    return acc;
  },
  {} as Record<string, string>
);

export { YOU };
