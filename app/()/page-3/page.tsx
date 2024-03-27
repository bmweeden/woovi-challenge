import { Stack } from '@mui/material';

import { Section } from '@/app/_components/core/layout/Section';
import { SubHeader } from '@/app/_components/shared/sub-header/SubHeader';
import { TextInput } from '@/app/_components/core/forms/TextInput';
import { Select } from '@/app/_components/core/forms/Select';
import { Button } from '@/app/_components/core/Button';
import { PaymentTerm } from '@/app/_components/shared/payment-term/PaymentTerm';
import { HowItWorks } from '@/app/_components/shared/how-it-works/HowItWorks';
import { IdentificationCode } from '@/app/_components/shared/identification-code/IdentificationCode';

const FAKE_DATA = [
  { id: 1, label: '1x de R$ 15.300,00' },
  { id: 2, label: '1x de R$ 10.200,00' },
  { id: 3, label: '1x de R$ 7.650,00' },
  { id: 4, label: '1x de R$ 5.100,00' },
  { id: 5, label: '1x de R$ 3.825,00' },
];

const page = () => {
  return (
    <>
      <Section>
        <SubHeader title="João, pague o restante em 1x no cartão" />
      </Section>
      <Stack gap={2}>
        <Section gap={2}>
          <TextInput label="Nome completo" />
          <TextInput label="CPF" />
          <Stack direction="row" justifyContent="space-between" gap={2}>
            <TextInput label="Vencimento" />
            <TextInput label="CVV" />
          </Stack>
          <Select label="Parcelas" items={FAKE_DATA} />
          <Button text="Pagar" />
        </Section>
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
    </>
  );
};

export default page;
