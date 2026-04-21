import AboutMeSection from './components/about-me-section';
import HeroSection from './components/hero-section';
import ProjectsSection from './components/projects-section';
import Navbar from './components/navbar';
import { StarsBackground } from './components/stars-background';
import ThemeToggler from './components/theme-toggler';
import SkillsSection from './components/skills-section';
import ContactSection from './components/contact-section';
import Footer from './components/footer';

const App = () => {
  return (
    <>
      <header className='py-6 z-20 relative'>
        <div className='container flex items-center justify-between'>
          <img src='/logo.svg' alt='Logo' className='w-16' />
          <ThemeToggler />
        </div>
      </header>
      {/* Navbar */}
      <Navbar />
      <StarsBackground className='fixed inset-0 z-0' pointerEvents={false} />
      <div className='relative z-10'>
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* About Me */}
          <AboutMeSection />

          {/* Projects */}
          <ProjectsSection />

          {/* Skills */}
          <SkillsSection />

          {/* Contact Section */}
          <ContactSection />
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default App;
