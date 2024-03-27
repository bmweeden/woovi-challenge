'use client';

import { Box, Stack, Typography, styled, useTheme } from '@mui/material';

import { rem } from '@/app/_utils/utils';

const TIMELINE_DUMMY_DATA = [
  { label: '1ª entrada no Pix', price: '15.300,00', active: true },
  { label: '2ª no cartão', price: '15.300,00', active: false },
];

export const TimeLine = () => {
  const theme = useTheme();

  const rows = TIMELINE_DUMMY_DATA.map((item, i) => {
    return (
      <Stack
        component="li"
        key={i}
        direction="row"
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <Box
            width={16}
            height={16}
            border={`${rem(2)} solid ${
              item.active ? theme.palette.green.dark : theme.palette.gray.light
            }`}
            bgcolor="white"
            borderRadius="50%"
            zIndex={1}
          />
          <Typography
            fontWeight={600}
            color={theme.palette.gray.dark}
            lineHeight={1}
          >
            {item.label}
          </Typography>
        </Stack>
        <Typography
          fontWeight={800}
          color={theme.palette.gray.dark}
          lineHeight={1}
        >
          R$ {item.price}
        </Typography>
      </Stack>
    );
  });

  return (
    <TimeLineWrapper
      component="ul"
      display="flex"
      flexDirection="column"
      gap={rem(20)}
      position="relative"
    >
      {rows}
    </TimeLineWrapper>
  );
};

const TimeLineWrapper = styled(Box)(
  ({ theme }) => `
    padding: 0;
    margin: 0;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: ${rem(7)};
      height: 100%;
      width: ${rem(2)};
      background: ${theme.palette.gray.light};
      z-index: 0;
    }
  `
);
