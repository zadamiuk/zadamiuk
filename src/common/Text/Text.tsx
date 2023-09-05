import { StyledP } from './Text.styles';
import { TextProps } from './Text.types';

export const Text = ({ italic, bold, color, children }: TextProps) => (
  <StyledP italic={italic} bold={bold} color={color}>
    {children}
  </StyledP>
);
