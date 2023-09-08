import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: 2px solid var(--color-primary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 0 0 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  color: #fff;
  ${({ asDriver }) => asDriver && 'background-color: #fff; color: #000;'}
`;
const Name = styled.div`
  text-align: center;
  text-transform: uppercase;
`;

const getShortName = (name) => {
  const names = name.split(' ');
  const firstName = names[0];
  const lastName = names[names.length - 1];
  return `${firstName[0]}${names.length > 1 ? lastName[0] : ''}`;
};

const Seat = ({ person }) => {
  return (
    <Box asDriver={person.isDriver}>
      {person.name && <Name>{getShortName(person.name)}</Name>}
    </Box>
  );
};

export default Seat;
