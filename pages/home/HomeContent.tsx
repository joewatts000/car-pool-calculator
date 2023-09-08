import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Popup from '../../components/Popup';
import AddCarForm from '../../components/car/AddCarForm';
import Vehicles from '../../components/Vehicles';
import Controls from '../../components/Controls';

const Main = styled.main`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(
    ${({ height }) => (height ? `${height}px` : '100%')} - var(--header-height)
  );
  width: 100%;
  flex-direction: column;
`;

const Header = styled.div`
  font-size: 0.85rem;
  width: 100%;
  padding: 8px;
  background-color: white;
  text-align: center;
  height: var(--header-height);
  border-bottom: 2px solid rgb(83 104 212 / 80%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PageTitle = styled.h1`
  margin: 0;
  color: var(--color-primary);
  letter-spacing: -1px;
  font-weight: 800;
`;

const HomeContent = () => {
  const [height, setHeight] = useState<number | null>(null);
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

  const updateCar = useCallback(
    (index: number, car: any) => {
      setCars((prevCars) => {
        const newCars = [...prevCars];
        newCars[index] = car;
        return newCars;
      });
    },
    [setCars]
  );

  const resetCars = useCallback(() => {
    setCars([]);
  }, []);

  const handleResize = useCallback(() => {
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <>
      <Header>
        <PageTitle>Car Pool Calculator</PageTitle>
      </Header>
      <Main id="scrolling-container" height={height}>
        <Vehicles deleteCar={deleteCar} cars={cars} updateCar={updateCar} />
        <Controls openPopup={openPopup} resetCars={resetCars} />
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
