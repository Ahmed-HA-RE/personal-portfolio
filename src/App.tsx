import Navbar from './components/navbar';
import Providers from './components/providers';
import { StarsBackground } from './components/stars-background';
import ThemeToggler from './components/theme-toggler';

const App = () => {
  return (
    <Providers>
      <header className='py-6 relative z-20'>
        <div className='container flex items-end justify-end'>
          <ThemeToggler />
        </div>
      </header>
      {/* Nav */}
      <Navbar />
      <StarsBackground
        className='fixed inset-0 z-0'
        factor={0.01}
        speed={150}
        pointerEvents={false}
      />
      <main className='z-20 relative'></main>
    </Providers>
  );
};

export default App;
