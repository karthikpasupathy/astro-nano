import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Karthik Pasupathy",
  EMAIL: "rkarthikpasupathy@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Common man. Uncommon thoughts. Write and Marketer from Madras.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "எனது கிறுக்கல்களின் தொகுப்பு",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/wordsbykp",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/karthikpasupathy"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/karthikpasupathy",
  }
];
