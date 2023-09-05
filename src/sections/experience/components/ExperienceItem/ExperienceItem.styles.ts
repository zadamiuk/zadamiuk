import { styled } from 'styled-components';
import { COLORS } from '../../../../constants/colors';

export const ExperienceItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const Header = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${COLORS.header};
`;

export const Position = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: ${COLORS.text};
`;

export const Date = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: ${COLORS.text};
`;

export const Label = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
`;

export const StyledBulletList = styled.ul`
  margin: 0 16px;
  padding: 0;
`;
