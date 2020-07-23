import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

const globalStyle = createGlobalStyle`

*, *::before, *::after{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background-color: #353940;
  color: #fff;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  text-rendering: optimizeLegibility !important;
  --webkit-text-smothing: antialiased !important;
}

html, body, #root { height: 100%; }

input, button {
  font-family: 'Source Sans Pro', Arial, sans-serif;
}

button {
  cursor: pointer;
}

@keyframes rotation {
  0% {
    transform: rotate(-360deg)
  }
  100% {
    transform: rotate(360deg)
  }
}
`;

export default globalStyle;
