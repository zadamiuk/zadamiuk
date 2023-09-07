export const ABOUT_CONFIG: {
  header: string;
  techs: { [key: string]: { label: string; stack: string[] } };
} = {
  header: "Hi, I'm glad you're here!",
  techs: {
    react: {
      label: 'React',
      stack: [
        'Javascript',
        'Typescript',
        'Redux',
        'MaterialUI',
        'styled-components',
        'HTML/CSS',
      ],
    },
    python: { label: 'Python', stack: ['Django', 'Django REST Framework'] },
    tools: {
      label: 'Tools',
      stack: [
        'VS Code',
        'Git',
        'Figma',
        'Postman',
        'Docker',
        'Trello',
        'Clickup',
        'Confluence',
      ],
    },
  },
};
