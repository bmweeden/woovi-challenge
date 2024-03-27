'use client';

import { ThemeProvider } from '@mui/material';
import { BaseTheme } from './BaseTheme';

type ThemeWrapperProps = {
  children: React.ReactNode;
};

export const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  return <ThemeProvider theme={BaseTheme}>{children}</ThemeProvider>;
};
