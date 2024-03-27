'use client';

import { ReactNode } from 'react';
import { Box, Stack, Typography, styled, useTheme } from '@mui/material';
import { Button as BaseButton } from '@mui/base/Button';

import { Banner } from '@/app/_components/shared/banner/Banner';
import { Tick } from '@/app/_components/images/Images';

import { formatCurrency, rem } from '@/app/_utils/utils';

type RadioButtonProps = {
  item: Item;
  selected: number;
  setSelected: (value: number) => void;
  children?: ReactNode;
  single?: string;
};

type Item = {
  banner_bold: string | undefined;
  banner_text: string;
  number: number;
  price: number;
  banner?: boolean;
};

export const RadioGroupButton = ({
  item,
  selected,
  setSelected,
  children,
  single = 'false',
}: RadioButtonProps) => {
  const isSelected = selected === item.number;
  const theme = useTheme();

  return (
    <Button
      single={single.toString()}
      selected={isSelected}
      className={isSelected ? 'selected' : ''}
      onClick={() => setSelected(item.number)}
    >
      <Stack alignItems="flex-start">
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Stack direction="row" gap={1}>
            <Typography component="span" fontWeight={800} fontSize={24}>
              {item.number}x
            </Typography>
            <Typography component="span" fontWeight={600} fontSize={24}>
              R$
            </Typography>
            <Typography component="span" fontSize={24}>
              {formatCurrency(item.price)}
            </Typography>
          </Stack>
          <Box
            width={26}
            height={26}
            borderRadius="50%"
            display="grid"
            justifyContent="center"
            alignItems="center"
            bgcolor={isSelected ? theme.palette.green.dark : 'transparent'}
            border={`${rem(2)} solid ${
              isSelected ? theme.palette.green.dark : theme.palette.gray.light
            }`}
          >
            {isSelected && <Tick />}
          </Box>
        </Stack>
        <Stack width="100%" alignItems="flex-start">
          <Stack>{children}</Stack>
          {item.banner_text && (
            <Box mt={1} width="100%">
              <Banner
                isSelected={isSelected}
                bannerBold={item.banner_bold as string}
                bannerText={item.banner_text as string}
              />
            </Box>
          )}
        </Stack>
      </Stack>
    </Button>
  );
};

const Button = styled(BaseButton)(
  ({ theme, selected, single }) => `
    width: 100%;
    padding: ${single === 'true' ? rem(17) : rem(22)} ${rem(18)};
    background-color: ${selected ? theme.palette.green.lightest : 'white'};
    position: relative;
    cursor: pointer;
    border: ${rem(2)} solid ${theme.palette.gray.light};

    &::before {
      content: '';
      position: absolute;
      top: ${rem(-2)};
      left: ${rem(-2)};
      width: calc(100% + ${rem(4)});
      height: calc(100% + ${rem(4)});
      z-index: 1;
      border-width: ${rem(2)};
      border-style: solid;
      border-color: ${selected ? theme.palette.green.dark : 'transparent'};;
    }
  `
);
