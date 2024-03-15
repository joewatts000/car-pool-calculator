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
const StartBox = styled.div`
  text-align: center;
  margin-top: 20px;

  p {
    font-size: 1.3rem;
  }
`;
const Spacer = styled.div`
  height: 50px;
`;

const Vehicles = ({ cars, deleteCar, updateCar }) => {
  return (
    <Box>
      {cars.length < 1 && <IntroContent />}
      {cars.length > 0 ? (
        cars.map((car, index) => (
          <CarBox key={index}>
            <Car
              car={car}
              deleteCar={deleteCar}
              index={index}
              updateCar={updateCar}
            />
          </CarBox>
        ))
      ) : (
        <StartBox>
          <p>
            Click <strong>&quot;Add vehicle&quot;</strong> below to start
          </p>
          <Spacer />
        </StartBox>
      )}
    </Box>
  );
};

export default Vehicles;
