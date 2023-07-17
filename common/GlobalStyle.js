import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
  --max-width: 1100px;
  --border-radius: 12px;
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
  --header-height: 64px;
  --sticky-section-height: 86px;
  --padding: 16px;
  --color-primary: #007bff;

  @media (min-width: 768px) {
    --sticky-section-height: 105px;
  }

  --border-color: #d5d5d5;
  --border-color-focus: blue;
  --select-focus: blue;
  --select-arrow: var(--select-border);
  --header-height: 70px;
  --standard-padding: 24px;
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
  font-family: 'Helvetica',sans-serif;
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

`
