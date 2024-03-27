'use client';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
  Typography,
  useTheme,
  styled,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { TimeLine } from '@/app/_components/shared/time-line/TimeLine';
import { rem } from '@/app/_utils/utils';

export const HowItWorks = () => {
  const theme = useTheme();

  return (
    <AccordianWrapper disableGutters direction="reverse">
      <AccordianHeader
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography fontWeight={800} color={theme.palette.gray.dark}>
          Como funciona?
        </Typography>
      </AccordianHeader>

      <AccordionDetails style={{ padding: 0 }}>
        <Stack gap={2} width="100%">
          <TimeLine />
          <Divider />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            pb={2}
          >
            <Typography
              fontWeight={600}
              color={theme.palette.gray.dark}
              lineHeight={1}
              fontSize={14}
            >
              CET: 0,5%
            </Typography>
            <Typography
              fontWeight={600}
              color={theme.palette.gray.dark}
              lineHeight={1}
              fontSize={16}
            >
              Total: R$ 30.600,00
            </Typography>
          </Stack>
        </Stack>
      </AccordionDetails>
    </AccordianWrapper>
  );
};

const AccordianWrapper = styled(Accordion)(
  ({ direction }: { direction?: string }) => `
    display: flex;
    box-shadow: none;
    flex-direction: ${direction === 'reverse' ? 'column-reverse' : 'column'};

    &::before {
      opacity: 0;
    }
  `
);

const AccordianHeader = styled(AccordionSummary)(
  ({ theme }) => `
    border-top: ${rem(1)} solid ${theme.palette.gray.light};
    border-bottom: ${rem(1)} solid ${theme.palette.gray.light};
    padding-left: 0;
    padding-right: 0;
  `
);
