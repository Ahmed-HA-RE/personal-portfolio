import HeroSection from './components/hero-section';
import Navbar from './components/navbar';
import Providers from './components/providers';
import { StarsBackground } from './components/stars-background';
import ThemeToggler from './components/theme-toggler';

const App = () => {
  return (
    <Providers>
      <header className='py-6 relative z-20'>
        <div className='container flex items-center justify-between'>
          <img src='/logo.svg' className='w-16' />
          <ThemeToggler />
        </div>
      </header>
      {/* Navbar */}
      <Navbar />
      <StarsBackground
        className='fixed inset-0 z-0'
        factor={0.01}
        speed={150}
        pointerEvents={false}
      />
      <main className='z-20 relative'>
        {/* Hero Section */}
        <HeroSection />
      </main>
    </Providers>
  );
};

export default App;
