import { styled } from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Button = styled.button`
  border: 0.5px solid ${COLORS.header};
  background: transparent;
  border-radius: 50px;
  padding: 15px;
  width: max-content;
  cursor: pointer;
  opacity: 0.8;
  font-size: 14px;
  letter-spacing: 1.5px;
  color: ${COLORS.header};
  &:hover {
    background: ${COLORS.header};
    color: white;
  }
`;
