export interface Project {
  writeLanguages: string;
  projectName: string;
  description: string;
  imgPath: string;
  link: string
}

export interface Course {
  date: string;
  progress: string;
  progressLink?: string;
  courseName: string;
  institution: string;
  institutionLink: string;
}

export interface Language {
  language: string;
  level: string;
}


export interface Experience {
  date: string;
  jobTitle: string;
  company: string;
  location?: string;
  whatIDo: string[];
}
