import { motion } from 'motion/react';

import { WORDS } from '@/lib/constants';
import TypingTextAnimation from './typing-text-animation';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section id='home'>
      <div className='container min-h-[90vh] flex flex-col items-center justify-center'>
        <motion.div
          className='flex flex-col items-center justify-center text-center gap-6'
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            duration: 1,
            bounce: 0.25,
          }}
        >
          <div className='flex items-center justify-center rounded-full linear-gradient p-0.5'>
            <Badge className='rounded-full border-none bg-background text-foreground'>
              Software Engineer
            </Badge>
          </div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
            Hi, I'm
            <span className='bg-clip-text text-transparent linear-gradient'>
              {' '}
              Ahmed 👋
            </span>
          </h1>
          <TypingTextAnimation
            words={WORDS}
            cursorStyle='line'
            className='text-foreground text-xl md:text-2xl lg:text-3xl'
            deleteSpeed={80}
            typeSpeed={80}
            pauseDelay={2000}
            startOnView
            loop
          />
          <p className='text-muted-foreground text-sm md:text-base lg:text-lg max-w-xl mx-auto leading-relaxed'>
            I specialize in building scalable, high-performance web applications
            with smooth frontend experiences and solid backend systems. I focus
            on clean architecture, intuitive interfaces, and real-world
            usability.
          </p>
          {/* Actions */}
          <div className='flex items-center justify-center gap-4'>
            <Button
              asChild
              className='rounded-full hover:scale-105 duration-500'
            >
              <a href='#projects'>View My Work</a>
            </Button>
            <Button
              asChild
              variant={'outline'}
              className='rounded-full hover:scale-105 duration-500'
            >
              <a href='#contact'>Contact Me</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
