import Papa, { ParseResult } from 'papaparse';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import {
  Clickable,
  Container,
  CourseGrade,
  CourseLabel,
  GradeHeader,
  Header,
  PaginationWrapper,
  Table,
  TopWrapper,
} from './CoursesModalContent.styles';
import { CourseData } from './CoursesModalContent.types';

const SELECT_OPTIONS = [
  { label: '5', value: 5 },
  { label: '10', value: 10 },
  { label: '15', value: 15 },
];

export const CoursesModalContent = () => {
  const [courses, setCourses] = useState<CourseData[] | undefined>();
  const [currPage, setCurrPage] = useState<number>(1);
  const [numOfItemsOnPage, setNumOfItemsOnPage] = useState<number>(10);
  const [numOfPages, setNumOfPages] = useState<number | undefined>();
  const [currCourses, setCurrCourses] = useState<CourseData[] | undefined>();

  const getCSV = () => {
    Papa.parse('/courses.csv', {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ',',
      complete: (results: ParseResult<CourseData>) => {
        setCourses(results.data);
        setCurrCourses(results.data);
      },
    });
  };

  useEffect(() => {
    getCSV();
  }, []);

  useEffect(() => {
    const newCourses = courses?.slice(
      (currPage - 1) * numOfItemsOnPage,
      currPage * numOfItemsOnPage
    );
    setCurrCourses(newCourses);
    courses?.length &&
      setNumOfPages(Math.ceil(courses?.length / numOfItemsOnPage));
  }, [currPage, numOfItemsOnPage, courses]);

  return (
    <Container>
      <TopWrapper>
        <Header>Biomedical Engineering courses at WUT</Header>
        <Select
          value={{
            label: numOfItemsOnPage.toString(),
            value: numOfItemsOnPage,
          }}
          onChange={(option) => option && setNumOfItemsOnPage(option.value)}
          options={SELECT_OPTIONS}
        />
      </TopWrapper>
      <Table>
        <thead>
          <tr>
            <th>Course</th>
            <GradeHeader>Grade</GradeHeader>
          </tr>
        </thead>
        <tbody>
          {currCourses?.map((elem, i) => (
            <tr key={i}>
              <CourseLabel>{elem.label}</CourseLabel>
              <CourseGrade>{elem.grade}</CourseGrade>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationWrapper>
        <Clickable
          onClick={() => currPage !== 1 && setCurrPage(currPage - 1)}
          disabled={currPage === 1}
        >
          {`<<`}
        </Clickable>
        Page {currPage} of {numOfPages}
        <Clickable
          onClick={() => currPage !== numOfPages && setCurrPage(currPage + 1)}
          disabled={currPage === numOfPages}
        >
          {`>>`}
        </Clickable>
      </PaginationWrapper>
    </Container>
  );
};
