import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  font-size: 0.85rem;
  width: 100%;
  z-index: 3;
  font-family: var(--font-mono);
  padding: 8px;
  background-color: white;
  text-align: center;
  height: var(--header-height);
  box-shadow: 0 0 0 2px rgb(83 104 212 / 30%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PageTitle = styled.h1`
  margin: 0;
  color: var(--color-primary);
  letter-spacing: -1px;
  font-weight: 800;
`;

export function Header() {
  return (
    <Box>
      <PageTitle>Car Pool Calculator</PageTitle>
    </Box>
  );
}
