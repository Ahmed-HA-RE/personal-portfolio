import AboutMeSection from './components/about-me-section';
import HeroSection from './components/hero-section';
import Navbar from './components/navbar';
import Providers from './components/providers';
import { StarsBackground } from './components/stars-background';
import ThemeToggler from './components/theme-toggler';

const App = () => {
  return (
    <Providers>
      <header className='py-6 z-20 relative'>
        <div className='container flex items-center justify-between'>
          <img src='/logo.svg' alt='Logo' className='w-16' />
          <ThemeToggler />
        </div>
      </header>
      {/* Navbar */}
      <Navbar />
      <StarsBackground className='fixed inset-0 z-0' pointerEvents={false} />
      <main className='z-20 relative'>
        {/* Hero Section */}
        <HeroSection />

        {/* About Me */}
        <AboutMeSection />
      </main>
    </Providers>
  );
};

export default App;
