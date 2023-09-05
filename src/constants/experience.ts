import { ExperienceEntity } from '../sections/experience/types/ExperienceEntity.types';

export const EXPERIENCE_CONFIG: ExperienceEntity[] = [
  {
    project: 'myCrew - a mobile application for team management',
    position: 'Frontend developer',
    company: 'Accenture',
    date: 'July 2023 - current',
    description: [
      'Development of application for both Android and iOS',
      'Research and development of project architecture',
      'Implementation navigation, pages and reusable components',
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
      'Development of web platform for monitoring recruitment process',
      'Development of web platform for monitoring recruitment process',
      'Implementation communication between frontend and backend',
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
      'Development of application for contracts management and work organization',
      'Creating complex layout based on close collaboration with UX team',
      'Implementation additional functionalities for HR team such as sending messages to employees',
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
      'Development of web application which provides access to movies database',
      'Actualisation of views, refactoring of legacy code',
    ],
    technologies: 'Django, React.js, Material UI',
  },
];
