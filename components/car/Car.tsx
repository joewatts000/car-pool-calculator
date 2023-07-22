import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Button, DeleteButton } from '../../common/SharedStyles';
import DriverPopup from './DriverPopup';
import PassengerPopup from './PassengerPopup';
import Seat from './Seat';

const Box = styled.div`
  padding: 1rem 0;
  max-width: 100%;
`;
const Square = styled.div`
  border: 1px solid var(--color-primary);
  padding: 1rem;
  border-radius: 8px;
  position: relative;
`;
const People = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
const VehicleInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const Departure = styled.div``;
const CarDeleteButton = styled(DeleteButton)`
  top: 10px;
  right: 10px;
`;

const getArrayFromNumber = (number: number) => Array.from(Array(number).keys());

const Car = ({ car, deleteCar, index }) => {
  const [driver, setDriver] = React.useState({ image: '', name: '' });
  const [passengers, setPassengers] = React.useState([]);
  const [isDriverPopupOpen, setIsDriverPopupOpen] = React.useState(false);
  const [isPassengerPopupOpen, setIsPassengerPopupOpen] = React.useState(false);

  const openDriverPopup = () => {
    setIsDriverPopupOpen(true);
  };
  const closeDriverPopup = () => {
    setIsDriverPopupOpen(false);
  };

  const openPassengerPopup = () => {
    setIsPassengerPopupOpen(true);
  };
  const closePassengerPopup = () => {
    setIsPassengerPopupOpen(false);
  };

  return (
    <Box>
      <Square>
        <VehicleInfo>
          Car: {index + 1}
          <CarDeleteButton
            onClick={() => deleteCar(index)}
            src="./delete.svg"
          />
        </VehicleInfo>
        <Departure>Departs: {car.departureTime}</Departure>
        <People>
          <Seat person={driver} />
          {passengers.map((passenger, index) => (
            <Seat key={index} person={passenger} />
          ))}
          {getArrayFromNumber(car.seats - passengers.length - 1).map(
            (_seat, index) => (
              <Seat key={index} person={{ name: '' }} />
            )
          )}
        </People>
        <Buttons>
          <Button onClick={openDriverPopup}>
            {driver.name ? 'Change' : 'Add'} Driver
          </Button>
          <Button onClick={openPassengerPopup}>
            {passengers.length < 1 ? 'Add' : 'Change'} Passengers
          </Button>
        </Buttons>
      </Square>
      {isDriverPopupOpen && (
        <DriverPopup
          closeDriverPopup={closeDriverPopup}
          setDriver={setDriver}
        />
      )}
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
