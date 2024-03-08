import React from 'react';
import styled from 'styled-components';
import Car from './car/Car';
import IntroContent from './home/IntroContent';

const Box = styled.div`
  width: 100%;
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

const CarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Vehicles = ({ cars, deleteCar, updateCar }) => {
  console.log(cars);
  return (
    <Box>
      {cars.length < 1 && <IntroContent />}
      <CarBox>
        {cars.length > 0 ? (
          cars.map((car, index) => (
            <Car
              key={index}
              car={car}
              deleteCar={deleteCar}
              index={index}
              updateCar={updateCar}
            />
          ))
        ) : (
          <h2>Click &quot;Add vehicle&quot; below to start</h2>
        )}
      </CarBox>
    </Box>
  );
};

export default Vehicles;
