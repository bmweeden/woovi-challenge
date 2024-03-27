import { Box } from '@mui/material';

type SectionProps = {
  children: React.ReactNode;
};

export const Section = ({ children }: SectionProps) => {
  return <Box component="section">{children}</Box>;
};
