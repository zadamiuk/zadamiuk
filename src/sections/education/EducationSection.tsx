import { forwardRef, useState } from 'react';
import ReactModal from 'react-modal';
import { SectionContainer } from '../../common/SectionContainer';
import { EDUCATION_CONFIG } from '../../constants/education';
import { NAVIGATION_ITEMS } from '../../constants/navigation';
import { Button } from './EducationSection.styles';
import { CoursesModalContent } from './components/CoursesModalContent/CoursesModalContent';
import { customModalStyles } from './components/CoursesModalContent/CoursesModalContent.styles';
import { EducationItem } from './components/ExperienceItem/EducationItem';

export const EducationSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <SectionContainer
        id={NAVIGATION_ITEMS.education.id}
        ref={ref}
        header={NAVIGATION_ITEMS.education.name}
      >
        {EDUCATION_CONFIG.map((elem, id) => (
          <EducationItem key={id} educationElem={elem} />
        ))}
      </SectionContainer>
      <Button onClick={() => setIsOpen(true)}>
        Courses' details and grades
      </Button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customModalStyles}
      >
        <CoursesModalContent />
      </ReactModal>
    </>
  );
});
