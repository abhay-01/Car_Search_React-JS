import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CarCard from './CarCard';
import Pagination from './Pagination';
import carsData from '../data/cars';
import styled from 'styled-components';

const CarList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CardWrapper = styled.div`
  flex: 0 0 calc(33.3333% - 10px); /* Three cards in a row with some spacing */
`;

const SearchBar = styled.input`
  margin-top: 16px;
  margin-left: -1050px;
  padding: 10px;
  font-size: 1.2rem;
  border: 2px solid #ccc;
  border-radius: 25px;
  width: 100%;
  max-width: 400px;
  transition: border-color 0.3s;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>');
  background-repeat: no-repeat;
  background-position: 95% center;
  background-size: 20px 20px;
  padding-right: 40px; /* Ensure the icon is visible */
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const CarSearch = () => {
  const { page } = useParams();
  const currentPage = parseInt(page) || 1;
  const carsPerPage = 6;
  const startIndex = (currentPage - 1) * carsPerPage;

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);
  const [totalPages, setTotalPages] = useState(10);

  useEffect(() => {
    const filtered = carsData.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTotalPages(Math.ceil(filtered.length / carsPerPage));
    setFilteredCars(filtered.slice(startIndex, startIndex + carsPerPage));
  }, [searchTerm, page]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="car-search">
      <SearchBar
        type="text"
        placeholder="Search...."
        value={searchTerm}
        onChange={handleSearch}
      />

      <CarList>
        {filteredCars.map((car, index) => {
          return (
            <CardWrapper key={index}>
              <CarCard car={car} />
            </CardWrapper>
          );
        })}
      </CarList>
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  );
};

export default CarSearch;
