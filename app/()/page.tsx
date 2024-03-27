import { Section } from '@/app/_components/core/layout/Section';

import { SubHeader } from '@/app/_components/shared/sub-header/SubHeader';
import { RadioGroup } from '@/app/_components/shared/radio-group/RadioGroup';

const page = () => {
  return (
    <>
      <Section>
        <SubHeader title="João, como você quer pagar?" />
      </Section>
      <Section>
        <RadioGroup />
      </Section>
    </>
  );
};

export default page;
