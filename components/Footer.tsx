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

  @media (min-width: 768px) {
    gap: 3rem;
  }

  @media (min-width: 990px) {
    gap: 4rem;
  }
`;

const FooterButton = styled(Button)`
  width: 100%;
  font-size: 13px;
  padding: 0.5rem;
  box-shadow: 0px 0px 1px 1px #0000001a;
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0px rgb(83 104 212 / 70%);
    }
    100% {
      box-shadow: 0 0 0 20px rgb(83 104 212 / 0%);
    }
  }
  ${({ withPulse }) => withPulse && 'animation: pulse 2s infinite;'}
`;

const Footer = ({ openPopup, resetCars }) => {
  const [isScreenShotting, setIsScreenShotting] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const screenshot = useCallback(() => {
    setIsScreenShotting(true);
    setTimeout(() => {
      exportAsImage(document.body, 'carpoolcalculator');
      setIsScreenShotting(false);
    }, 1000);
  }, []);

  const handleAddVehicle = () => {
    setHasClicked(true);
    openPopup();
  };

  return (
    <Box className="hide-when-screenshot">
      <FooterButton onClick={resetCars}>Reset</FooterButton>
      <FooterButton withPulse={!hasClicked} onClick={handleAddVehicle}>
        Add Vehicle
      </FooterButton>
      <FooterButton onClick={screenshot}>Screenshot</FooterButton>
      {isScreenShotting && <ScreenshotStyles />}
    </Box>
  );
};

export default Footer;
