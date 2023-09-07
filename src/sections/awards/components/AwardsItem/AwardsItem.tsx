import {
  ExperienceItemWrapper,
  Faculty,
  Header,
  Row,
} from './AwardsItem.styles';
import { AwardsItemType } from './AwardsItem.types';

export const AwardsItem = ({ awardElem }: AwardsItemType) => (
  <ExperienceItemWrapper>
    <Header>{awardElem.title}</Header>
    <Faculty>
      {awardElem.provider} ({awardElem.date})
    </Faculty>
    <Row>{awardElem.description}</Row>
  </ExperienceItemWrapper>
);
