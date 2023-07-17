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
`;

export function Header() {
  return (
    <Box>
      <h1>Car Pool Calculator</h1>
    </Box>
  );
}
