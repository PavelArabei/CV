import { Course, Experience } from '../main/models/main-models';

export interface Social {
  gitHub: string;
  linkedIn: string;
  mail: string;
}

export interface Skills {
  global: { name: string; skills: string[] };
  frontend: { name: string; skills: string[] };
  backend: { name: string; skills: string[] };
  aws: { name: string; skills: string[] };
}

export const skills: Skills = {
  global: {
    name: 'Global',
    skills: ['Git', 'Webpack', 'Docker', 'Rest API'],
  },
  frontend: {
    name: 'Frontend',
    skills: [
      'TypeScript',
      'JavaScript',
      'Angular',
      'NgRx, RxJs',
      'HTML',
      'CSS, ScSS',
      'Tailwind',
      'Angular Material',
    ],
  },
  backend: {
    name: 'Backend',
    skills: ['NodeJS', 'NestJs', 'TypeORM', 'Postgresql'],
  },
  aws: {
    name: 'AWS',
    skills: [
      'S3',
      'RDS',
      'API Gateway',
      'Lambda',
      'CloudFront',
      'SNS',
      'SQS',
      'DynamoDB',
    ],
  },
};

export const courses: Course[] = [
  {
    date: 'May, 2024 -   August, 2024',
    progress: 'Certificate',
    progressLink: 'https://app.rs.school/certificate/ju9j68ja',
    courseName: 'AWS Cloud Developer',
    institution: 'Rolling Scopes School',
    institutionLink: 'https://rs.school/courses/aws-fundamentals/',
  },
  {
    date: 'April, 2024 -  May, 2024',
    progress: 'Certificate',
    progressLink: 'https://app.rs.school/certificate/8u4shn5h',
    courseName: 'AWS Fundamentals',
    institution: 'Rolling Scopes School',
    institutionLink: 'https://rs.school/courses/aws-fundamentals/',
  },
  {
    date: 'June, 2023 - Sep, 2023',
    progress: 'Certificate',
    progressLink: 'https://app.rs.school/certificate/fbfy7552',
    courseName: 'NodeJS',
    institution: 'Rolling Scopes School',
    institutionLink: 'https://rs.school/nodejs/',
  },
  {
    date: 'March, 2023 - June, 2023',
    progress: 'Certificate',
    progressLink: 'https://app.rs.school/certificate/25iky07t',
    courseName: 'Angular',
    institution: 'Rolling Scopes School',
    institutionLink: 'https://rs.school/angular/',
  },
  {
    date: 'Sep, 2022 - March, 2023',
    progress: 'Certificate',
    progressLink: 'https://app.rs.school/certificate/hk7ej1lf',
    courseName: 'Javascript/Front-End',
    institution: 'Rolling Scopes School',
    institutionLink: 'https://rs.school/js/',
  },
  {
    date: '2013-2018',
    progress: 'Engineer',
    courseName: 'Material handling, construction, road machinery and equipment',
    institution: 'Belarusian National Technical University',
    institutionLink: 'https://bntu.by/',
  },
];

export const social: Social = {
  gitHub: 'https://github.com/PavelArabei',
  linkedIn: 'https://www.linkedin.com/in/pavel-arabei-a6a77527a/',
  mail: 'mailto:Ptashkaaaaaa@gmail.com',
};

export const works: Experience[] = [
  {
    date: '2022-2024',
    jobTitle: 'Frontend, Backend, AWS',
    company: 'RSSchool',
    whatIDo: [
      'In spring and summer 2024, I successfully completed the "AWS Fundamentals" and "AWS Cloud Developer" courses, where I mastered AWS technologies such as S3, RDS, API Gateway, Lambda, CloudFront , SNS, SQS, and DynamoDB',
      'Earlier in 2023, I took the NodeJS course, diving deep into development with Nest and PostgreSQL, Docker, as well as the Angular course, where I explored state management using NgRx and reactive programming with RxJS.',
      'My learning journey began in 2022 with the "JavaScript/Front-End" course, where I acquired foundational knowledge of web development and programming.',
    ],
  },
];
