import { ABOUT_CONFIG } from '../../constants/about';
import { Container, Header } from './About.styles';
import { Techs } from './components/Techs';

export const About = () => (
  <Container>
    <Header>{ABOUT_CONFIG.header}</Header>
    <p>
      I'm Zuza - React developer with over <b>2 years of experience</b>, UX
      passionate, dog mom, basketball fan and plant lover. <br></br>I believe
      frontend developers' mission is to make users' lives easier and I wish one
      day my work will help people in need. <br></br>As I put users' needs first
      I love <b>cooperating with designers</b>. I'm not afraid of new
      technologies - I am a real <b>quick-learner</b> eager to develop skills.
    </p>
    <Techs />
  </Container>
);
