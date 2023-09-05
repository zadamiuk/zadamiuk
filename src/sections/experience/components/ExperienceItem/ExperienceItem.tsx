import { Text } from '../../../../common/Text';
import {
  ExperienceItemWrapper,
  Header,
  Position,
  Row,
  StyledBulletList,
} from './ExperienceItem.styles';
import { ExperienceItemType } from './ExperienceItem.types';

export const ExperienceItem = ({ experienceElem }: ExperienceItemType) => (
  <ExperienceItemWrapper>
    <Header>{experienceElem.project}</Header>
    <Position>
      {experienceElem.position} in {experienceElem.company} (
      {experienceElem.date})
    </Position>
    <StyledBulletList>
      {experienceElem.description.map((item, n) => (
        <li key={n}>
          <Text>{item}</Text>
        </li>
      ))}
    </StyledBulletList>
    <Row>
      <Header>Technologies:</Header>
      <Text italic>{experienceElem.technologies}</Text>
    </Row>
  </ExperienceItemWrapper>
);
