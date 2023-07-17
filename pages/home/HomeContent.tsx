import React, { useCallback, useState } from 'react';
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
        {popupOpen && <Popup closePopup={closePopup} addCar={addCar} />}
      </Main>
    </>
  );
};

export default HomeContent;
