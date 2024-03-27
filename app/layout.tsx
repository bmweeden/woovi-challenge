import CssBaseline from '@mui/material/CssBaseline';
import { Stack, Box } from '@mui/material';

import { ThemeWrapper } from '@/app/_theme/ThemeWrapper';
import { Header } from '@/app/_components/shared/header/Header';
import { Footer } from '@/app/_components/shared/footer/footer';

import '@/app/_styles/style.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CssBaseline />
      <html lang="en">
        <head></head>
        <ThemeWrapper>
          <body>
            <Stack gap={3.75} py={3} px={2}>
              <Header />
              <Box component="main">{children}</Box>
              <Footer />
            </Stack>
          </body>
        </ThemeWrapper>
      </html>
    </>
  );
}
