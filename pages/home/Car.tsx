import React, { useCallback, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import Passenger from './Passenger';

const Box = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 1rem 0;
  @media (min-width: 1200px) {
    min-width: 600px;
  }
`;
const ImageBox = styled.div`
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transform: scale(1, -1);
  pointer-events: none;
`;
const VanImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 1rem auto;
  pointer-events: none;
`;
const MiniVanImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 1rem auto;
  pointer-events: none;
`;
const StyledPassenger = styled(Passenger)`
  background-color: white;
  border-radius: 50%;
  width: 12vw;
  height: 12vw;
  max-width: 72px;
  max-height: 72px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(1) {
    top: ${(props) => (props.type === 'car' ? '51%' : '62%')};
    left: ${(props) => (props.type === 'car' ? '48%' : '69%')};
  }

  &:nth-child(2) {
    top: ${(props) => (props.type === 'car' ? '22%' : '32%')};
    left: ${(props) => (props.type === 'car' ? '48%' : '69%')};
  }
  &:nth-child(3) {
    top: ${(props) => (props.type === 'car' ? '22%' : '4%')};
    left: ${(props) => (props.type === 'car' ? '31%' : '69%')};
    width: ${(props) => (props.type === 'car' ? '10vw' : '12vw')};
    height: ${(props) => (props.type === 'car' ? '10vw' : '12vw')};
    max-width: 54px;
    max-height: 54px;
  }
  &:nth-child(4) {
    top: 38%;
    left: 31%;
    width: 10vw;
    height: 10vw;
    max-width: 54px;
    max-height: 54px;
  }
  &:nth-child(5) {
    top: 65%;
    left: 31%;
    width: 10vw;
    height: 10vw;
    max-width: 54px;
    max-height: 54px;
  }
`;
const Board = styled.img`
  position: absolute;
  top: 17%;
  left: 13%;
  width: 12vw;
  height: auto;
  max-width: 72px;
  transform: rotate(90deg);

  &:nth-child(1) {
    top: 30%;
    left: 13%;
  }

  &:nth-child(2) {
    top: 42%;
    left: 13%;
  }
  &:nth-child(3) {
    top: 54%;
    left: 13%;
  }
`;
const Detail = styled.div`
  margin-bottom: 5px;
  ${(props) => props.red && 'color: red;'}
  ${(props) => props.green && 'color: green;'}
  ${(props) => props.blue && 'color: blue;'}
`;

const getFirstCharOfName = (name) => name.charAt(0).toUpperCase();

const Car = ({ passengers = [], boards = [], type }) => {
  return (
    <Box>
      <ImageBox>
        {type === 'car' && <Image src="/car.png" alt="" />}
        {type === 'van' && <VanImage src="/van.jpeg" alt="" />}
        {type === 'minivan' && <MiniVanImage src="/minivan.jpeg" alt="" />}
        <div>
          {passengers.map((passenger, index) => (
            <StyledPassenger
              key={index}
              type={type}
              icon={`${passenger}.jpeg`}
            />
          ))}
        </div>
        {/* <div>
          {boards.map((_board, index) => (
            <Board key={index} src="/one-surfboard.svg" />
          ))}
        </div> */}
      </ImageBox>
      {/* <Detail>
        <strong>Driver</strong>: {name}
      </Detail>
      <Detail
        red={departs === 'Thursday'}
        green={departs === 'Friday morning'}
        blue={departs === 'Friday'}
      >
        <strong>Departure:</strong> {departs}
      </Detail>
      <Detail>
        <strong>Return:</strong> {returns}
      </Detail>
      <Detail>
        <strong>Passengers:</strong>{' '}
        {passengers.filter((p) => p !== '~').join(', ')}
      </Detail>
      {boards.length > 0 && (
        <Detail>
          <strong>Boards:</strong> {boards.length} (
          {boards.filter((p) => p !== '~').join(', ')})
        </Detail>
      )} */}
    </Box>
  );
};

export default Car;
