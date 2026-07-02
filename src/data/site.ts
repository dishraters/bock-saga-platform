import {
  BookOpen,
  Brain,
  Compass,
  Library,
  Map,
  Search,
  Sparkles,
  TreePine,
  Users,
} from "lucide-react";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bock-saga-platform.vercel.app";

export const primaryNav = [
  { href: "/what-is-the-bock-saga", label: "Start Here" },
  { href: "/learn", label: "Learning Center" },
  { href: "/blog", label: "Blog" },
  { href: "/search", label: "Search" },
  { href: "/ask", label: "Ask" },
];

export const sourceLinks = [
  {
    label: "Carl Borgen",
    href: "https://www.carlborgen.com/",
  },
  {
    label: "What is the Bock Saga?",
    href: "https://www.carlborgen.com/what-is-the-bock-saga/",
  },
  {
    label: "Temporarily Insane",
    href: "https://www.carlborgen.com/temporarily-insane/",
  },
  {
    label: "Book listing",
    href: "https://www.amazon.com/Bock-Saga-introduction-Carl-Borgen/dp/1091309248",
  },
];

export const learningTracks = [
  {
    title: "The Bock Saga",
    slug: "bock-saga",
    eyebrow: "Beginner path",
    description:
      "A clear introduction to the oral tradition as presented by Ior Bock and preserved through Carl Borgen's published work.",
    icon: Compass,
    href: "/what-is-the-bock-saga",
  },
  {
    title: "Carl Borgen",
    slug: "carl-borgen",
    eyebrow: "Author archive",
    description:
      "Books, biography, interviews, and the role Carl plays in making the material easier for new readers to enter.",
    icon: BookOpen,
    href: "/about",
  },
  {
    title: "Ior Bock",
    slug: "ior-bock",
    eyebrow: "Key figure",
    description:
      "The family storyteller, public keeper of the Saga, and source for many claims presented in the tradition.",
    icon: Users,
    href: "/learn#ior-bock",
  },
  {
    title: "Root Language",
    slug: "root-language",
    eyebrow: "Sound system",
    description:
      "An introduction to the claimed sound and meaning system used inside the Saga's oral teaching structure.",
    icon: TreePine,
    href: "/learn#root-language",
  },
  {
    title: "Temple and Hoard",
    slug: "temple-hoard",
    eyebrow: "Excavation story",
    description:
      "A careful map of the Temple of Lemminkainen, the Hoard claims, and the people drawn into the search.",
    icon: Map,
    href: "/learn#temple",
  },
  {
    title: "AI Research Library",
    slug: "ai-library",
    eyebrow: "Future platform",
    description:
      "The structure for search, future article generation, and an assistant that answers from Carl's material.",
    icon: Brain,
    href: "/ask",
  },
];

export const books = [
  {
    title: "The Bock Saga: An Introduction",
    type: "Primary introduction",
    description:
      "Carl's entry point for readers who want the main structure of the Bock Saga in book form.",
  },
  {
    title: "Temporarily Insane",
    type: "Memoir",
    description:
      "A personal account tied to the Temple Twelve era, travel, youth culture, and Carl's encounter with the Saga.",
  },
  {
    title: "The End of Paradise",
    type: "Fiction and mythic setting",
    description:
      "A companion title that helps shape Carl's wider creative and historical atmosphere.",
  },
  {
    title: "The Squatters Gang",
    type: "Story world",
    description:
      "A related work from Carl's catalogue, useful for understanding his voice and audience.",
  },
];

export const timeline = [
  {
    date: "Oral tradition",
    title: "The Bock family story is preserved by speech",
    body: "The Bock Saga presents itself as a family oral tradition, not as a conventional academic history.",
  },
  {
    date: "1980s",
    title: "Ior Bock begins presenting the Saga publicly",
    body: "Ior Bock becomes the public storyteller associated with the tradition and its Root Language claims.",
  },
  {
    date: "1990s",
    title: "The Temple search draws an international circle",
    body: "The Temple of Lemminkainen and the claimed Hoard become central public storylines.",
  },
  {
    date: "Later work",
    title: "Carl Borgen organizes the material for readers",
    body: "Carl's books and website give new readers a more structured path into the history, people, and claims.",
  },
  {
    date: "Next phase",
    title: "A searchable AI-ready archive",
    body: "This site is designed as the foundation for deeper search, articles, and a guided assistant.",
  },
];

export const blogPosts = [
  {
    slug: "beginner-map",
    title: "A Beginner's Map to the Bock Saga",
    excerpt:
      "The fastest route through the major people, concepts, books, and disputed claims.",
    category: "Start Here",
    readTime: "6 min",
  },
  {
    slug: "ior-bock",
    title: "Who Was Ior Bock?",
    excerpt:
      "A responsible introduction to the storyteller at the center of the Bock family tradition.",
    category: "People",
    readTime: "5 min",
  },
  {
    slug: "root-language",
    title: "Root Language Without the Fog",
    excerpt:
      "How the Saga presents sound, meaning, and memory inside its teaching system.",
    category: "Root Language",
    readTime: "7 min",
  },
  {
    slug: "lemminkainen-hoard",
    title: "The Lemminkainen Hoard, Carefully Framed",
    excerpt:
      "What the site can explain, what it should not overstate, and where readers should start.",
    category: "Temple",
    readTime: "8 min",
  },
  {
    slug: "temple-twelve",
    title: "The Temple Twelve and the Search",
    excerpt:
      "How the excavation team became one of the most visible public storylines around the Saga.",
    category: "People",
    readTime: "7 min",
  },
  {
    slug: "carl-borgen-reading-order",
    title: "A Reading Order for Carl Borgen's Work",
    excerpt:
      "A practical path through the introduction, memoir, source pages, and future archive.",
    category: "Books",
    readTime: "5 min",
  },
];

export const sourceLibrary = [
  {
    id: "carl-borgen",
    title: "Carl Borgen",
    type: "Person",
    url: "https://www.carlborgen.com/about-the-author/",
    summary:
      "Carl Borgen is presented on his site as the main modern author and organizer of Bock Saga material. His books include The Bock Saga: An Introduction and Temporarily Insane.",
    keyPoints: [
      "Born in Canada to Dutch parents in 1960.",
      "First encountered the Bock Saga through friends connected to Goa and the Temple search.",
      "Frames Temporarily Insane as memoir and adventure story around the Saga and the people who tried to prove it.",
    ],
  },
  {
    id: "bock-saga-book",
    title: "The Bock Saga: An Introduction",
    type: "Book",
    url: "https://www.carlborgen.com/the-bock-saga-an-introduction/",
    summary:
      "Carl's introduction presents the Saga as an alternative creation story guarded by the Bock family and revealed publicly by Ior Bock.",
    keyPoints: [
      "Covers the Saga from the claimed Paradise Time to Ior Bock's death.",
      "Positions the book as the main beginner overview.",
      "Available in hardcover, paperback, and ebook formats according to Carl's site.",
    ],
  },
  {
    id: "ior-bock",
    title: "Ior Bock",
    type: "Person",
    url: "https://www.carlborgen.com/who-is-ior-bock/",
    summary:
      "Ior Bock is the controversial storyteller who brought the Bock Saga into public view. Carl describes him as a great storyteller whose life and claims produced intense disagreement.",
    keyPoints: [
      "Carl treats the basic fact that Ior told the Saga publicly as uncontested.",
      "Many details of Ior's life are disputed or unclear.",
      "Carl stresses that Ior welcomed listeners and told the story without acting like a conventional spiritual leader.",
    ],
  },
  {
    id: "temple-twelve",
    title: "The Temple Twelve",
    type: "Group",
    url: "https://www.carlborgen.com/who-are-the-temple-twelve/",
    summary:
      "The Temple Twelve were the self-funded excavation group that joined the search for the Temple of Lemminkainen after Ior Bock's claims spread.",
    keyPoints: [
      "Carl's page describes a group of 24 people, twelve men and twelve women, who joined forces with Ior Bock.",
      "The group spent summers excavating near the Sibbosberg cave system.",
      "Carl's memoir Temporarily Insane chronicles their lives and search.",
    ],
  },
  {
    id: "lemminkainen-hoard",
    title: "Lemminkainen Hoard",
    type: "Claimed site",
    url: "https://www.carlborgen.com/what-is-the-lemminkainen-hoard/",
    summary:
      "The Lemminkainen Hoard is the claimed treasure connected to the Temple narrative. Carl's source page presents it as alleged and tied to Ior Bock's family claims.",
    keyPoints: [
      "Ior Bock claimed treasures were stored in the Sibbosberg cave system near Gumbostrand, Finland.",
      "Carl connects the search to the Temple Twelve and to Temporarily Insane.",
      "The page also explains Lemminkainen as a figure from Finnish myth and the Kalevala.",
    ],
  },
  {
    id: "bockists",
    title: "Bockists",
    type: "Movement",
    url: "https://www.carlborgen.com/who-are-the-bockists/",
    summary:
      "Bockists are people drawn to the Saga, with a smaller group focused on studying its sound system and theoretical structure.",
    keyPoints: [
      "Carl's page distinguishes broad believers from the more dedicated scribes and scholars.",
      "The Bockists are described as decentralized and often solitary.",
      "They support the Temple Twelve by studying and spreading the Saga's theoretical structure.",
    ],
  },
  {
    id: "press",
    title: "Reviews and Press",
    type: "Reception",
    url: "https://www.carlborgen.com/reviews-and-press/",
    summary:
      "Carl's press page collects media attention around Temporarily Insane and the public fascination with the Saga.",
    keyPoints: [
      "Press coverage focuses on the unusual story, the Temple search, and Carl's proximity to the material.",
      "The page links out to outlets such as Reader's Digest and Female First.",
      "This section can later support a media and credibility page.",
    ],
  },
];

export const articles = [
  {
    slug: "beginner-map",
    title: "A Beginner's Map to the Bock Saga",
    deck: "Use this as the first route through Carl Borgen's material.",
    category: "Start Here",
    readTime: "6 min",
    sourceIds: ["bock-saga-book", "carl-borgen", "ior-bock"],
    sections: [
      {
        heading: "Start with the frame",
        body: "The Bock Saga presents itself as a family oral tradition. Carl Borgen's job, as this site should frame it, is to help readers enter the material without pretending every claim has the same evidentiary status.",
      },
      {
        heading: "Learn the people first",
        body: "New readers should meet Carl Borgen and Ior Bock before trying to memorize the mythology. Carl organizes the modern reading path. Ior is the storyteller who brought the Saga into public view.",
      },
      {
        heading: "Then follow the claims",
        body: "After the people, move into Root Language, Paradise Time, the Temple of Lemminkainen, and the Hoard. Each page should mark whether it is summarizing Carl, Ior, Saga tradition, Finnish myth, or outside context.",
      },
    ],
  },
  {
    slug: "ior-bock",
    title: "Who Was Ior Bock?",
    deck: "A careful introduction to the figure at the center of the public Saga.",
    category: "People",
    readTime: "5 min",
    sourceIds: ["ior-bock", "temple-twelve"],
    sections: [
      {
        heading: "The basic fact",
        body: "Carl presents Ior Bock as the person who told the Bock Saga to the world. Around that fact, the biography becomes disputed, strange, and difficult to simplify.",
      },
      {
        heading: "The storyteller",
        body: "Carl's account focuses less on a guru figure and more on a person who welcomed listeners and told a long, practical, internally connected story.",
      },
      {
        heading: "Why he matters to the site",
        body: "Any serious archive needs a page that separates Ior's documented life, Carl's personal account, public controversy, and claims made inside the Saga.",
      },
    ],
  },
  {
    slug: "root-language",
    title: "Root Language Without the Fog",
    deck: "A plain-language entry point to the Saga's claimed sound system.",
    category: "Root Language",
    readTime: "7 min",
    sourceIds: ["bockists", "bock-saga-book"],
    sections: [
      {
        heading: "What the Saga claims",
        body: "Root Language is presented as a system where sounds carry meaning and structure. Carl's Bockists page describes dedicated students who study the mathematical and historical implications of that system.",
      },
      {
        heading: "How to teach it",
        body: "The site should avoid vague mysticism. A useful Root Language section needs definitions, sound examples, diagrams, disputed points, and clear source labels.",
      },
      {
        heading: "Why it belongs in the learning center",
        body: "Root Language is one of the core ideas that makes the Saga distinct. Readers need it explained before they can understand why the Bockists spend years studying the material.",
      },
    ],
  },
  {
    slug: "lemminkainen-hoard",
    title: "The Lemminkainen Hoard, Carefully Framed",
    deck: "The Temple story needs strong source labels and careful wording.",
    category: "Temple",
    readTime: "8 min",
    sourceIds: ["lemminkainen-hoard", "temple-twelve", "press"],
    sections: [
      {
        heading: "The claimed hoard",
        body: "Carl's page describes the Lemminkainen Hoard as alleged. It ties the claim to Ior Bock, the Sibbosberg cave system, and the supposed Temple of Lemminkainen.",
      },
      {
        heading: "The public storyline",
        body: "The Hoard is one reason the Saga drew attention outside a small circle. The search for treasure, proof, and meaning makes the Temple story easy to sensationalize.",
      },
      {
        heading: "The editorial rule",
        body: "This site should use words like claimed, alleged, according to Ior Bock, and according to Carl's account when discussing the Hoard. That protects the site's credibility.",
      },
    ],
  },
  {
    slug: "temple-twelve",
    title: "The Temple Twelve and the Search",
    deck: "The excavation team turned belief into years of physical work.",
    category: "People",
    readTime: "7 min",
    sourceIds: ["temple-twelve", "lemminkainen-hoard", "carl-borgen"],
    sections: [
      {
        heading: "Who they were",
        body: "Carl's page describes the Temple Twelve as the self-funded group that joined Ior Bock and spent years trying to uncover the Temple entrance.",
      },
      {
        heading: "Why they matter",
        body: "They connect the Saga to real people, daily labor, travel, belief, doubt, and risk. Without them, the Temple story stays abstract.",
      },
      {
        heading: "How the site should handle them",
        body: "A future section should combine a timeline, profiles, location context, and links to Carl's memoir so readers can follow the human story without losing source clarity.",
      },
    ],
  },
  {
    slug: "carl-borgen-reading-order",
    title: "A Reading Order for Carl Borgen's Work",
    deck: "A practical route through the books and source pages.",
    category: "Books",
    readTime: "5 min",
    sourceIds: ["carl-borgen", "bock-saga-book", "press"],
    sections: [
      {
        heading: "First: the introduction",
        body: "Start with The Bock Saga: An Introduction if you want the main structure of the tradition before the memoir and press material.",
      },
      {
        heading: "Second: the memoir",
        body: "Read Temporarily Insane when you want Carl's personal route into the story, the people around it, and the Temple Twelve era.",
      },
      {
        heading: "Third: the archive",
        body: "Use this site to move topic by topic through Ior Bock, Root Language, the Hoard, Bockists, and source notes. The search and Ask tools should make that path faster.",
      },
    ],
  },
];

export const searchIndex = [
  ...learningTracks.map((track) => ({
    title: track.title,
    type: "Learning track",
    description: track.description,
    href: track.href,
  })),
  ...blogPosts.map((post) => ({
    title: post.title,
    type: post.category,
    description: post.excerpt,
    href: `/blog/${post.slug}`,
  })),
  ...sourceLibrary.map((source) => ({
    title: source.title,
    type: source.type,
    description: source.summary,
    href: `/learn#source-${source.id}`,
  })),
  ...books.map((book) => ({
    title: book.title,
    type: book.type,
    description: book.description,
    href: "/about#books",
  })),
  {
    title: "Ask the Bock Saga",
    type: "AI assistant",
    description:
      "A placeholder assistant area prepared for future OpenAI retrieval over Carl's content.",
    href: "/ask",
  },
];

export const assistantIdeas = [
  "Explain the Bock Saga to a first-time reader.",
  "Who was Ior Bock, according to Carl Borgen's material?",
  "What is Root Language in the Saga?",
  "Which book should I read first?",
  "What claims should be treated as tradition-specific?",
];

export const homeStats = [
  { label: "Learning tracks", value: "6" },
  { label: "Core books mapped", value: "4" },
  { label: "Searchable topics", value: "18+" },
  { label: "AI-ready sections", value: "1" },
];

export const featureRows = [
  {
    title: "A clearer first path",
    body: "New readers can begin with the basics, then move into people, language, books, and the Temple story without getting lost.",
    icon: Library,
  },
  {
    title: "Careful claim framing",
    body: "The site separates what Carl and the Saga present from what mainstream history has established.",
    icon: Search,
  },
  {
    title: "Built for the next platform",
    body: "The content model, search index, blog structure, and Ask section are ready for future AI workflows.",
    icon: Sparkles,
  },
];
