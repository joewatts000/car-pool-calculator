import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import DocumentHead from '../common/DocumentHead';
import { useIsClient } from '../misc/ClientContext';

const Content = dynamic(() => import('./home/HomeContent'), {
  ssr: false, // Disable server-side rendering
});

export default function Home() {
  const isClient = useIsClient();

  return (
    <>
      <DocumentHead />
      {isClient && <Content />}
    </>
  );
}
