import { ExperienceEntity } from '../sections/experience/types/ExperienceEntity.types';

export const EXPERIENCE_CONFIG: ExperienceEntity[] = [
  {
    project: 'myCrew - a mobile application for team management',
    position: 'Frontend developer',
    company: 'Accenture',
    date: 'July 2023 - current',
    description: [
      'development of application for both Android and iOS',
      'research and development of project architecture',
      'implementation navigation, pages and reusable components',
    ],
    technologies:
      'React Native, Typescript, React Navigation, React Native Paper, Jest',
  },
  {
    project:
      'Devsourcing – matching clients with developers for Software House',
    position: 'Fullstack developer',
    company: 'Idego Group',
    date: 'October 2021 - June 2023',
    description: [
      'development of web platform for monitoring recruitment process',
      'implementation new features using functional components',
      'taking part in design process focusing on UX',
      'rewriting application to Typescript',
      'implementation communication between frontend and backend',
      'rewriting application to Typescript',
      'maintenance and fixing occurring bugs',
    ],
    technologies:
      'React.js, Typescript, Redux, Material UI, styled components, Django, Django REST Framework',
  },
  {
    project: 'myIdego - contracts management for Software House',
    position: 'Frontend developer',
    company: 'Idego Group',
    date: 'January 2023 - June 2023',
    description: [
      'development of application for contracts management and work organization',
      'improving code readability by using custom hooks',
      'cooperating with designers on UX/UI',
    ],
    technologies:
      'React.js, Redux, Material UI, styled components, React Quill, React Toastify',
  },
  {
    project: 'Python Development Internship',
    position: 'Python developer intern',
    company: 'Idego Group',
    date: 'July 2021 - October 2021',
    description: [
      'creating web application providing access to movies database from scratch',
      'actualisation of views, refactoring of legacy code',
    ],
    technologies: 'Django, React.js, Material UI',
  },
];
