import { ABOUT_CONFIG } from '../../../../constants/about';
import {
  Container,
  Label,
  StackWrapper,
  TechContainer,
  TechItem,
} from './Techs.styles';

export const Techs = () => (
  <Container>
    {Object.keys(ABOUT_CONFIG.techs).map((tech, id) => (
      <TechContainer key={id}>
        <Label>{ABOUT_CONFIG.techs[tech].label}</Label>
        <StackWrapper>
          {ABOUT_CONFIG.techs[tech].stack.map((elem, n) => (
            <TechItem key={`${ABOUT_CONFIG.techs[tech].label}-${n}`}>
              {elem}
              {n < ABOUT_CONFIG.techs[tech].stack.length - 1 && ','}
            </TechItem>
          ))}
        </StackWrapper>
      </TechContainer>
    ))}
  </Container>
);
