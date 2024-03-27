'use client';

import { Stack, Typography, useTheme } from '@mui/material';

import { rem } from '@/app/_utils/utils';

type SubHeaderProps = {
  title: string;
};

export const SubHeader = ({ title }: SubHeaderProps) => {
  const theme = useTheme();
  return (
    <Stack textAlign="center" mb={3.75} px={rem(32)}>
      <Typography
        variant="h1"
        fontWeight="800"
        color={theme.palette.gray.dark}
        fontSize={24}
      >
        {title}
      </Typography>
    </Stack>
  );
};
