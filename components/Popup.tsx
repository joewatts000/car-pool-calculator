import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  position: fixed;
  z-index: 1;
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
  width: calc(100% - 32px);
  max-width: 500px;
  border-radius: 4px;
`;

const Popup = ({ children, closePopup }) => {
  return (
    <Box>
      <Background onClick={closePopup} />
      <Content>{children}</Content>
    </Box>
  );
};

export default Popup;
