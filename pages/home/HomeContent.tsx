import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import Car from '../../components/car/Car';
import Popup from '../../components/Popup';
import { Button } from '../../common/SharedStyles';
import AddCarForm from '../../components/car/AddCarForm';

const Main = styled.main`
  margin: auto;
  padding-top: ;
  padding: 1rem 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - var(--header-height));
  width: 100%;
  flex-direction: column;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

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
            <AddCarForm closePopup={closePopup} addCar={addCar} />
          </Popup>
        )}
      </Main>
    </>
  );
};

export default HomeContent;
