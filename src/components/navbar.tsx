import { AiOutlineHome } from 'react-icons/ai';
import { FiUser, FiGithub } from 'react-icons/fi';
import { LuLayoutGrid, LuFileText } from 'react-icons/lu';
import { FaCode } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { GrContact } from 'react-icons/gr';
import { FloatingDock } from './ui/floating-dock';
import { SOCIAL_LINKS } from '@/lib/constants';

const items: {
  title: string;
  icon: React.ReactNode;
  href: string;
}[] = [
  {
    title: 'Home',
    icon: <AiOutlineHome size={25} />,
    href: '#home',
  },
  {
    title: 'About',
    icon: <FiUser size={25} />,
    href: '#about',
  },
  {
    title: 'Projects',
    icon: <LuLayoutGrid size={25} />,
    href: '#projects',
  },
  {
    title: 'Skills',
    icon: <FaCode size={25} />,
    href: '#skills',
  },
  {
    title: 'Contact',
    icon: <GrContact size={25} />,
    href: '#contact',
  },
  {
    title: 'Resume',
    icon: <LuFileText size={25} />,
    href: '/resume.pdf',
  },
  {
    title: 'GitHub',
    icon: <FiGithub size={25} />,
    href: SOCIAL_LINKS.github,
  },
  {
    title: 'LinkedIn',
    icon: <FaLinkedin size={25} />,
    href: SOCIAL_LINKS.linkedin,
  },
];

const Navbar = () => {
  return (
    <nav className='fixed bottom-6 max-md:right-6 md:left-1/2 md:-translate-x-1/2 z-30'>
      <FloatingDock items={items} />
    </nav>
  );
};

export default Navbar;
