/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

const Box = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 12vw;
  height: 12vw;
  max-width: 72px;
  max-height: 72px;
  border: 6px solid
    ${({ red, green, blue }) => {
      if (red) return 'red';
      if (green) return 'green';
      if (blue) return 'blue';
      return 'grey';
    }};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: absolute;
  left: 0;

  @media (min-width: 600px) {
    border-width: 8px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
    pointer-events: none;
    transform: scale(1.1);
  }

  &:nth-child(2) {
    left: 12vw;
    @media (min-width: 600px) {
      left: 72px;
    }
  }
  &:nth-child(3) {
    left: 24vw;
    @media (min-width: 600px) {
      left: calc(72px * 2);
    }
  }
  &:nth-child(4) {
    left: 36vw;
    @media (min-width: 600px) {
      left: calc(72px * 3);
    }
  }
  &:nth-child(5) {
    left: 48vw;
    @media (min-width: 600px) {
      left: calc(72px * 4);
    }
  }
  &:nth-child(6) {
    left: 60vw;
    @media (min-width: 600px) {
      left: calc(72px * 5);
    }
  }
  &:nth-child(7) {
    left: 72vw;
    @media (min-width: 600px) {
      left: calc(72px * 6);
    }
  }
  &:nth-child(8) {
    left: 84vw;
    @media (min-width: 600px) {
      left: calc(72px * 7);
    }
  }
`;

const disabled = ['Katie.jpeg', 'Torsten.jpeg', 'Isabel.jpeg', 'Lauren.jpeg'];
const thursday = ['Torsten.jpeg', 'Isabel.jpeg', 'Lauren.jpeg'];
const fridayMorning = ['Joe.jpeg', 'Sam.jpeg', 'Shantel.jpeg'];
const fridayAfternoon = [
  'Nick.jpeg',
  'Ellen.jpeg',
  'Sylvie.jpeg',
  'Maciej.jpeg',
  'Michael.jpeg',
  'Clive.jpeg',
];

interface Props {
  icon: string;
  className?: string;
}

const Passenger = ({ icon, className }: Props) => {
  return disabled.includes(icon) ? (
    <Box
      className={className}
      red={thursday.includes(icon)}
      green={fridayMorning.includes(icon)}
      blue={fridayAfternoon.includes(icon)}
    >
      <img src={icon} alt="" />
    </Box>
  ) : (
    <Draggable>
      <Box
        className={className}
        red={thursday.includes(icon)}
        green={fridayMorning.includes(icon)}
        blue={fridayAfternoon.includes(icon)}
      >
        <img src={icon} alt="" />
      </Box>
    </Draggable>
  );
};

export default Passenger;
