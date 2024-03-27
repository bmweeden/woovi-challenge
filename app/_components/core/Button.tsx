'use client';

import { ReactNode } from 'react';
import { Button as BaseButton } from '@mui/base/Button';
import { styled, Typography } from '@mui/material';

import { rem } from '@/app/_utils/utils';

type ButtonProps = {
  fullwidth?: string;
  text: string;
  icon: ReactNode;
};

export const Button = ({ fullwidth, text, icon }: ButtonProps) => {
  return (
    <ButtonWrapper fullwidth={fullwidth}>
      <Typography component="span">{text}</Typography>
      {icon}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled(BaseButton)(
  ({ theme, fullwidth }) => `
    appearance: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${rem(8)};
    background: ${theme.palette.blue.dark};
    border: none;
    color: white;
    font-weight: 600;
    border-radius: ${rem(8)};
    padding: ${rem(8)} ${rem(22)};
    width: ${fullwidth === 'true' ? '100%' : 'auto'};
    cursor: pointer;
    
    > span {
      font-weight: 600;
    }
  `
);
