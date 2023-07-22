import React, { useCallback } from 'react';
import styled from 'styled-components';
import Popup from '../Popup';
import AddPassenger from '../passenger/Passenger';
import { DeleteButton } from '../../common/SharedStyles';
import Seat from './Seat';

const SeatBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 20px;
  position: relative;
`;

const PassengerPopup = ({
  closePassengerPopup,
  passengers,
  setPassengers,
  car,
}) => {
  const handlePassengerSubmit = useCallback(
    (image, passengerName) => {
      if (passengerName && passengers.length < car.seats - 1) {
        setPassengers([...passengers, { image, name: passengerName }]);
      }
    },
    [passengers, car.seats, setPassengers]
  );

  const deletePassenger = useCallback(
    (passengerToDelete) => {
      setPassengers(
        passengers.filter((passenger) => passenger !== passengerToDelete)
      );
    },
    [passengers, setPassengers]
  );

  return (
    <Popup closePopup={closePassengerPopup}>
      {passengers.map((passenger, index) => (
        <SeatBox key={index}>
          <Seat person={passenger} />
          <DeleteButton
            onClick={() => deletePassenger(passenger)}
            src="./delete.svg"
          />
        </SeatBox>
      ))}
      <AddPassenger
        closePopup={closePassengerPopup}
        onSubmit={handlePassengerSubmit}
      />
    </Popup>
  );
};

export default PassengerPopup;
