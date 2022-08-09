import styled, { css } from 'styled-components';
import type { PProps } from './PProps';

const taskLineText = css`
  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
  font-weight: lighter;
  display: inline-block;
  word-wrap: break-word;
  width: 75vw;
  @media ${({ theme }) => theme.media.tablet} {
    font-size: 35px;
    width: 85vw;
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

    & span {
      background-image: linear-gradient(to bottom, transparent 20%, ${({ theme }) => theme.colors.lightGrey} 21%);
      background-repeat: no-repeat;
      background-size: 100% 4px;
      transition-delay: 0s;
      background-position: 0 0.5em;
    }
  `,
  subText: css`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: center;

    @media ${({ theme }) => theme.media.tablet} {
      font-size: 20px;
    }
  `,
};

export const P = styled.p<PProps>`
  user-select: none;
  ${({ variant }) => (variant ? variants[variant] : variants['todo'])}
`;
