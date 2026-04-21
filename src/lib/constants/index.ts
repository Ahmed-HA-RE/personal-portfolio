import GmailLogo from '@/components/icons/gmail-logo';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMapPin } from 'react-icons/hi2';

export const APP_URL = 'https://www.ahmedrehandev.com';
export const SOCIAL_LINKS = {
  github: 'https://github.com/Ahmed-HA-RE',
  linkedin: 'https://www.linkedin.com/in/ahmedhaitham-dev',
};

export const WORDS = [
  'Full Stack Web Developer',
  'Next.js & React Engineer',
  'Full Stack Engineer',
  'End to End System Builder',
  'Web Application Builder',
];

export const TECH_STACK = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Neon',
  'Cursor',
  'PostgreSQL',
  'Prisma',
  'Git',
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
    title: 'Location',
    subtitle: 'Based in Abu Dhabi, United Arab Emirates',
    buttonText: 'View on Map',
    value: 'https://maps.app.goo.gl/72MVeKgPkavnXvvYA',
    icon: HiMapPin,
  },
];
