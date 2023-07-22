import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: 1px solid var(--color-primary);
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
`;
// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 50%;
// `;
const Name = styled.div`
  text-align: center;
  text-transform: uppercase;
  /* -webkit-line-clamp: 1;
  line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
`;

const getShortName = (name) => {
  const names = name.split(' ');
  const firstName = names[0];
  const lastName = names[names.length - 1];
  return `${firstName[0]}${names.length > 1 ? lastName[0] : ''}`;
};

const Seat = ({ person }) => {
  return (
    <Box>
      {person.name && <Name>{getShortName(person.name)}</Name>}
      {/* {person.image ? (
        <Image
          src="https://tnsc-wave-car-pool.vercel.app/Clive.jpeg"
          alt={person.name}
        />
      ) : (
        <>{person.name && <Name>{person.name}</Name>}</>
      )} */}
    </Box>
  );
};

export default Seat;
