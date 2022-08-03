import 'styled-components';

interface ITheme {
  colors: {
    lightGrey: string;
    darkGrey: string;
    pink: string;
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
