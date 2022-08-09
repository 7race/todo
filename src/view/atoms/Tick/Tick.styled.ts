import styled from 'styled-components';

export const Tick = styled.img`
  user-select: none;
  width: 10px;
  height: 10px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 20px;
    height: 20px;
  }
`;
