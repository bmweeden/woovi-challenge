import { Stack } from '@mui/material';

type SectionProps = {
  children: React.ReactNode;
  gap?: number;
};

export const Section = ({ children, gap }: SectionProps) => {
  return (
    <Stack component="section" gap={gap}>
      {children}
    </Stack>
  );
};
