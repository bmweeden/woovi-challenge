'use client';

import { Box, useTheme } from '@mui/material';
import Image from 'next/image';

import { rem } from '@/app/_utils/utils';

export const QRCode = ({ imagePath }: { imagePath: string }) => {
  const theme = useTheme();

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        p={1}
        border={`${rem(2)} solid ${theme.palette.green.dark}`}
        borderRadius={2}
      >
        <Image
          src={imagePath}
          alt="QR Code"
          width={332}
          height={332}
          priority={true}
        />
      </Box>
    </Box>
  );
};
