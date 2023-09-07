import { forwardRef } from 'react';
import { SectionContainer } from '../../common/SectionContainer';
import { AWARDS_CONFIG } from '../../constants/awards';
import { NAVIGATION_ITEMS } from '../../constants/navigation';
import { AwardsItem } from './components/AwardsItem/AwardsItem';

export const AwardsSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <SectionContainer
      id={NAVIGATION_ITEMS.awards.id}
      ref={ref}
      header={NAVIGATION_ITEMS.awards.name}
    >
      {AWARDS_CONFIG.map((elem, id) => (
        <AwardsItem key={id} awardElem={elem} />
      ))}
    </SectionContainer>
  );
});
