import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { getCourses } from "../../axios/axios";
import { Course } from "../../components/Course/Course";
import { CoursesItem, CoursesList } from "./CoursesStyled";
import { LearningSpinner } from "../../components/Spinner/LearningSpiner";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 10;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(courses.length / itemsPerPage);
  const displayData = courses.slice(pagesVisited, pagesVisited + itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setLoading(true);
    const data = async () => {
      const result = await getCourses();
      setCourses(result);
      setLoading(false);
    };
    data();
  }, []);

  return (
    <>
      {loading ? (
        <LearningSpinner />
      ) : (
        <>
          <CoursesList>
            {displayData.map((course) => (
              <CoursesItem key={course.id}>
                <Course data={course} />
              </CoursesItem>
            ))}
          </CoursesList>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
            pageLinkClassName={"pagination__link"}
            pageClassName={"pagination__page"}
          />
        </>
      )}
    </>
  );
}
