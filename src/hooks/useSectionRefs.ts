import { useInView } from 'react-intersection-observer';

export const useSectionRefs = () => {
  const { ref: experienceRef, inView: experienceInView } = useInView();
  const experience = { ref: experienceRef, inView: experienceInView };

  const { ref: educationRef, inView: educationInView } = useInView();
  const education = { ref: educationRef, inView: educationInView };

  const { ref: projectsRef, inView: projectsInView } = useInView();
  const projects = { ref: projectsRef, inView: projectsInView };

  const { ref: awardsRef, inView: awardsInView } = useInView();
  const awards = { ref: awardsRef, inView: awardsInView };

  const allInViews = [
    experience.inView,
    education.inView,
    projects.inView,
    awards.inView,
  ];

  const updateInViewListToOnlyHaveLatestTrueValue = (allInViews: boolean[]) => {
    let inViewList = [];
    let trueIndexes = [];
    for (let i = 0; i < allInViews.length; i++) {
      if (!trueIndexes.length) {
        if (allInViews[i]) {
          trueIndexes.push(i);
        }
        inViewList.push(allInViews[i]);
      } else {
        if (allInViews[i]) {
          inViewList.pop();
          inViewList.push(false);
        }
        inViewList.push(allInViews[i]);
      }
    }
    return inViewList;
  };

  return {
    experience,
    education,
    projects,
    awards,
    inViewList: updateInViewListToOnlyHaveLatestTrueValue(allInViews),
  };
};
