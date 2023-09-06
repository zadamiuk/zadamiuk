import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Header = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.header};
  padding: 0;
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
