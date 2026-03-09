export type NavItem = {
  href: string;
  label: string;
};

export type Service = {
  slug: string;
  title: string;
  quoteKey: string;
  seoTitle: string;
  seoDescription: string;
  heroDescription: string;
  summary: string;
  detail: string;
  tags: string[];
  deliverables: string[];
  idealFor: string[];
  outcomes: string[];
};

export type PortfolioItem = {
  slug: string;
  title: string;
  service: string;
  category: string;
  summary: string;
  highlights: string[];
  image: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type SiteContent = {
  name: string;
  tagline: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  ctas: {
    primary: string;
    secondary: string;
  };
  navItems: NavItem[];
};
