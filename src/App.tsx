import {
  ContentContainer,
  MainContainer,
  SidebarContainer,
} from './App.styles';
import { useSectionRefs } from './hooks/useSectionRefs';
import { ExperierceSection } from './sections/experience/ExperienceSection';
import { Sidebar } from './sections/sidebar';

function App() {
  const { experience, education, projects, skills, inViewList, refsList } =
    useSectionRefs();

  return (
    <MainContainer>
      <SidebarContainer>
        <Sidebar
          navItemsActivityList={inViewList}
          navItemsRefsList={refsList}
        />
      </SidebarContainer>
      <ContentContainer>
        <ExperierceSection ref={experience.ref} />
        <ExperierceSection ref={education.ref} />
        <ExperierceSection ref={projects.ref} />
        <ExperierceSection ref={skills.ref} />
      </ContentContainer>
    </MainContainer>
  );
}

export default App;
