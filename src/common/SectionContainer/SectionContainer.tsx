import { Container, Header, ItemsWrapper } from './SectionContainer.styles';
import { SectionContainerProps } from './SectionContainer.types';

export const SectionContainer = ({
  id,
  ref,
  header,
  children,
}: SectionContainerProps) => (
  <Container id={id} ref={ref}>
    <Header>{header}</Header>
    <ItemsWrapper>{children}</ItemsWrapper>
  </Container>
);
