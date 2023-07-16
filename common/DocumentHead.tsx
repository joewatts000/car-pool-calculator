import React from 'react';
import Head from 'next/head';
import { GlobalStyle } from './GlobalStyle';

const DocumentHead = () => {
  return (
    <>
      <Head>
        <title>TNSC Car pool</title>
        <meta name="description" content="tnsc local surf forecast" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
    </>
  );
};

export default DocumentHead;
