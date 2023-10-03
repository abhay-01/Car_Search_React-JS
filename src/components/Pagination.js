import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-left: 800px;
`;

const PageButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  padding: 5px 10px;
  background-color: white;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

const Pagination = ({ currentPage, totalPages }) => {
  return (
    <PaginationWrapper>
      {currentPage > 1 && (
        <PageButton to={`/page/${currentPage - 1}`}>
          <ArrowIcon icon={faChevronLeft} />
          Previous
        </PageButton>
      )}
      {Array.from({ length: 10 }, (_, index) => {
        const pageNumber = index + 1;
        return (
          <PageButton
            key={pageNumber}
            to={`/page/${pageNumber}`}
            style={{
              background: pageNumber === currentPage ? '#007bff' : 'white',
              color: pageNumber === currentPage ? 'white' : '#333',
            }}
          >
            {pageNumber}
          </PageButton>
        );
      })}
      {currentPage < totalPages && (
        <PageButton to={`/page/${currentPage + 1}`}>
          Next
          <ArrowIcon icon={faChevronRight} />
        </PageButton>
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
