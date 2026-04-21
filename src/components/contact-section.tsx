import SectionWrapper from './shared/section-wrapper';
import { motion } from 'motion/react';
import { CONTACT_DATA } from '@/lib/constants';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const ContactSection = () => {
  return (
    <SectionWrapper
      id='contact'
      title='Get in Touch'
      subtitle="Whether it's a professional inquiry or a technical discussion, I'd love to hear from you."
    >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {CONTACT_DATA.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <motion.a
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              key={contact.title}
              href={contact.value}
            >
              <Card className='rounded-lg hover:scale-105 transition duration-300 group cursor-pointer hover:bg-accent'>
                <CardContent className='flex flex-col gap-5'>
                  <span className='size-11 rounded-xl bg-muted group-hover:bg-white flex items-center justify-center transition duration-300'>
                    <Icon className='size-6 text-foreground group-hover:text-accent transition duration-300' />
                  </span>

                  <div className='space-y-1'>
                    <h3 className='text-lg font-medium group-hover:text-white transition duration-300'>
                      {contact.title}
                    </h3>
                    <p className='text-muted-foreground group-hover:text-white transition duration-300 text-base'>
                      {contact.subtitle}
                    </p>
                  </div>
                  <Button className='bg-muted text-foreground rounded-xl text-base group-hover:bg-white group-hover:text-black hover:bg-white hover:text-black'>
                    {contact.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.a>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
