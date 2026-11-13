import { MotionConfig } from 'motion/react';
import { ThemeProvider } from '../ui/theme-provider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='theme'>
      <MotionConfig reducedMotion='user'>{children}</MotionConfig>
    </ThemeProvider>
  );
};

export default Providers;
