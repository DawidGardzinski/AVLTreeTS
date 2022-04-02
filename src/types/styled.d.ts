// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    radius: {
      rounded: string;
      fullRound: string;
    };
    colors: {
      primary: string;
      secondary: string;
      dropdownButtonHover: string;
    };
    space: {
      xxs: string;
      xs: string;
      s: string;
      m: string;
      xxl: string;
    };
  }
}
