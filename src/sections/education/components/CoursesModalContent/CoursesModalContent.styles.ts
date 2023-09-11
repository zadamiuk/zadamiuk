import { styled } from 'styled-components';
import { COLORS } from '../../../../constants/colors';

export const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 25px;
  align-items: center;
`;

export const Header = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${COLORS.header};
`;

export const Table = styled.table`
  text-align: left;
  min-width: 600px;
`;

export const CourseLabel = styled.td`
  min-width: 400px;
`;

export const CourseGrade = styled.td`
  text-align: center;
`;

export const GradeHeader = styled.th`
  text-align: center;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

export const Clickable = styled.div<{
  disabled?: boolean;
}>`
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  font-size: 18px;
  font-weight: 500;
  color: ${COLORS.header};
  ${(props) => props.disabled && 'opacity: 0.2;'};
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
