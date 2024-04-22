import React from 'react';
import Script from 'next/script';
import Head from 'next/head';

const DocumentHead = () => {
  return (
    <>
      <Head>
        <title>Car pool calculator</title>
        <meta
          name="description"
          content="car pool calculator app, car sharing calculator app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="title" content="Car Pool Calculator" />
        <meta
          name="description"
          content="Car pool calculator works out complex travel arrangements, estimates fuel costs, and can share the result with business trip colleagues or friends"
        />
        <meta
          name="keywords"
          content="Car Pool Calculator, Car Pool, Calculator, Group Trip, Business Trip, Road Trip, Fuel Estimate"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4118691160715647"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default DocumentHead;
