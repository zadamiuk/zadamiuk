import {
  ExperienceItemWrapper,
  Faculty,
  Header,
  Position,
  Row,
} from './EducationItem.styles';
import { EducationItemType } from './EducationItem.types';

export const EducationItem = ({ educationElem }: EducationItemType) => (
  <ExperienceItemWrapper>
    <Header>{educationElem.university}</Header>
    <Faculty>{educationElem.faculty}</Faculty>
    <Position>
      {educationElem.course}
      {educationElem.speciality && `, speciality ${educationElem.speciality}`} (
      {educationElem.date})
    </Position>
    <Row>{educationElem.description}</Row>
  </ExperienceItemWrapper>
);
