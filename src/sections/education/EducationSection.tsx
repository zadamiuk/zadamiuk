import { forwardRef } from 'react';
import { SectionContainer } from '../../common/SectionContainer';
import { EDUCATION_CONFIG } from '../../constants/education';
import { NAVIGATION_ITEMS } from '../../constants/navigation';
import { EducationItem } from './components/ExperienceItem/EducationItem';

export const EducationSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <SectionContainer
      id={NAVIGATION_ITEMS.education.id}
      ref={ref}
      header={NAVIGATION_ITEMS.education.name}
    >
      {EDUCATION_CONFIG.map((elem, id) => (
        <EducationItem key={id} educationElem={elem} />
      ))}
    </SectionContainer>
  );
});
