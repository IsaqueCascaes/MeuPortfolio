import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,33,56,1) 50%, rgba(6,8,11,1) 100%);
}
`;

export const SobreMim = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 90vh;
  padding-top: 80px;

/* @media screen and (max-width: 700px){
  
} */
`;

export const BlocoTitulo = styled.div`
  padding: 1rem 4rem;
`;
