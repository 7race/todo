import * as S from './TickField.styled';
import type { TickFieldProps } from './TickFieldProps';

export const TickField = ({ children, ...rest }: TickFieldProps) => <S.TickField {...rest}>{children}</S.TickField>;
