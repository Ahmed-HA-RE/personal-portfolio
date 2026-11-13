import GmailLogo from '@/components/icons/gmail-logo';
import { FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

export const APP_URL = 'https://www.ahmedrehandev.net';
export const SOCIAL_LINKS = {
  github: 'https://github.com/Ahmed-HA-RE',
  linkedin: 'https://www.linkedin.com/in/ahmedhaitham-dev',
};

// English, Spanish, French, Chinese, Japanese
export const GREETINGS = ['Hi', 'Hola', 'Bonjour', '你好', 'こんにちは'];

export const WORDS = [
  'Full Stack Developer',
  'Next.js & NestJS Engineer',
  'SaaS Product Builder',
];

export const TECH_STACK = [
  'TypeScript',
  'Next.js',
  'Node.js',
  'NestJS',
  'Neon',
  'PostgreSQL',
  'Prisma',
  'Claude',
];

export const CONTACT_DATA = [
  {
    title: 'Email',
    subtitle: 'Feel free to reach out anytime',
    buttonText: 'Send Email',
    value: 'mailto:ah607k@gmail.com',
    icon: GmailLogo,
  },
  {
    title: 'Phone',
    subtitle: 'Available for calls and messages',
    buttonText: '+971 50 126 7437',
    value: 'tel:+971501267437',
    icon: FaPhoneAlt,
  },
  {
    title: 'LinkedIn',
    subtitle: "Let's connect and talk shop",
    buttonText: 'View Profile',
    value: SOCIAL_LINKS.linkedin,
    icon: FaLinkedin,
  },
];
