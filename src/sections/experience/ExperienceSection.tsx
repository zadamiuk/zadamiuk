import { forwardRef } from 'react';
import { SectionContainer } from '../../common/SectionContainer';
import { EXPERIENCE_CONFIG } from '../../constants/experience';
import { NAVIGATION_ITEMS } from '../../constants/navigation';
import { ExperienceItem } from './components/ExperienceItem/ExperienceItem';

export const ExperierceSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <SectionContainer
      id='experience'
      ref={ref}
      header={NAVIGATION_ITEMS.experience}
    >
      {EXPERIENCE_CONFIG.map((elem, id) => (
        <ExperienceItem key={id} experienceElem={elem} />
      ))}
    </SectionContainer>
  );
});
