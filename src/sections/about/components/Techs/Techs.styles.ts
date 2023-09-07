import { styled } from 'styled-components';
import { COLORS } from '../../../../constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
`;

export const StackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const TechContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const TechItem = styled.p`
  font-style: italic;
  margin: 0;
  padding: 0;
`;

export const Label = styled.p`
  color: ${COLORS.header};
  margin: 0;
  padding: 0;
  font-weight: 500;
`;
