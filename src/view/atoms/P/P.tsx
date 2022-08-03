import * as S from './P.styled';
import type { PProps } from './PProps';

export const P = ({ children, ...rest }: PProps) => <S.P {...rest}>{children}</S.P>;
