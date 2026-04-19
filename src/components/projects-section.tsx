import SectionWrapper from './shared/section-wrapper';
import { motion, stagger } from 'motion/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import projects from '../projects.json';
import { Badge } from './ui/badge';
import { FiGithub } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { SOCIAL_LINKS } from '@/lib/constants';

const variants = {
  initial: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delayChildren: stagger(0.3),
    },
  },
};

const ProjectsSection = () => {
  return (
    <SectionWrapper
      title='Projects'
      subtitle="A selection of some projects I've built."
      id='projects'
    >
      <motion.div
        variants={variants}
        initial='initial'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch'
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={variants} className='group'>
            <Card className='pt-0 pb-4 gap-4'>
              <div className='relative overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-60 rounded-t-xl object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>
              <CardHeader className='px-4'>
                <CardTitle className='text-xl'>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className='px-0'>
                <span className='px-4 flex flex-wrap gap-2.5'>
                  {project.stack.map((stack, index) => (
                    <Badge
                      variant='outline'
                      size='lg'
                      className='bg-accent/10'
                      key={index}
                    >
                      {stack}
                    </Badge>
                  ))}
                </span>
              </CardContent>
              <CardFooter className='gap-3 max-sm:flex-col max-sm:items-stretch px-4'>
                <Button
                  size='sm'
                  asChild
                  className='bg-transparent border-accent text-accent hover:border-transparent'
                >
                  <a
                    href={project.links.live}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <HiOutlineExternalLink className='size-4' />
                    Demo
                  </a>
                </Button>
                <Button
                  size='sm'
                  variant='outline'
                  asChild
                  className='hover:bg-background hover:text-foreground bg-white text-black'
                >
                  <a
                    href={project.links.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FiGithub className='size-4' />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        variants={variants}
        initial='initial'
        whileInView='visible'
        viewport={{ once: true, amount: 0.4 }}
        className='flex flex-col items-center justify-center gap-4'
      >
        <motion.small
          variants={variants}
          className='text-muted-foreground text-center italic block'
        >
          Hey Hey wait there&apos;s more!
        </motion.small>
        <motion.div variants={variants} className='w-full'>
          <Button size='lg' asChild className='w-full'>
            <a
              href={`${SOCIAL_LINKS.github}?tab=repositories`}
              target='_blank'
              rel='noopener noreferrer'
            >
              View More
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
