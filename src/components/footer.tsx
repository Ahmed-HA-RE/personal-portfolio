import { SOCIAL_LINKS } from '@/lib/constants';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import HoverText from './ui/hover-text';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='border-t pt-8 lg:pt-12'>
      <div className='container space-y-2'>
        <div className='flex flex-col md:flex-row justify-between items-center flex-wrap gap-4'>
          <div className='flex items-center gap-4 max-sm:justify-center'>
            <a
              href={SOCIAL_LINKS.github}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-110 transition duration-300'
            >
              <FaGithub className='size-6' />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='text-foreground hover:text-blue-500 hover:scale-110 transition duration-300'
            >
              <BsLinkedin className='size-6' />
            </a>
          </div>
          <span className='text-sm font-light'>
            © {currentYear} Ahmed Haitham. All rights reserved.
          </span>
        </div>

        <HoverText text='Ahmed' />
      </div>
    </footer>
  );
};

export default Footer;
