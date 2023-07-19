import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Button } from '../../common/SharedStyles';
import Popup from '../../components/Popup';
import AddPassenger from './Passenger';

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
`;

const getFirstCharOfName = (name: string) => name.charAt(0).toUpperCase();

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
    (image, name) => {
      setPassengers([...passengers, { image, name }]);
    },
    [passengers]
  );

  return (
    <Box>
      <Square>
        <VehicleInfo>Departs: {car.departureTime}</VehicleInfo>
        <People>
          <Seat>
            {driver.name && (
              <>
                <Image
                  src="https://tnsc-wave-car-pool.vercel.app/Clive.jpeg"
                  alt={driver.name}
                />
                <PassengerName>{getFirstCharOfName(driver.name)}</PassengerName>
              </>
            )}
          </Seat>
          {passengers.map((passenger, index) => (
            <Seat key={index}>
              {passenger.name && (
                <>
                  <Image
                    src="https://tnsc-wave-car-pool.vercel.app/Clive.jpeg"
                    alt={passenger.name}
                  />
                  <PassengerName>
                    {getFirstCharOfName(passenger.name)}
                  </PassengerName>
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
          <Button onClick={openDriverPopup}>Add Driver</Button>
          <Button onClick={openPassengerPopup}>Add Passenger</Button>
        </Buttons>
        <DeleteButton onClick={() => deleteCar(index)} />
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
