import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  margin: auto;
  padding-top: ;
  padding: var(--header-height) 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95vh;
  width: 100%;
`;

const HomeContent = () => {
  return (
    <>
      <Main>
        <p>Coming soon</p>
      </Main>
    </>
  );
};

export default HomeContent;
