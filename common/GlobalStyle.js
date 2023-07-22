import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
  --max-width: 1100px;

  --color-primary: #5368d4;

  --border-color: #d5d5d5;
  --border-color-focus: blue;

  --select-focus: blue;
  --select-arrow: var(--select-border);

  --header-height: 50px;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
}

html {
  width: 100vw;
  overflow-x: hidden;
}
body {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  position: relative;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
}
h1 {
  margin: 10px 0;
  font-weight: 600;
  font-size: 20px;
}
h2 {
  margin: 10px 0;
  font-weight: 500;
  font-size: 16px;
}
h3 {
  margin: 10px 0;
  font-weight: 500;
  font-size: 16px;
}
a {
  color: inherit;
  text-decoration: none;
}

p {
  margin: 10px 0;
  font-weight: 400;
}

input {
  font-family: inherit;
  font-size: 14px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

`;
