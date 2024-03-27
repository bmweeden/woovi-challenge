import { Box } from '@mui/material';

import { SubHeader } from '@/app/_components/shared/sub-header/SubHeader';
import { RadioGroup } from '@/app/_components/shared/radio-group/RadioGroup';

const page = () => {
  return (
    <>
      <Box component="section">
        <SubHeader title="João, como você quer pagar?" />
      </Box>
      <Box component="section">
        <RadioGroup />
      </Box>
    </>
  );
};

export default page;
