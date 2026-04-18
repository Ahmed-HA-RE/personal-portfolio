import { TECH_STACK } from '@/lib/constants';
import SectionWrapper from './shared/section-wrapper';
import { Button } from './ui/button';
import { FiArrowDown } from 'react-icons/fi';
import { motion, stagger } from 'motion/react';

const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delayChildren: stagger(0.2) },
  },
};

const AboutMeSection = () => {
  return (
    <SectionWrapper id='about-me' title='About Me'>
      <div className='flex flex-col gap-6'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='rounded-full max-w-[250px] mx-auto bg-[#e2e8f0]'
        >
          <img
            src='/portfolio-photo.png'
            alt="Ahmed's Portfolio Photo"
            className='w-full rounded-full grayscale'
          />
        </motion.div>
        <motion.div
          variants={variants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          className='space-y-8'
        >
          <div className='space-y-4'>
            <motion.h3
              variants={variants}
              className='text-3xl md:text-4xl lg:text-4xl bg-clip-text text-transparent linear-gradient'
            >
              Full Stack Developer
            </motion.h3>

            <motion.p
              variants={variants}
              className='text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed'
            >
              Based in the UAE with over 2 years of experience building web
              applications. I hold a Bachelor's degree in Computer Science,
              graduating with a CGPA of 3.96/4. I specialize in React and
              Next.js, focusing on building fast, scalable, and maintainable
              user interfaces combined with reliable backend systems and solid
              system design.
            </motion.p>
            <motion.p
              variants={variants}
              className='text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed'
            >
              I design and build scalable systems with a focus on performance,
              maintainability, and clean architecture. I have experience
              building dashboards and admin systems for managing and visualizing
              data in real-world applications. I write efficient, maintainable
              code and work with modern tools and technologies to improve system
              design, performance, and overall product quality across projects.
            </motion.p>
          </div>
          <motion.div
            variants={variants}
            className='flex flex-col md:flex-row md:items-center gap-6'
          >
            <p className='font-semibold'>My Tech Stack ~</p>
            <div className='flex flex-wrap gap-5'>
              {TECH_STACK.map((tech) => (
                <img
                  key={tech.tech}
                  src={tech.img}
                  alt={tech.tech}
                  className={tech.className}
                />
              ))}
            </div>
          </motion.div>

          <motion.div variants={variants} className='flex flex-col gap-3'>
            <p className='text-sm text-muted-foreground'>
              Open to full-time opportunities
            </p>
            <Button asChild size='lg' className='w-fit duration-500'>
              <a href='#contact'>
                Reach me
                <FiArrowDown className='animate-bounce size-4.5' />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutMeSection;
