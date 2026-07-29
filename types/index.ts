export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

export interface FocusArea {
  title: string;
  description: string;
  icon: string;
}

export interface ReelItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  instagramUrl: string;
  thumbnailGradient: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: SkillItem[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  handle: string;
  description: string;
}
