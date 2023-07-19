import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Button } from '../../common/SharedStyles';
import Popup from '../Popup';
import AddPassenger from '../passenger/Passenger';

const Box = styled.div`
  padding: 1rem 0;
  max-width: 100%;
`;
const Square = styled.div`
  border: 1px solid black;
  padding: 1rem;
  border-radius: 10px;
  position: relative;
`;
const People = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 20px;
`;
const Seat = styled.div`
  border: 1px solid black;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 0 0 40px;
  position: relative;
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
const DeleteButton = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const CarDeleteButton = styled(DeleteButton)`
  top: 10px;
  right: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const PassengerName = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  text-align: center;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SeatBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 20px;
  position: relative;
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

  const handleDriverSubmit = (image, name) => {
    setDriver({ image, name });
  };

  const handlePassengerSubmit = useCallback(
    (image, passengerName) => {
      if (passengerName && passengers.length < car.seats - 1) {
        setPassengers([...passengers, { image, name: passengerName }]);
      }
    },
    [passengers, car.seats]
  );

  const deletePassenger = useCallback(
    (passengerToDelete) => {
      setPassengers(
        passengers.filter((passenger) => passenger !== passengerToDelete)
      );
    },
    [passengers]
  );

  console.log(passengers.length);
  return (
    <Box>
      <Square>
        <VehicleInfo>Departs: {car.departureTime}</VehicleInfo>
        <People>
          <Seat>
            {driver.image ? (
              <Image
                src="https://tnsc-wave-car-pool.vercel.app/Clive.jpeg"
                alt={driver.name}
              />
            ) : (
              <>{driver.name && <PassengerName>{driver.name}</PassengerName>}</>
            )}
          </Seat>
          {passengers.map((passenger, index) => (
            <Seat key={index}>
              {passenger.image ? (
                <Image
                  src="https://tnsc-wave-car-pool.vercel.app/Clive.jpeg"
                  alt={passenger.name}
                />
              ) : (
                <>
                  {passenger.name && (
                    <PassengerName>{passenger.name}</PassengerName>
                  )}
                </>
              )}
            </Seat>
          ))}
          {getArrayFromNumber(car.seats - passengers.length - 1).map(
            (_seat, index) => (
              <Seat key={index} />
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
        <CarDeleteButton onClick={() => deleteCar(index)} src="./delete.svg" />
      </Square>
      {isDriverPopupOpen && (
        <Popup>
          <AddPassenger
            closePopup={closeDriverPopup}
            onSubmit={handleDriverSubmit}
          />
        </Popup>
      )}
      {isPassengerPopupOpen && (
        <Popup>
          {passengers.map((passenger, index) => (
            <SeatBox key={index}>
              <Seat>
                {passenger.image ? (
                  <Image
                    src="https://tnsc-wave-car-pool.vercel.app/Clive.jpeg"
                    alt={passenger.name}
                  />
                ) : (
                  <>
                    {passenger.name && (
                      <PassengerName>{passenger.name}</PassengerName>
                    )}
                  </>
                )}
              </Seat>
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
      )}
    </Box>
  );
};

export default Car;
