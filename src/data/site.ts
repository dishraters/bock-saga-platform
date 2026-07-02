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
    href: `/blog#${post.slug}`,
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
