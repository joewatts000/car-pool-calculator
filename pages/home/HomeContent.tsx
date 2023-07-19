import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import Car from './Car';
import Popup from '../../components/Popup';
import { Button } from '../../common/SharedStyles';

const Main = styled.main`
  margin: auto;
  padding-top: ;
  padding: var(--header-height) 1rem 1rem 1rem;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;
const getRandomFutureDate = () => {
  const now = new Date().getTime();
  const random = Math.random() * 1000 * 60 * 60 * 24 * 7;
  return new Date(now + random).toISOString().slice(0, 16);
};

const PopupContent = ({ closePopup, addCar }) => {
  const seatsRef = useRef(null);
  const departureRef = useRef(null);
  const returnRef = useRef(null);

  const handleSubmit = useCallback(() => {
    const seats = parseInt(seatsRef.current.value);
    const departureTime = departureRef.current.value;
    const returnTime = returnRef.current.value;

    addCar({ seats, departureTime, returnTime });
    closePopup();
  }, [addCar, closePopup]);

  return (
    <>
      <div>
        Seats: <input type="number" min="1" ref={seatsRef} defaultValue={5} />
      </div>
      <div>
        Departure:{' '}
        <input
          type="datetime-local"
          ref={departureRef}
          defaultValue={getRandomFutureDate()}
        />
      </div>
      <div>
        Return:{' '}
        <input
          type="datetime-local"
          ref={returnRef}
          defaultValue={getRandomFutureDate()}
        />
      </div>
      <Button onClick={handleSubmit}>Create car</Button>
    </>
  );
};

const HomeContent = () => {
  const [cars, setCars] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = useCallback(() => {
    setPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setPopupOpen(false);
  }, []);

  const addCar = useCallback(({ seats, departureTime, returnTime }) => {
    setCars((prevCars) => [
      ...prevCars,
      {
        seats,
        departureTime,
        returnTime,
      },
    ]);
  }, []);

  const deleteCar = useCallback((index: number) => {
    setCars((prevCars) => {
      const newCars = [...prevCars];
      newCars.splice(index, 1);
      return newCars;
    });
  }, []);

  return (
    <>
      <Main>
        <Buttons>
          <Button onClick={openPopup}>Add Vehicle</Button>
        </Buttons>
        {cars.map((car, index) => (
          <Car key={index} car={car} deleteCar={deleteCar} index={index} />
        ))}
        {popupOpen && (
          <Popup>
            <PopupContent closePopup={closePopup} addCar={addCar} />
          </Popup>
        )}
      </Main>
    </>
  );
};

export default HomeContent;
