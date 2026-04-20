import SectionWrapper from './shared/section-wrapper';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { SKILLS } from '../skills';
import { cn } from '@/lib/utils';

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, when: 'beforeChildren' },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SkillsSection = () => {
  return (
    <SectionWrapper
      id='skills'
      title='Skills'
      subtitle='These are the Tools and Technologies I work with'
    >
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={variants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Card className='rounded-lg'>
          <CardContent className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4'>
            {SKILLS.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.id}
                  variants={childVariants}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Card
                    className={`rounded-lg py-2.5 hover:scale-110 transition-transform duration-500 ring-0 bg-muted ${skill.boxShadow}`}
                  >
                    <CardContent className='flex flex-col items-center justify-center gap-2 px-1'>
                      <Icon className={cn('size-9', skill.color)} />
                      <span className='text-foreground text-base'>
                        {skill.name}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </CardContent>
        </Card>
      </motion.div>
    </SectionWrapper>
  );
};

export default SkillsSection;
