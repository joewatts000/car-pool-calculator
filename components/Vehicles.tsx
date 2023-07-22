import React from 'react';
import styled from 'styled-components';
import Car from './car/Car';

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;
  height: 100%;
  overflow-y: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
    display: none;
  }
`;

const Vehicles = ({ cars, deleteCar }) => {
  return (
    <Box>
      {cars.map((car, index) => (
        <Car key={index} car={car} deleteCar={deleteCar} index={index} />
      ))}
    </Box>
  );
};

export default Vehicles;
