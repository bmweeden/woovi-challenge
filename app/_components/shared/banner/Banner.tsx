'use client';

import { Box, Stack, Typography, styled } from '@mui/material';

import { rem } from '@/app/_utils/utils';

type BannerProps = {
  isSelected: boolean;
  bannerBold?: string;
  bannerText: string;
};

export const Banner = ({ isSelected, bannerBold, bannerText }: BannerProps) => {
  return (
    <BannerWrapper selected={isSelected} theme={undefined}>
      <Stack direction="row" gap={0.75} color="white">
        {bannerBold && (
          <Typography component="span" fontWeight="800" fontSize={14}>
            {' '}
            {bannerBold}
          </Typography>
        )}
        <Typography component="span" fontSize={14}>
          {bannerText}
        </Typography>
      </Stack>
    </BannerWrapper>
  );
};

const BannerWrapper = styled(Box)(
  ({ theme, selected }: { theme: any; selected: boolean }) => `
    display: flex;
    align-items: flex-start;
    background: ${theme.palette.blue.dark};
    padding: ${rem(4)} ${rem(10)};
    width: 100%;
    border-radius: ${rem(4)};
    position: relative;

    &::after {
      content: '';
      width: ${rem(21)};
      height: ${rem(21)};
      background: ${selected ? theme.palette.green.lightest : 'white'};
      position: absolute;
      right: ${rem(-13)};
      top: 50%;
      border-radius: ${rem(2)};
      transform: translateY(-50%) rotate(45deg);
    }

    // & span {
    //   color: white !important;
    //   font-size: ${rem(14)} !important;
    // }
  `
);
