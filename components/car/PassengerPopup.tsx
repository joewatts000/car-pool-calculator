import React, { useCallback } from 'react';
import styled from 'styled-components';
import Popup from '../Popup';
import AddPassenger from '../passenger/Passenger';
import { DeleteButton, Divider } from '../../common/SharedStyles';
import Seat from './Seat';

const SeatBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
  position: relative;
`;
const SectionTitle = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 18px;
  border-bottom: 1px solid var(--color-primary);
  padding-bottom: 12px;
`;

const PassengerPopup = ({
  closePassengerPopup,
  passengers,
  setPassengers,
  car,
}) => {
  const handlePassengerSubmit = useCallback(
    (image, passengerName) => {
      // console.log(image, passengerName);
      if (passengerName && passengers.length < car.seats) {
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
      {passengers.length > 0 && <SectionTitle>Passengers</SectionTitle>}
      {passengers.map((passenger, index) => (
        <SeatBox key={index}>
          <div>{passenger.name}</div>
          <DeleteButton
            onClick={() => deletePassenger(passenger)}
            src="./delete.svg"
          />
        </SeatBox>
      ))}
      <Divider height={20} />
      {passengers.length < car.seats ? (
        <>
          <SectionTitle>Add new passenger</SectionTitle>
          <AddPassenger
            closePopup={closePassengerPopup}
            onSubmit={handlePassengerSubmit}
          />
        </>
      ) : (
        <p>Car is full</p>
      )}
    </Popup>
  );
};

export default PassengerPopup;
