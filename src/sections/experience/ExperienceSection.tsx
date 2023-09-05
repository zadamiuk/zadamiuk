import { forwardRef } from 'react';
import { SectionHeader } from '../../common/SectionHeader/SectionHeader';
import { EXPERIENCE_CONFIG } from '../../constants/experience';
import { Container } from './ExperienceSection.styles';
import { ExperienceItem } from './components/ExperienceItem/ExperienceItem';

export const ExperierceSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Container id='experience' ref={ref}>
      <SectionHeader text='Experience' />
      {EXPERIENCE_CONFIG.map((elem, id) => (
        <ExperienceItem key={id} experienceElem={elem} />
      ))}
    </Container>
  );
});
