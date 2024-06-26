import styled from 'styled-components'

export const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 25%;
  text-align: center;
  padding: 8px;
  position: relative;
`

export const DesktopColumn = styled(Column)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`

export const MobileColumn = styled(Column)`
  @media (min-width: 768px) {
    display: none;
  }
`

export const TableHeader = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  border: 1px solid #d5d5d5;

  ${Column} {
    border-right: 1px solid #d5d5d5;
  }
  ${Column}:last-child {
    border-right: none;
  }
`

export const Select = styled.select`
  // reset styles
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  width: 100%;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
  text-align: center;
  -webkit-appearance: none;
  color: inherit;
  text-align-last:center;

  &:focus + .focus {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid var(--select-focus);
    border-radius: inherit;
  }
`

export const SelectBox = styled.div`
  width: calc(100% - 20px);
  margin: 0 auto 10px auto;
  border: 1px solid var(--border-color);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
  display: grid;
  grid-template-areas: 'select';
  grid-area: select;
  align-items: center;
  position: relative;
  height: 40px;
  max-width: 400px;

  &:after {
    content: '';
    width: 0.8em;
    height: 0.5em;
    background-color: var(--select-arrow);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    grid-area: select;
    justify-self: end;
    position: absolute;
  }
`
export const Main = styled.main``
export const PaddedBox = styled.div`
  padding: 0px;
  height: calc(100% - 48px);
  max-width: 1000px;
  margin: auto;
  @media (min-width: 768px) {
    padding: 24px 0;
  }
`
export const Input = styled.input`
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  height: 40px;
  text-align: center;
  font-size: 16px;
  width: 100%;
  max-width: 600px;
  margin-bottom: 10px;
  ${props => props.error && 'border-color: red;'}
  &:focus {
    outline: none;
    border: 1px solid var(--border-color-focus);
    ${props => props.error && 'border-color: red;'}
  }
`
export const Center = styled.p`
  text-align: center;
`
export const Button = styled.button`
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid var(--color-primary);
  background-color: var(--color-primary);
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  width: fit-content;

  @media (min-width: 768px) {
    flex: 0 1 10rem;
    min-width: 10rem;
  }

  &:hover {
    background-color: white;
    color: var(--color-primary);
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.div`
  width: 100%;
  height: ${props => props.height || '1'}px;
`;

export const DeleteButton = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const boxShadow = `
  box-shadow: inset 0 0 0 2px var(--color-primary);
`;

export const FieldGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 16px;
`;
export const Label = styled.label`
  display: block;
  min-width: 50px;
`;
