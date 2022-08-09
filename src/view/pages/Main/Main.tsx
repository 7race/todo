import { P } from '@atoms/P';
import { ToDo } from '@organisms/ToDo';
import { Helmet } from 'react-helmet';
import * as S from './Main.styled';

export const Main = () => (
  <S.Main>
    <Helmet
      bodyAttributes={{
        style:
          'background: linear-gradient(90deg, rgba(255,238,253,1) 9%, rgba(255,215,255,1) 100%); padding-top: 10vh;',
      }}
    />
    <P variant='title'>ToDo</P>
    <ToDo />
  </S.Main>
);
