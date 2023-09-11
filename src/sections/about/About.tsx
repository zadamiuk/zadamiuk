import { ABOUT_CONFIG } from '../../constants/about';
import { Bold, Container, Header } from './About.styles';
import { Techs } from './components/Techs';

export const About = () => (
  <Container>
    <Header>{ABOUT_CONFIG.header}</Header>
    <p>
      I'm Zuzanna - React developer with over <Bold>2 years of experience</Bold>
      , UX passionate, dog mom, basketball fan and plant lover. <br></br>I
      believe frontend developers' mission is to make users' lives easier and I
      wish one day my work will help people in need. <br></br>As I put users'
      needs first I love <Bold>cooperating with designers</Bold>. I'm not afraid
      of new technologies - I'm a real <Bold>quick-learner</Bold> eager to
      develop skills.
    </p>
    <Techs />
  </Container>
);
