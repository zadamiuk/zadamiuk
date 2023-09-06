import {
  ContentContainer,
  MainContainer,
  SidebarContainer,
} from './App.styles';
import { useSectionRefs } from './hooks/useSectionRefs';
import { EducationSection } from './sections/experience copy/EducationSection';
import { ExperierceSection } from './sections/experience/ExperienceSection';
import { Sidebar } from './sections/sidebar';

function App() {
  const { experience, education, projects, skills, inViewList } =
    useSectionRefs();

  return (
    <MainContainer>
      <SidebarContainer>
        <Sidebar navItemsActivityList={inViewList} />
      </SidebarContainer>
      <ContentContainer>
        <ExperierceSection ref={experience.ref} />
        <EducationSection ref={education.ref} />
        <ExperierceSection ref={projects.ref} />
        <ExperierceSection ref={skills.ref} />
      </ContentContainer>
    </MainContainer>
  );
}

export default App;
