import React, { useCallback, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import exportAsImage from '../misc/exportAsImage';
import { Button } from '../common/SharedStyles';

const ScreenshotStyles = createGlobalStyle`
  body {
    height: auto;
  }

  .hide-when-screenshot {
    display: none;
  }

  #scrolling-container {
    height: auto;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  margin-top: auto;
  padding: 1rem 0.5rem;
  background-color: #fff;
  border-top: 2px solid rgb(83 104 212 / 80%);
`;

const FooterButton = styled(Button)`
  width: 100%;
  font-size: 13px;
  padding: 0.5rem;
`;

const Footer = ({ openPopup, resetCars }) => {
  const [isScreenShotting, setIsScreenShotting] = useState(false);

  const screenshot = useCallback(() => {
    setIsScreenShotting(true);
    setTimeout(() => {
      exportAsImage(document.body, 'carpoolcalculator');
      setIsScreenShotting(false);
    }, 1000);
  }, []);

  return (
    <Box className="hide-when-screenshot">
      <FooterButton onClick={openPopup}>Add Vehicle</FooterButton>
      {/* <FooterButton onClick={saveConfig}>Save</FooterButton> */}
      <FooterButton onClick={resetCars}>Reset</FooterButton>
      <FooterButton onClick={screenshot}>Screenshot</FooterButton>
      {isScreenShotting && <ScreenshotStyles />}
    </Box>
  );
};

export default Footer;
