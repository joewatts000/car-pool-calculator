import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import DocumentHead from '../common/DocumentHead';
import { useIsClient } from '../misc/ClientContext';
import CookieConsent from 'react-cookie-consent';

const Content = dynamic(() => import('./home/HomeContent'), {
  ssr: false, // Disable server-side rendering
});

export default function Home() {
  const isClient = useIsClient();

  return (
    <>
      <DocumentHead />
      {isClient && <Content />}
      <CookieConsent
        location="bottom"
        buttonText="Sure man!!"
        cookieName="cpcCookieConsent"
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150}
      >
        This website uses cookies to enhance the user experience
      </CookieConsent>
    </>
  );
}
