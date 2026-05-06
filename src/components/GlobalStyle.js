import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  background-color: #fefbe9;
margin:0;
padding:0
}
ul,ol {
list-style:none;
padding:0;
margin:0;
}

img{
display:block;
max-width:100%;
height:auto;
}
a{
text-decoration:none;
}

`;