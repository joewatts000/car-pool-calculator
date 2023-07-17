import React from 'react';
import styled from 'styled-components';
import { Button } from '../../common/SharedStyles';
// import Draggable from 'react-draggable';
// import Passenger from './Passenger';

const Box = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 1rem 0;
  position: relative;
`;
const Square = styled.div`
  border: 1px solid black;
  padding: 1rem;
  border-radius: 10px;
`;
const People = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;
const Seat = styled.div`
  border: 1px solid black;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 0 0 40px;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;
const VehicleInfo = styled.div`
  text-align: center;
`;
const DeleteButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: red;
  cursor: pointer;
`;
// const getFirstCharOfName = (name: string) => name.charAt(0).toUpperCase();

const getArrayFromNumber = (number: number) => Array.from(Array(number).keys());

const Car = ({ car, deleteCar, index }) => {
  return (
    <Box>
      <Square>
        <VehicleInfo>Departs: {car.departureTime}</VehicleInfo>
        <People>
          {getArrayFromNumber(car.seats).map((_seat, index) => (
            <Seat key={index} />
          ))}
        </People>
        <Buttons>
          <Button>Add Driver</Button>
          <Button>Add Passenger</Button>
        </Buttons>
        <DeleteButton onClick={() => deleteCar(index)} />
      </Square>
    </Box>
  );
};

export default Car;
