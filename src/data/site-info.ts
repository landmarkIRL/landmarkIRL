import type { IconType } from "react-icons/lib";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailSendFill,
} from "react-icons/ri";

type SocialPlatform = "github" | "linkedin" | "email";

export type SocialLink = {
  name: string;
  text: string;
  href: string;
  Icon: IconType;
};

export type SiteInfo = {
  name: string;
  fullName: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  socialLinks: Record<SocialPlatform, SocialLink>;
};

const siteInfo: SiteInfo = {
  name: "LandmarkIRL",
  fullName: "Landmark in real life",
  title: "Landmark in real life",
  description:
    "A chronicle of the lives of my former classmates from Landmark University.",
  image: {
    src: "/og/social.png",
    alt: "Landmark in real life",
  },
  socialLinks: {
    github: {
      name: "GitHub",
      text: "Go to LandmarkIRL's GitHub repo",
      href: "https://github.com/landmarkirl",
      Icon: RiGithubFill,
    },
    linkedin: {
      name: "LinkedIn",
      text: "Connect with David on LinkedIn",
      href: "https://www.linkedin.com/in/david-umoru",
      Icon: RiLinkedinBoxFill,
    },
    email: {
      name: "Email",
      text: "Email David",
      href: "mailto:hey@davidumoru.me",
      Icon: RiMailSendFill,
    },
  },
};

export default siteInfo;
