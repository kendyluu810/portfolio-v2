interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: String;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Technology extends SanityBody {
  _type: "technology";
  image: Image;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  summary: string;
  technologies: Technology[];
  linkToBuild: string;
  linkToDemo: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
