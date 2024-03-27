import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    green: {
      dark: string;
      lightest: string;
    };
    gray: {
      dark: string;
      mid: string;
      light: string;
      lightest: string;
    };
    blue: {
      dark: string;
    };
  }
  interface PaletteOptions {
    green: {
      dark: string;
      lightest: string;
    };
    gray: {
      dark: string;
      mid: string;
      light: string;
      lightest: string;
    };
    blue: {
      dark: string;
    };
  }
}

export const BaseTheme = createTheme({
  palette: {
    green: {
      dark: '#03D69D',
      lightest: '#F5FBF9',
    },
    gray: {
      dark: '#4D4D4D',
      mid: '#AFAFAF',
      light: '#E5E5E5',
      lightest: '#B2B2B2',
    },
    blue: {
      dark: '#133A6F',
    },
  },
});
