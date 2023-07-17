import React, { use, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Button } from '../common/SharedStyles';

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Content = styled.div`
  position: relative;
  z-index: 2;
  background-color: white;
  padding: 1rem;
`;

const getRandomFutureDate = () => {
  const now = new Date().getTime();
  const random = Math.random() * 1000 * 60 * 60 * 24 * 7;
  return new Date(now + random).toISOString().slice(0, 16);
};

const Popup = ({ closePopup, addCar }) => {
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
    <Box>
      <Background />
      <Content>
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
      </Content>
    </Box>
  );
};

export default Popup;
