'use client';

import { Stack, Typography, useTheme } from '@mui/material';

import { Shield, WooviLogoSmall } from '@/app/_components/images/Images';
import { rem } from '@/app/_utils/utils';

export const Footer = () => {
  const theme = useTheme();

  return (
    <Stack component="footer" direction="row" justifyContent="center">
      <Stack direction="row" gap={rem(6)} alignItems="center">
        <Shield />
        <Typography
          color={theme.palette.gray.lightest}
          fontWeight={200}
          fontSize={14}
        >
          Pagamento 100% seguro via:
        </Typography>
        <WooviLogoSmall />
      </Stack>
    </Stack>
  );
};
