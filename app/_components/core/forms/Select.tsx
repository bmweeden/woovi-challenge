'use client';

import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select as MUISelect,
  MenuItem,
  Typography,
  styled,
} from '@mui/material';
import { rem } from '@/app/_utils/utils';

type SelectProps = {
  label: string;
  items: { id: number; label: string }[];
};

export const Select = ({ label, items }: SelectProps) => {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
  };

  const rows = items.map((item) => (
    <MenuItem key={item.id} value={item.id}>
      <Typography component="span">{item.label}</Typography>
    </MenuItem>
  ));

  return (
    <FormControlWrapper fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <MUISelect onChange={handleChange} defaultValue="">
        {rows}
      </MUISelect>
    </FormControlWrapper>
  );
};

const FormControlWrapper = styled(FormControl)(
  ({ theme }) => `
    label {   
      background: white;
      padding: ${rem(0)} ${rem(8)};
    }

    label.Mui-focused {
      color: ${theme.palette.gray.dark} !important;
    }

    .Mui-focused fieldset,
    .MuiOutlinedInput-notchedOutline  {
      border-color: ${theme.palette.gray.light} !important;
      border-width: ${rem(2)} !important;
    },

    .MuiInputBase-formControl {
      border-radius: ${rem(8)};
    }

    .MuiInputBase-formControl:hover {
      border-color: ${theme.palette.gray.light} !important;
    }
  `
);
