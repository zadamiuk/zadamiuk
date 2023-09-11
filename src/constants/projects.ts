import { ProjectsEntity } from '../sections/projects/types/ProjectsEntity.types';

export const PROJECTS_CONFIG: ProjectsEntity[] = [
  {
    title: 'myIdego',
    techStack: 'React (Javascript)',
    type: 'commercial project',
    description:
      "A web application designed to help Idego's employees with contracts management and work organization. All users can apply for benefits, edit their personal data and check details about their form of employment including remaining holidays. HR team has additional functionalities such as sending messages to employees under their supervision. The project uses Google API for authentication of users, displaying company's calendar and shared Google files. Application is currently used by all Idego's employees.",
    libs: 'Redux, Axios, Material UI, styled-components, React Quill and React Toastify.',
  },
  {
    title: 'Devsourcing',
    techStack: 'Python + React (Javascript and Typescript)',
    type: 'commercial project',
    description:
      "A web platform used to match clients with developers who fulfill their requirements. Main functionalities of the application are monitoring whole recruitment processes including creating CVs in company's customizable template and communication with potential employers. Moreover the platform provides wide variety of graphically presented statistics of company's performance. Application is currently used on daily basis by Idego's HR and Sales teams along with multiple external clients.",
    libs: 'Django, Django REST Framework, RQ, Redux, Material UI, styled-components and chart.js',
  },
  {
    title: 'Mobile application "Dzienniczek Seniora"',
    techStack: 'Python + React Native',
    type: 'Bachelor thesis',
    description:
      'A project which aim is to enable the elderly to store their daily measurements. While creating the project special emphasis was placed on appropriate graphic interface for project’s target group. Besides archiving, users are able to display data visualizations and share them with previously chosen supervisor. There is also a possibility to add reminders about measurements that would be sent to user as push notifications.',
    libs: 'Django, Django REST Framework, Simple JWT, Axios, React Native AsyncStorage, Native Stack Navigator, React Native Push Notifications ',
  },
];
