import { styled } from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
`;

export const Header = styled.div`
  color: ${COLORS.header};
  font-weight: 500;
`;

export const Bold = styled.b`
  color: ${COLORS.header};
  font-weight: 500;
`;
