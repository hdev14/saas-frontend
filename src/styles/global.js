import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

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
