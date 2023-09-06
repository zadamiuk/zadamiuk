import { forwardRef } from 'react';
import { SectionContainer } from '../../common/SectionContainer';
import { NAVIGATION_ITEMS } from '../../constants/navigation';
import { PROJECTS_CONFIG } from '../../constants/projects';
import { ProjectsItem } from './components/ProjectsItem/ProjectsItem';

export const ProjectsSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <SectionContainer
      id={NAVIGATION_ITEMS.projects.id}
      ref={ref}
      header={NAVIGATION_ITEMS.projects.name}
    >
      {PROJECTS_CONFIG.map((elem, id) => (
        <ProjectsItem key={id} projectElem={elem} />
      ))}
    </SectionContainer>
  );
});
