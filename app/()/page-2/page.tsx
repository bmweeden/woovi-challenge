import { Stack } from '@mui/material';

import { Section } from '@/app/_components/core/layout/Section';
import { SubHeader } from '@/app/_components/shared/sub-header/SubHeader';
import { QRCode } from '@/app/_components/shared/qr-code/QRCode';
import { Button } from '@/app/_components/core/Button';
import { CopyIcon } from '@/app/_components/icons/Icons';
import { PaymentTerm } from '@/app/_components/shared/payment-term/PaymentTerm';
import { HowItWorks } from '@/app/_components/shared/how-it-works/HowItWorks';
import { IdentificationCode } from '@/app/_components/shared/identification-code/IdentificationCode';

const page = () => {
  return (
    <>
      <Section>
        <SubHeader title="João, pague a entrada de R$ 15.300,00 pelo Pix" />
      </Section>
      <Stack gap={2}>
        <Stack gap={2}>
          <Section>
            <QRCode imagePath="/images/QR-code.png" />
          </Section>
          <Stack component="section" direction="row" justifyContent="center">
            <Button icon={<CopyIcon />} text="Clique para copiar QR CODE" />
          </Stack>
          <Section>
            <PaymentTerm date="15/12/2021 - 08:17" />
          </Section>
          <Section>
            <HowItWorks />
          </Section>
          <Section>
            <IdentificationCode code="2c1b951f356c4680b13ba1c9fc889c47" />
          </Section>
        </Stack>
      </Stack>
    </>
  );
};

export default page;
