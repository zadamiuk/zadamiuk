import { useInView } from 'react-intersection-observer';

export const useSectionRefs = () => {
  const { ref: experienceRef, inView: experienceInView } = useInView();
  const experience = { ref: experienceRef, inView: experienceInView };

  const { ref: educationRef, inView: educationInView } = useInView();
  const education = { ref: educationRef, inView: educationInView };

  const { ref: projectsRef, inView: projectsInView } = useInView();
  const projects = { ref: projectsRef, inView: projectsInView };

  const { ref: skillsRef, inView: skillsInView } = useInView();
  const skills = { ref: skillsRef, inView: skillsInView };

  console.log(education.ref);

  const inViewList = [
    experience.inView,
    education.inView,
    projects.inView,
    skills.inView,
  ];

  const refsList = [experience.ref, education.ref, projects.ref, skills.ref];

  return { experience, education, projects, skills, inViewList, refsList };
};
