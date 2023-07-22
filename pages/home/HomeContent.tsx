import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import Popup from '../../components/Popup';
import AddCarForm from '../../components/car/AddCarForm';
import Vehicles from '../../components/Vehicles';
import Controls from '../../components/Controls';

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
        <Vehicles deleteCar={deleteCar} cars={cars} />
        <Controls openPopup={openPopup} />
        {popupOpen && (
          <Popup closePopup={closePopup}>
            <AddCarForm closePopup={closePopup} addCar={addCar} />
          </Popup>
        )}
      </Main>
    </>
  );
};

export default HomeContent;
