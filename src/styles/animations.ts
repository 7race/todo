import styled, { keyframes } from 'styled-components';

const cross = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const Cross = styled.div`
  & > p {
    &::before {
      animation: ${cross} 0.2s forwards;
    }
  }
`;
