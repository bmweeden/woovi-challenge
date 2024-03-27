'use client';

import { Stack, Typography, useTheme } from '@mui/material';

type IdentificationCodeProps = {
  code: string;
};

export const IdentificationCode = ({ code }: IdentificationCodeProps) => {
  const theme = useTheme();

  return (
    <Stack alignItems="center">
      <Typography
        fontWeight={600}
        color={theme.palette.gray.lightest}
        fontSize={14}
      >
        Identificador:
      </Typography>
      <Typography
        fontWeight={800}
        color={theme.palette.gray.dark}
        fontSize={14}
      >
        {code}
      </Typography>
    </Stack>
  );
};
