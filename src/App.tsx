import Navbar from './components/navbar';
import { StarsBackground } from './components/stars-background';

const App = () => {
  return (
    <>
      {/* Nav */}
      <Navbar />
      <StarsBackground
        className='fixed inset-0 z-0'
        factor={0.01}
        speed={150}
        pointerEvents={false}
      />
      <main className='z-20 relative'>Home</main>
    </>
  );
};

export default App;
