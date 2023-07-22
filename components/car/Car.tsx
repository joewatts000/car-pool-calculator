import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Button, DeleteButton, boxShadow } from '../../common/SharedStyles';
import DriverPopup from './DriverPopup';
import PassengerPopup from './PassengerPopup';
import Seat from './Seat';

const Box = styled.div`
  padding: 1rem 0;
  max-width: calc(100% - 22px);
`;
const Square = styled.div`
  box-shadow: rgba(60, 66, 87, 0.3) 0px 0px 14px 0px;
  padding: 1rem;
  border-radius: 8px;
  position: relative;
  border: 1px solid #dedede;
`;
const VehicleInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  border-bottom: 1px solid var(--color-primary);
  padding-bottom: 12px;
`;
const Title = styled.div`
  font-weight: 600;
  text-transform: uppercase;
`;
const People = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 1rem;
  margin-bottom: 20px;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;
const Departure = styled.div``;

const getArrayFromNumber = (number: number) => Array.from(Array(number).keys());

const Car = ({ car, deleteCar, index, updateCar }) => {
  // const [driver, setDriver] = React.useState({ image: '', name: '' });
  const [passengers, setPassengers] = React.useState([]);
  // const [isDriverPopupOpen, setIsDriverPopupOpen] = React.useState(false);
  const [isPassengerPopupOpen, setIsPassengerPopupOpen] = React.useState(false);

  // const openDriverPopup = () => {
  //   setIsDriverPopupOpen(true);
  // };
  // const closeDriverPopup = () => {
  //   setIsDriverPopupOpen(false);
  // };

  const openPassengerPopup = () => {
    setIsPassengerPopupOpen(true);
  };
  const closePassengerPopup = () => {
    setIsPassengerPopupOpen(false);
    updateCar(index, { ...car, passengers });
  };

  console.log(passengers);

  return (
    <Box>
      <Square>
        <VehicleInfo>
          <Title>Car {index + 1}</Title>
          <DeleteButton onClick={() => deleteCar(index)} src="./delete.svg" />
        </VehicleInfo>
        <Departure>Departs: {car.departureTime}</Departure>
        <People>
          {getArrayFromNumber(car.seats).map((_seat, index) => (
            <Seat key={index} person={passengers[index] ?? { name: '' }} />
          ))}
        </People>
        <Buttons>
          {/* <Button onClick={openDriverPopup}>
            {driver.name ? 'Change' : 'Add'} Driver
          </Button> */}
          <Button onClick={openPassengerPopup}>
            {passengers.length < 1 ? 'Add' : 'Change'} Passengers
          </Button>
        </Buttons>
      </Square>
      {/* {isDriverPopupOpen && (
        <DriverPopup
          closeDriverPopup={closeDriverPopup}
          setDriver={setDriver}
        />
      )} */}
      {isPassengerPopupOpen && (
        <PassengerPopup
          closePassengerPopup={closePassengerPopup}
          passengers={passengers}
          setPassengers={setPassengers}
          car={car}
        />
      )}
    </Box>
  );
};

export default Car;
