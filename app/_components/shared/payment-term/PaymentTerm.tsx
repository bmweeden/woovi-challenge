'use client';

import { Stack, Typography, useTheme } from '@mui/material';

type PaymentTermProps = {
  date: string;
};

export const PaymentTerm = ({ date }: PaymentTermProps) => {
  const theme = useTheme();

  return (
    <Stack alignItems="center">
      <Typography fontWeight={600} color={theme.palette.gray.lightest}>
        Prazo de pagamento:
      </Typography>
      <Typography fontWeight={800} color={theme.palette.gray.dark}>
        {date}
      </Typography>
    </Stack>
  );
};
