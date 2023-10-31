import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import DocumentHead from '../common/DocumentHead';
import { useIsClient } from '../misc/ClientContext';
import { useWithLocalStorage } from '../misc/utils';

const Content = dynamic(() => import('./home/HomeContent'), {
  ssr: false, // Disable server-side rendering
});

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: #00000080;
`;

const Center = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 10px;

  button {
    padding: 10px;
    background: transparent;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const ConsentPopup = ({ setConsent }) => {
  return (
    <Box>
      <Background />
      <Center>
        <p>Consent to cookies etc?</p>
        <button onClick={() => setConsent(true)}>Accept</button>
      </Center>
    </Box>
  );
};

export default function Home() {
  const isClient = useIsClient();
  const [consent, setConsent] = useWithLocalStorage('consent', false);

  return (
    <>
      <DocumentHead />
      {isClient && <Content />}
      {isClient && !consent && <ConsentPopup setConsent={setConsent} />}
    </>
  );
}
