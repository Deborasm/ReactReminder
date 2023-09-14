import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
 --blue-300: rgba(0,66,157,1.5);
 --blue-600: #4169E1;
 --blue-900: #000080;
 --blue-100: #E6E6FA;

 --font-black: #1c1c1c;
 --font-white: #fff;
}

* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

html {
 //1rem = 16px

 @media(max-width: 1080px) {
  font-size: 93.75%; // 1rem = 15 pixels
 }
 @media(max-width: 720px) {
  font-size: 87.5%; // 1rem = 14 pixels
 }
}
`;
