import React from 'react';
import styled from 'styled-components';

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

const Popup = ({ children }) => {
  return (
    <Box>
      <Background />
      <Content>{children}</Content>
    </Box>
  );
};

export default Popup;
