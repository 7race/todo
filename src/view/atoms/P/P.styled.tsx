import styled, { css, keyframes } from 'styled-components';
import type { PProps } from './PProps';

const taskLineText = css`
  font-family: 'Quicksand', sans-serif;
  font-size: 40px;
  font-weight: lighter;
  display: inline-block;
  @media ${({ theme }) => theme.media.notebook} {
    font-size: 50px;
  }
`;

const variants = {
  title: css`
    font-family: 'Quicksand', sans-serif;
    font-size: 70px;
    color: ${({ theme }) => theme.colors.pink};
    font-weight: lighter;
    @media ${({ theme }) => theme.media.notebook} {
      font-size: 90px;
    }
  `,
  todo: css`
    ${taskLineText}
  `,
  done: css`
    ${taskLineText}

    color: ${({ theme }) => theme.colors.lightGrey};
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      top: 47%;
      background-color: ${({ theme }) => theme.colors.lightGrey};
    }
  `,
  subText: css`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.darkGrey};
  `,
};

export const P = styled.p<PProps>`
  user-select: none;
  ${({ variant }) => (variant ? variants[variant] : variants['todo'])}
`;
