import { Text } from '../../../../common/Text';
import {
  ExperienceItemWrapper,
  Faculty,
  Header,
  Row,
} from './ProjectsItem.styles';
import { ProjectsItemType } from './ProjectsItem.types';

export const ProjectsItem = ({ projectElem }: ProjectsItemType) => (
  <ExperienceItemWrapper>
    <Header>{projectElem.title}</Header>
    <Faculty>
      {projectElem.techStack}, {projectElem.type}
    </Faculty>
    <Row>{projectElem.description}</Row>
    <Header>Libraries used in project:</Header>
    <Text italic>{projectElem.libs}</Text>
  </ExperienceItemWrapper>
);
