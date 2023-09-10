import { Course } from '../main/models/main-models';

export interface Social {
  gitHub: string;
  linkedIn: string;
  mail: string;
}
export const skills: string[] = [
  'JavaScript',
  'TypeScript',
  'Angular',
  'NgRx, RxJs',
  'NodeJS',
  'NestJs',
  'TypeORM',
  'Postgresql',
  'Docker',
  'GraphQL',
  'Rest API',
  'HTML',
  'CSS, ScSS',
  'Tailwind',
  'Git',
  'Webpack',
];

export const courses: Course[] = [
  {
    date: 'June, 2023 - September, 2023',
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
    date: 'September, 2022 - March, 2023',
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
