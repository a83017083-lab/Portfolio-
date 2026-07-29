import {
  NavLink,
  StatItem,
  FocusArea,
  ReelItem,
  ProjectItem,
  SkillCategory,
  SocialLink,
} from "@/types";

export const SITE = {
  name: "Abhinav",
  brand: "buildweth_abhinavk7852",
  email: "a83017083@gmail.com",
  instagram: "https://www.instagram.com/buildweth_abhinavk7852",
  github: "https://github.com/a83017083-lab",
  linkedin: "https://in.linkedin.com/in/abhinav-kumar-undefined-b6996a418",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Reels & Content", href: "#reels" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const STATS: StatItem[] = [
  { label: "Projects Built", value: 25, suffix: "+" },
  { label: "Content Reach", value: 150, suffix: "K+" },
  { label: "Tech Stack Mastered", value: 12, suffix: "+" },
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    title: "Building Modern Web Applications",
    description:
      "Designing and shipping full-stack products with React, Next.js, and clean scalable architecture.",
    icon: "Code2",
  },
  {
    title: "Experimenting with AI Tools",
    description:
      "Building AI-powered automations and agent workflows with n8n, LLMs, and modern APIs.",
    icon: "Sparkles",
  },
  {
    title: "Content Creation",
    description:
      "Turning the build process into engaging reels and short-form content for the developer community.",
    icon: "Clapperboard",
  },
  {
    title: "Sharing Knowledge",
    description:
      "Breaking down complex technical concepts into content that's simple, visual, and actionable.",
    icon: "BookOpen",
  },
  {
    title: "Solving Real Problems",
    description:
      "Focused on practical products and automations that solve real workflow and business problems.",
    icon: "Target",
  },
];

export const REELS: ReelItem[] = [
  {
    id: "reel-1",
    title: "Building a Full-Stack App in 60 Seconds",
    description:
      "A rapid-fire walkthrough of shipping a production feature from idea to deploy.",
    category: "Build Log",
    tags: ["#buildinpublic", "#nextjs", "#reels"],
    instagramUrl: "https://www.instagram.com/buildweth_abhinavk7852",
    thumbnailGradient: "from-cyan-500/30 via-violet-500/20 to-purple-600/30",
  },
  {
    id: "reel-2",
    title: "AI Automation That Saves 10 Hours a Week",
    description:
      "Breaking down an n8n workflow that automates a real business process end-to-end.",
    category: "AI Tools",
    tags: ["#automation", "#n8n", "#ai"],
    instagramUrl: "https://www.instagram.com/buildweth_abhinavk7852",
    thumbnailGradient: "from-violet-500/30 via-purple-500/20 to-pink-500/30",
  },
  {
    id: "reel-3",
    title: "Design a Glassmorphism UI Step-by-Step",
    description:
      "Tutorial on crafting premium glass UI components with Tailwind and Framer Motion.",
    category: "UI/UX",
    tags: ["#design", "#tailwind", "#uiux"],
    instagramUrl: "https://www.instagram.com/buildweth_abhinavk7852",
    thumbnailGradient: "from-cyan-500/30 via-blue-500/20 to-violet-600/30",
  },
  {
    id: "reel-4",
    title: "From Idea to Startup: My Founder Journey",
    description:
      "Sharing the honest story of building products as a solo founder and creator.",
    category: "Entrepreneurship",
    tags: ["#startup", "#founder", "#journey"],
    instagramUrl: "https://www.instagram.com/buildweth_abhinavk7852",
    thumbnailGradient: "from-purple-500/30 via-pink-500/20 to-cyan-500/30",
  },
  {
    id: "reel-5",
    title: "Top 5 VS Code Extensions for Developers",
    description:
      "Quick-fire recommendations to speed up your daily development workflow.",
    category: "Tools",
    tags: ["#vscode", "#productivity", "#devtools"],
    instagramUrl: "https://www.instagram.com/buildweth_abhinavk7852",
    thumbnailGradient: "from-emerald-500/20 via-cyan-500/20 to-violet-500/30",
  },
  {
    id: "reel-6",
    title: "How I Structure a Next.js Project",
    description:
      "A clean, reusable folder structure for scalable production Next.js apps.",
    category: "Build Log",
    tags: ["#nextjs", "#architecture", "#reactjs"],
    instagramUrl: "https://www.instagram.com/buildweth_abhinavk7852",
    thumbnailGradient: "from-cyan-500/30 via-violet-500/20 to-purple-600/30",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "project-1",
    title: "S³AI+ Edtech Platform",
    description:
      "An AI-guided edtech platform for Indian students, combining structured learning paths with real-time AI assistance.",
    category: "Full-Stack",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: SITE.github,
    gradient: "from-cyan-500 to-violet-600",
  },
  {
    id: "project-2",
    title: "Go School Homework App",
    description:
      "RBAC-driven homework management system with Principal, Teacher, Student, and Parent portals, offline-first PWA support.",
    category: "Full-Stack",
    techStack: ["React", "Node.js", "PWA", "AI Guardrails"],
    liveUrl: "#",
    githubUrl: SITE.github,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: "project-3",
    title: "Sweet Crumbs Concierge",
    description:
      "Automated WhatsApp ordering system for a bakery, powered by an AI agent handling orders end-to-end.",
    category: "Automation",
    techStack: ["n8n", "WhatsApp Business API", "AI Agents"],
    liveUrl: "#",
    githubUrl: SITE.github,
    gradient: "from-pink-500 to-violet-600",
  },
  {
    id: "project-4",
    title: "Saffron Ember",
    description:
      "Premium single-file restaurant website with glassmorphism UI, multi-theme modes, and a live GST-aware cart system.",
    category: "Web Design",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "#",
    githubUrl: SITE.github,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "project-5",
    title: "AI Automation & Video Editing Agency",
    description:
      "Co-founded service business combining AI process automation with short-form video editing for creators and brands.",
    category: "Automation",
    techStack: ["n8n", "Razorpay", "Content Systems"],
    liveUrl: "#",
    githubUrl: SITE.github,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: "project-6",
    title: "The Royal Taste",
    description:
      "A three-file restaurant site with 31 menu items, nutritional data, promo codes, wishlist, and a live chat widget.",
    category: "Web Design",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "#",
    githubUrl: SITE.github,
    gradient: "from-violet-500 to-cyan-600",
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "MonitorSmartphone",
    skills: [
      { name: "React", icon: "Atom", level: 90 },
      { name: "Next.js", icon: "Triangle", level: 88 },
      { name: "TypeScript", icon: "FileCode2", level: 82 },
      { name: "Tailwind CSS", icon: "Palette", level: 92 },
      { name: "JavaScript", icon: "Braces", level: 90 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [{ name: "Node.js", icon: "Hexagon", level: 78 }],
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", icon: "GitBranch", level: 85 },
      { name: "GitHub", icon: "Github", level: 88 },
      { name: "VS Code", icon: "Code2", level: 90 },
      { name: "AI Tools", icon: "BrainCircuit", level: 85 },
    ],
  },
  {
    category: "Content Creation",
    icon: "Video",
    skills: [
      { name: "Content Strategy", icon: "Lightbulb", level: 88 },
      { name: "Video Editing", icon: "Film", level: 84 },
      { name: "Instagram Growth", icon: "TrendingUp", level: 86 },
      { name: "Reels Creation", icon: "Clapperboard", level: 90 },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    href: SITE.instagram,
    icon: "Instagram",
    handle: "@buildweth_abhinavk7852",
    description: "Reels, build logs, and behind-the-scenes content",
  },
  {
    name: "GitHub",
    href: SITE.github,
    icon: "Github",
    handle: "a83017083-lab",
    description: "Open-source projects and production-ready code",
  },
  {
    name: "LinkedIn",
    href: SITE.linkedin,
    icon: "Linkedin",
    handle: "Abhinav Kumar",
    description: "Professional journey and career updates",
  },
  {
    name: "Email",
    href: `mailto:${SITE.email}`,
    icon: "Mail",
    handle: SITE.email,
    description: "Direct line for collaborations and opportunities",
  },
];
