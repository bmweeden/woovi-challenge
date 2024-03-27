'use client';

import { useState } from 'react';
import { Box, Stack, Typography, styled, useTheme } from '@mui/material';

import { formatCurrency, rem } from '@/app/_utils/utils';
import { RadioGroupButton } from './RadioGroupButton';
import { CategoryPill } from './CategoryPill';

const DUMMY_DATA = [
  {
    number: 1,
    price: 30500,
    banner: true,
    banner_bold: '🤑 R$ 300,00',
    banner_text: 'de volta no seu Pix na hora',
  },
  {
    number: 2,
    price: 15300,
    banner: false,
    banner_bold: '',
    banner_text: '',
  },
  {
    number: 3,
    price: 1019666 / 100,
    banner: false,
    banner_bold: '',
    banner_text: '',
  },
  {
    number: 4,
    price: 7725,
    banner: true,
    banner_bold: '-3% de juros:',
    banner_text: 'Melhor opção de parcelamento',
  },
  {
    number: 5,
    price: 6300,
    banner: false,
    banner_bold: '',
    banner_text: '',
  },
  {
    number: 6,
    price: 528333 / 100,
    banner: false,
    banner_bold: '',
    banner_text: '',
  },
  {
    number: 7,
    price: 454285 / 100,
    banner: false,
    banner_bold: '',
    banner_text: '',
  },
];

export const RadioGroup = () => {
  const [firstItem, ...restItems] = DUMMY_DATA;
  const [selected, setSelected] = useState<number>(1);
  const theme = useTheme();

  const rows = restItems.map((item, i) => (
    <Box key={i}>
      <RadioGroupButton
        item={item}
        setSelected={setSelected}
        selected={selected}
      >
        <Stack
          direction="row"
          gap={1}
          fontSize={16}
          color={theme.palette.gray.dark}
        >
          <Typography>Total: R$</Typography>
          <Typography>{formatCurrency(item.price * item.number)}</Typography>
        </Stack>
      </RadioGroupButton>
    </Box>
  ));

  return (
    <StackContainer gap={4}>
      <Box position="relative" className="solo">
        <CategoryPill label="Pix" />
        <RadioGroupButton
          item={firstItem}
          single="true"
          setSelected={setSelected}
          selected={selected}
        >
          <Stack>
            <Typography fontSize={16} color={theme.palette.green.dark}>
              Ganhe 3% de Cashback
            </Typography>
          </Stack>
        </RadioGroupButton>
      </Box>
      <Box position="relative">
        <CategoryPill label="Pix Parcelado" />
        <Box className="multiple">{rows}</Box>
      </Box>
    </StackContainer>
  );
};

const StackContainer = styled(Stack)(
  ({ theme }) => `
    & .solo button, 
      .solo button:before {
        border-radius: ${rem(8)};
      }

    & .multiple button {
      border-bottom: none;
    }

    & .multiple .MuiBox-root:first-of-type button,
      .multiple .MuiBox-root:first-of-type button::before {  
        border-top-left-radius: ${rem(8)};
        border-top-right-radius: ${rem(8)};
      }

    & .multiple .MuiBox-root:last-of-type button {  
      border-bottom: ${rem(2)} solid ${theme.palette.gray.light};
    }

    & .multiple .MuiBox-root:last-of-type button,
      .multiple .MuiBox-root:last-of-type button:before {  
        border-bottom-left-radius: ${rem(8)};
        border-bottom-right-radius: ${rem(8)};
      }
  `
);
