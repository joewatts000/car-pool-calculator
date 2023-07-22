import React from 'react';
import styled from 'styled-components';
import { Button } from '../common/SharedStyles';

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  margin-top: auto;
  padding: 0.5rem;
  background-color: #fff;
`;

const FooterButton = styled(Button)`
  width: 100%;
  font-size: 13px;
  padding: 0.5rem;
`;

const Controls = ({ openPopup }) => {
  const saveConfig = () => {};
  const loadConfig = () => {};
  const resetConfig = () => {};
  const screenshot = () => {};

  return (
    <Box>
      <FooterButton onClick={openPopup}>Add Vehicle</FooterButton>
      <FooterButton onClick={saveConfig}>Save</FooterButton>
      <FooterButton onClick={resetConfig}>Reset</FooterButton>
      <FooterButton onClick={screenshot}>Screenshot</FooterButton>
    </Box>
  );
};

export default Controls;
