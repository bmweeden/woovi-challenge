import { Stack } from '@mui/material';

import { WooviLogo } from '@/app/_components/images/Images';

export const Header = () => {
  return (
    <Stack component="header" direction="column" alignItems="center" gap={4}>
      <WooviLogo />
    </Stack>
  );
};
