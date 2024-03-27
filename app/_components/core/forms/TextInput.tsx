'use client';

import { TextField, styled } from '@mui/material';
import { rem } from '@/app/_utils/utils';

type TextInputProps = {
  label: string;
  variant?: 'outlined' | 'filled' | 'standard';
};

export const TextInput = ({ label, variant = 'outlined' }: TextInputProps) => {
  return <TextFieldWrapper label={label} variant={variant} />;
};

const TextFieldWrapper = styled(TextField)(
  ({ theme }) => `
    & label {   
      background: white;
    }

    & fieldset { 
      border: ${rem(2)} solid ${theme.palette.gray.light} !important; 
      border-radius: ${rem(8)};
    }

    .Mui-focused fieldset  {
      border-color:  ${theme.palette.gray.light} !important;
    },

    label.Mui-focused  {
      color: ${theme.palette.gray.dark} !important;,
    },
  `
);
