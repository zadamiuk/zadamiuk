import styled from 'styled-components';
import { COLORS } from './constants/colors';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${COLORS.background};
`;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  flex-grow: 4;
`;
