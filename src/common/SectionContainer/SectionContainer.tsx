import { forwardRef } from 'react';
import { Container, Header, ItemsWrapper } from './SectionContainer.styles';
import { SectionContainerProps } from './SectionContainer.types';

export const SectionContainer = forwardRef<
  HTMLDivElement,
  SectionContainerProps
>(({ id, header, children }, ref) => (
  <Container id={id} ref={ref}>
    <Header>{header}</Header>
    <ItemsWrapper>{children}</ItemsWrapper>
  </Container>
));
