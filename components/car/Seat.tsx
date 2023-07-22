import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: 1px solid var(--color-primary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 0 0 40px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const Name = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  text-align: center;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Seat = ({ person }) => {
  return (
    <Box>
      {person.image ? (
        <Image
          src="https://tnsc-wave-car-pool.vercel.app/Clive.jpeg"
          alt={person.name}
        />
      ) : (
        <>{person.name && <Name>{person.name}</Name>}</>
      )}
    </Box>
  );
};

export default Seat;
