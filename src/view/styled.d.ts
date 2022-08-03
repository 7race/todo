import 'styled-components';

interface ITheme {
  colors: {
    lightGrey: string;
    darkGrey: string;
    pink: string;
    green: string;
    black: string;
  };
  media: {
    mobile: string;
    tablet: string;
    notebook: string;
    desktop: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
