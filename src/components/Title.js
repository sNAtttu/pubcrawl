import styled, { keyframes } from 'styled-components';

function rotationBuilder(degree) {
  const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-${degree}deg);
    }
    50% {
      transform: rotate(0deg);
      opacity: .9
    }
    75% {
      transform: rotate(${degree}deg);
    }
  `;
  return rotation;
}
export const Title = styled.h1`
    background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2), color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22));
    background-image: gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2), color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22));
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    margin-top:3em;
    margin-bottom:3em;
    animation: ${rotationBuilder(65)} 10s linear infinite;
    @media (max-width: 600px) { 
      animation: ${rotationBuilder(10)} 1s linear infinite;
    }
`;