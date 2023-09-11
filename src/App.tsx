import Papa, { ParseResult } from 'papaparse';
import { useEffect, useState } from 'react';
import {
  ContentContainer,
  MainContainer,
  SidebarContainer,
} from './App.styles';
import { useSectionRefs } from './hooks/useSectionRefs';
import { About } from './sections/about/About';
import { AwardsSection } from './sections/awards/AwardsSection';
import { EducationSection } from './sections/education/EducationSection';
import { ExperierceSection } from './sections/experience/ExperienceSection';
import { ProjectsSection } from './sections/projects/ProjectsSection';
import { Sidebar } from './sections/sidebar';
type Data = {
  label: string;
  grade: string;
};

function App() {
  const { experience, education, projects, awards, inViewList } =
    useSectionRefs();
  const [values, setValues] = useState<Data[] | undefined>();
  const getCSV = () => {
    Papa.parse('/courses.csv', {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ',',
      complete: (results: ParseResult<Data>) => {
        setValues(results.data);
      },
    });
  };
  useEffect(() => {
    getCSV();
  }, []);

  return (
    <MainContainer>
      <SidebarContainer>
        <Sidebar navItemsActivityList={inViewList} />
      </SidebarContainer>
      <ContentContainer>
        <About />
        <ExperierceSection ref={experience.ref} />
        <ProjectsSection ref={projects.ref} />
        <EducationSection ref={education.ref} />
        <AwardsSection ref={awards.ref} />
      </ContentContainer>
    </MainContainer>
  );
}

export default App;
