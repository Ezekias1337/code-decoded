// Library Imports
import { useEffect, useState, FC } from "react";
// CSS
import "./pagination.scss";

interface PaginationProps {
  numberOfPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  setChunkedArrayIndex: (index: number) => void;
  defaultChunkSize: number;
}

const parseReversePagination = (
  currentPage: number,
  setCurrentPage: (page: number) => void
): void => {
  const potentialPageIndex = currentPage - 1;
  if (potentialPageIndex >= 1) {
    setCurrentPage(potentialPageIndex);
  }
};

const parseForwardPagination = (
  currentPage: number,
  setCurrentPage: (page: number) => void,
  numberOfPages: number
): void => {
  const potentialPageIndex = currentPage + 1;
  if (potentialPageIndex <= numberOfPages) {
    setCurrentPage(potentialPageIndex);
  }
};

export const Pagination: FC<PaginationProps> = (props) => {
  const { numberOfPages } = props;
  const [arrayOfPages, setArrayOfPages] = useState<number[]>([]);

  useEffect(() => {
    const tempArrayOfPages: number[] = [];
    for (let i = 0; i < numberOfPages; i++) {
      tempArrayOfPages.push(i);
    }
    setArrayOfPages(tempArrayOfPages);
  }, [numberOfPages]);

  useEffect(() => {
    props.setChunkedArrayIndex(props.currentPage - 1);
  }, [props.currentPage]);

  if (arrayOfPages?.length > 0) {
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li
            className={`${
              props.currentPage - 1 > 0 ? "" : "disabled-page-item "
            }page-item`}
          >
            <a
              className={`${
                props.currentPage - 1 > 0 ? "" : "disabled "
              }page-link`}
              onClick={() =>
                parseReversePagination(props.currentPage, props.setCurrentPage)
              }
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>

          {arrayOfPages.map((page, index) => (
            <li className={`page-item page-number-${page}`} key={index}>
              <a
                className={`${
                  index === props.currentPage - 1 ? "active " : ""
                }page-link align-items-center display-flex`}
                onClick={() => props.setCurrentPage(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}

          <li
            className={`${
              props.currentPage < numberOfPages ? "" : "disabled-page-item "
            }page-item`}
          >
            <a
              className={`${
                props.currentPage < numberOfPages ? "" : "disabled "
              }page-link`}
              onClick={() =>
                parseForwardPagination(
                  props.currentPage,
                  props.setCurrentPage,
                  numberOfPages
                )
              }
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  } else {
    return <></>;
  }
};
