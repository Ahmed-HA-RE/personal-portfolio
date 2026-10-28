import { v4 as uuidv4 } from 'uuid';

export const PROJECTS = [
  {
    id: uuidv4(),
    title: 'Readium',
    description:
      'Publishing platform where writers share free or Pro-only stories, with subscriptions, real-time notifications, and a dashboard for user management and moderation.',
    image: '/projects/readium.png',
    stack: [
      'Next.js',
      'NestJS',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'Stripe',
      'Socket.io',
      'Jest',
    ],
    links: {
      github: 'https://github.com/Ahmed-HA-RE/readium',
      live: 'https://readium.ahmedrehandev.net',
    },
  },
  {
    id: uuidv4(),
    title: 'Bayti',
    description:
      'Full-stack real estate platform with an ERP-style admin system for managing properties, users, bookings, and content.',
    image: '/projects/bayti.png',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Prisma',
      'PostgreSQL',
      'Motion',
    ],
    links: {
      github: 'https://github.com/Ahmed-HA-RE/bayti',
      live: 'https://bayti.ahmedrehandev.net',
    },
  },
  {
    id: uuidv4(),
    title: 'Academiq',
    description:
      'LMS SaaS platform for creating, managing, and monetizing online courses with structured learning experiences.',
    image: '/projects/academiq.png',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Prisma',
      'PostgreSQL',
      'Stripe',
    ],
    links: {
      github: 'https://github.com/Ahmed-HA-RE/academiq',
      live: 'https://academiq.ahmedrehandev.net',
    },
  },
  {
    id: uuidv4(),
    title: 'DevNest',
    description:
      'Full-stack SaaS knowledge hub for developers to store, organize, and search snippets, prompts, notes, commands, and files.',
    image: '/projects/devnest.png',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'PostgreSQL',
      'Stripe',
      'Claude',
    ],
    links: {
      github: 'https://github.com/Ahmed-HA-RE/devnest',
      live: 'https://devnest.ahmedrehandev.net',
    },
  },
  {
    id: uuidv4(),
    title: 'Weavy',
    description:
      'Full-stack social media platform with user profiles, content sharing, and real-time interactions.',
    image: '/projects/weavy.png',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Prisma',
      'PostgreSQL',
    ],
    links: {
      github: 'https://github.com/Ahmed-HA-RE/weavy',
      live: 'https://weavy.ahmedrehandev.net',
    },
  },
  {
    id: uuidv4(),
    title: 'Bayro',
    description:
      'E-commerce platform for managing products, orders, payments, and customer workflows with a secure admin system.',
    image: '/projects/bayro.png',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Prisma',
      'PostgreSQL',
      'Stripe',
    ],
    links: {
      github: 'https://github.com/Ahmed-HA-RE/bayro',
      live: 'https://bayro.ahmedrehandev.net',
    },
  },
];
