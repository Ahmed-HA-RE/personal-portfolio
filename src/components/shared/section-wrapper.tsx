import { motion, stagger } from 'motion/react';

const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delayChildren: stagger(0.2) },
  },
};

const SectionWrapper = ({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => {
  return (
    <section className='pb-8 md:pb-16 lg:pb-24' id={id}>
      <div className='container space-y-6'>
        <motion.div
          variants={variants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          className='space-y-2.5'
        >
          <motion.h2
            variants={variants}
            className='text-3xl md:text-4xl underline underline-offset-4 text-foreground capitalize font-medium'
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              variants={variants}
              className='text-base md:text-lg text-muted-foreground'
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
