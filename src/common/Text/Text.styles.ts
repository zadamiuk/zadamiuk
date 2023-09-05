import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const StyledP = styled.p<{
  italic?: boolean;
  bold?: boolean;
  color?: string;
}>`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: ${(props) => props.color ?? COLORS.text};
  ${(props) => props.italic && 'font-style: italic;'}
  ${(props) => props.bold && 'font-weight: bold;'}
`;
