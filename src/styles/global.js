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

.point-down {
  display: inline-block;
  animation: pointDownAnimation 1.5s infinite;
  transform-origin: center;
}

@keyframes pointDownAnimation {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(5px); }
  100% { transform: translateY(0); }
}

.wave {
  display: inline-block;
  animation: wave-animation 2s infinite;
  transform-origin: 70% 70%;
}

@keyframes wave-animation {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

`;

export const SobreMim = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 90vh;
  padding-top: 80px;

  @media (max-width: 950px) {
    height: 110vh;
    flex-direction: column;
    padding-top: 120px;
  }
`;

export const BlocoTitulo = styled.div`
  padding: 3rem 4rem;
  color: #fff;

  @media (max-width: 550px) {
    text-align: center;
  }
`;
