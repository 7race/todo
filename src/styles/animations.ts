import styled, { keyframes } from 'styled-components';

const cross = keyframes`
   from {
    background-image: linear-gradient(to bottom, transparent 20%, green 21%);
    background-position: 0;
    background-repeat: no-repeat;
    background-size: 0% 4px;
  }
  to {
    background-size: 100% 4px;
    transition-delay: 0s;
    background-position: 0 0.5em;
  }
`;

export const Cross = styled.div`
  & > p {
    & span {
      animation: ${cross} 0.4s forwards;
    }
  }
`;
