import SectionWrapper from './shared/section-wrapper';
import { useForm, Controller } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldGroup, Field, FieldError } from './ui/field';
import { motion } from 'motion/react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from './ui/input-group';
import { FaCircleUser } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { RiMessage2Fill } from 'react-icons/ri';
import { Button } from './ui/button';
import { BiMailSend } from 'react-icons/bi';

const contactSchema = z.object({
  name: z
    .string({ error: "Name can't be empty" })
    .min(4, 'Name must be at least 4 characters'),
  email: z.email({ error: "Email can't be empty" }),
  message: z
    .string({ error: "Message can't be empty" })
    .min(50, 'Please provide a detailed message (at least 50 characters)'),
});

const ContactSection = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    console.log(data);
  };

  return (
    <SectionWrapper
      id='contact'
      title='Contact'
      subtitle="Looking to collaborate or hire? Let's talk."
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
        className='max-w-2xl mx-auto mt-10'
      >
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* Name */}
            <Controller
              name='name'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <InputGroup>
                    <InputGroupInput
                      placeholder='Enter Your Name'
                      type='text'
                      {...field}
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon>
                      <FaCircleUser className='size-5' />
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* Email */}
            <Controller
              name='email'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <InputGroup>
                    <InputGroupInput
                      placeholder='Enter Your Email'
                      type='email'
                      {...field}
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon>
                      <SiGmail className='size-4.5' />
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* Message */}
            <Controller
              name='message'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <InputGroup className='items-start'>
                    <InputGroupTextarea
                      className='min-h-[200px]'
                      placeholder='Your Message'
                      {...field}
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align='inline-start' className='pt-[13px]'>
                      <RiMessage2Fill className='size-5' />
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Button className='rounded-lg group'>
              Send Message
              <BiMailSend className='-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300' />
            </Button>
          </FieldGroup>
        </form>
      </motion.div>
    </SectionWrapper>
  );
};

export default ContactSection;
