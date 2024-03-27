'use client';

import { rem } from '@/app/_utils/utils';
import { Box, Typography, styled } from '@mui/material';

type CategoryPillProps = {
  label: string;
};

export const CategoryPill = ({ label }: CategoryPillProps) => {
  return (
    <CategoryPillWrapper>
      <Typography component="span" fontWeight={800}>
        {label}
      </Typography>
    </CategoryPillWrapper>
  );
};

const CategoryPillWrapper = styled(Box)(
  ({ theme }) => `

    padding: ${rem(1)} ${rem(20)};
    border-radius: ${rem(9999)};
    background-color: ${theme.palette.gray.light};
    color: ${theme.palette.gray.dark};
    font-size: ${rem(14)};
    font-weight: 800;
    position: absolute;
    top: 0;
    left: ${rem(20)};
    transform: translateY(-50%);
    z-index: 2;
  `
);
