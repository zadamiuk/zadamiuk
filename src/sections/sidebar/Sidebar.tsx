import avatar from '../../assets/avatar.jpg';
import eyes from '../../assets/emojis/eyes.png';
import email from '../../assets/social-media/email.png';
import github from '../../assets/social-media/github.png';
import linkedin from '../../assets/social-media/linkedin.png';
import { EXTERNAL_URLS } from '../../constants/external-urls';
import { NAVIGATION_ITEMS } from '../../constants/navigation';

import {
  Avatar,
  AvatarWrapper,
  Container,
  Emoji,
  FullName,
  Icon,
  InfoWrapper,
  Navigation,
  NavigationItem,
  NavigationLink,
  PersonalInfoWrapper,
  SocialWrapper,
  Techs,
  TopPersonalInfoWrapper,
} from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({ navItemsActivityList }: SidebarProps) => {
  return (
    <Container>
      <InfoWrapper>
        <AvatarWrapper>
          <Avatar src={avatar} />
        </AvatarWrapper>
        <PersonalInfoWrapper>
          <TopPersonalInfoWrapper>
            <FullName>Zuzanna Adamiuk</FullName>
            <Techs>React • Typescript • Python</Techs>
          </TopPersonalInfoWrapper>
          <Navigation>
            {Object.keys(NAVIGATION_ITEMS).map((elem, no) => (
              <NavigationItem key={elem}>
                <NavigationLink
                  isActive={navItemsActivityList[no]}
                  href={`#${elem}`}
                >
                  {NAVIGATION_ITEMS[elem]}
                </NavigationLink>
                {navItemsActivityList[no] && <Emoji src={eyes} />}
              </NavigationItem>
            ))}
          </Navigation>
        </PersonalInfoWrapper>
      </InfoWrapper>
      <SocialWrapper>
        <Icon
          src={linkedin}
          onClick={() => window.open(EXTERNAL_URLS.linkedin, '_blank')}
        />
        <Icon
          src={github}
          onClick={() => window.open(EXTERNAL_URLS.github, '_blank')}
        />
        <Icon
          src={email}
          onClick={() => window.location.assign(EXTERNAL_URLS.mail)}
        />
      </SocialWrapper>
    </Container>
  );
};
