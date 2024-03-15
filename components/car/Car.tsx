import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Button, DeleteButton } from '../../common/SharedStyles';
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

const getNiceDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })}`;
};

const getArrayFromNumber = (number: number) => Array.from(Array(number).keys());

const Car = ({ car, deleteCar, index, updateCar }) => {
  const [passengers, setPassengers] = React.useState([]);
  const [isPassengerPopupOpen, setIsPassengerPopupOpen] = React.useState(false);

  const openPassengerPopup = () => {
    setIsPassengerPopupOpen(true);
  };
  const closePassengerPopup = () => {
    setIsPassengerPopupOpen(false);
    updateCar(index, { ...car, passengers });
  };

  return (
    <Box>
      <Square>
        <VehicleInfo>
          <Title>Car {index + 1}</Title>
          <DeleteButton
            onClick={() => deleteCar(index)}
            src="./delete.svg"
            className="hide-when-screenshot"
            alt="Delete"
          />
        </VehicleInfo>
        <Departure>Departs: {getNiceDate(car.departureTime)}</Departure>
        <People>
          {getArrayFromNumber(car.seats).map((_seat, index) => (
            <Seat key={index} person={passengers[index] ?? { name: '' }} />
          ))}
        </People>
        <Buttons>
          <Button onClick={openPassengerPopup}>
            {passengers.length < 1 ? 'Add' : 'Edit'} Passengers
          </Button>
        </Buttons>
      </Square>
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
