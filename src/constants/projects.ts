import { ProjectsEntity } from '../sections/projects/types/ProjectsEntity.types';

export const PROJECTS_CONFIG: ProjectsEntity[] = [
  {
    title: 'Mobile application "Dzienniczek Seniora"',
    techStack: 'Python + React Native',
    type: 'Bachelor thesis',
    description:
      'A project which aim is to enable the elderly to store their daily measurements. While creating the project special emphasis was placed on appropriate graphic interface for project’s target group. Besides archiving, users are able to display data visualizations and share them with previously chosen supervisor. There is also a possibility to add reminders about measurements that would be sent to user as push notifications.',
    libs: 'Django, Django REST Framework, Simple JWT, Axios, React Native AsyncStorage, Native Stack Navigator, React Native Push Notifications ',
  },
];
