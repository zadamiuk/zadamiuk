import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: ${COLORS.sidebar};
  padding: 0 60px;
  max-width: 200px;
  height: 100vh;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Avatar = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 100px;
`;

export const FullName = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: ${COLORS.text};
  margin: 0;
  padding: 0;
`;

export const Title = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${COLORS.secondaryText};
  margin: 0;
  padding: 0;
`;

export const PersonalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TopPersonalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  color: ${COLORS.text};
`;

export const NavigationItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const NavigationLink = styled.a<{
  isActive: boolean;
}>`
  font-size: 16px;
  text-align: center;
  color: ${(props) => (props.isActive ? COLORS.secondaryText : COLORS.text)};
  font-weight: ${(props) => props.isActive && '500'};
  margin: 0;
  padding: 0;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  height: 25px;
  width: 25px;

  &:hover {
    cursor: pointer;
  }
`;

export const Emoji = styled.img`
  height: 18px;
  width: 18px;
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  opacity: 0.3;
`;
