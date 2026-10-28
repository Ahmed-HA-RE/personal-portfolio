import { TanStackLogo } from '@/components/icons/tanstack';
import { FaCss3Alt, FaGithub, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { BsJavascript, BsTypescript, BsGit, BsClaude } from 'react-icons/bs';
import { CursorLogo } from '@/components/icons/cursor-ai';
import { FigmaLogo } from '@/components/icons/figma';
import { MotionLogo } from '@/components/icons/motion';
import {
  SiExpress,
  SiGithubcopilot,
  SiBetterauth,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiPrisma,
  SiShadcnui,
  SiTailwindcss,
  SiCloudinary,
  SiVercel,
} from 'react-icons/si';
import { NeonLogo } from '@/components/icons/neon';
import { NetlifyLogo } from '@/components/icons/netlify';
import { NuqsLogo } from '@/components/icons/nuqs';
import { PostgresqlLogo } from '@/components/icons/postgresql';
import { PostmanLogo } from '@/components/icons/postman';
import { FaReact, FaStripeS } from 'react-icons/fa6';
import { UpstashLogo } from '@/components/icons/upstash';
import { RedisLogo } from '@/components/icons/redis';
import { VscodeLogo } from '@/components/icons/vscode';
import { ZodLogo } from '@/components/icons/zod';
import { ViteLogo } from '@/components/icons/vite';
import { ResendIconLogo } from '@/components/icons/resend-Icon';
import type { IconType } from 'react-icons/lib';
import AwsLightLogo from './components/icons/awsLight';
import AwsDarkLogo from './components/icons/awsDark';
import NestJsLogo from './components/icons/nestjs';
import JestLogo from './components/icons/jest';
import { v4 as uuidv4 } from 'uuid';

export type Skill = {
  id: string;
  name: string;
  icon: IconType;
  boxShadow: string;
  color?: string;
  themeMode?: string;
};

export const SKILLS: Skill[] = [
  {
    id: uuidv4(),
    name: 'HTML',
    icon: FaHtml5,
    boxShadow: 'shadow-[0px_4px_5px_0px_#e34f26]',
    color: 'text-[#e34c26]',
  },
  {
    id: uuidv4(),
    name: 'CSS',
    icon: FaCss3Alt,
    boxShadow: 'shadow-[0px_4px_5px_0px_#264de4]',
    color: 'text-[#264de4]',
  },
  {
    id: uuidv4(),
    name: 'JavaScript',
    icon: BsJavascript,
    boxShadow: 'shadow-[0px_4px_5px_0px_#f0db4f]',
    color: 'text-[#f0db4f]',
  },
  {
    id: uuidv4(),
    name: 'TypeScript',
    icon: BsTypescript,
    boxShadow: 'shadow-[0px_4px_5px_0px_#007acc]',
    color: 'text-[#007acc]',
  },
  {
    id: uuidv4(),
    name: 'Cursor',
    icon: CursorLogo,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#26251e] dark:shadow-[0px_4px_5px_0px_#ffffff]',
    color: 'text-[#26251e] dark:text-[#ffffff]',
  },
  {
    id: uuidv4(),
    name: 'Express',
    icon: SiExpress,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#000] dark:shadow-[0px_4px_5px_0px_#ffffff]',
    color: 'text-black dark:text-white',
  },
  {
    id: uuidv4(),
    name: 'Figma',
    icon: FigmaLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#f24e1e]',
  },
  {
    id: uuidv4(),
    name: 'Motion',
    icon: MotionLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#ff9f1c]',
  },
  {
    id: uuidv4(),
    name: 'Git',
    icon: BsGit,
    boxShadow: 'shadow-[0px_4px_5px_0px_#f1502f]',
    color: 'text-[#f1502f]',
  },
  {
    id: uuidv4(),
    name: 'GitHub Copilot',
    icon: SiGithubcopilot,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#211f1f] dark:shadow-[0px_4px_5px_0px_#fff]',
    color: 'text-black dark:text-white',
  },
  {
    id: uuidv4(),
    name: 'GitHub',
    icon: FaGithub,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#211f1f] dark:shadow-[0px_4px_5px_0px_#fff]',
    color: 'text-black dark:text-white',
  },
  {
    id: uuidv4(),
    name: 'Better Auth',
    icon: SiBetterauth,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#000] dark:shadow-[0px_4px_5px_0px_#ffffff]',
    color: 'text-black dark:text-white',
  },
  {
    id: uuidv4(),
    name: 'Claude',
    icon: BsClaude,
    boxShadow: 'shadow-[0px_4px_5px_0px_#c15f3c]',
    color: 'text-[#c15f3c]',
  },
  {
    id: uuidv4(),
    name: 'MongoDB',
    icon: SiMongodb,
    boxShadow: 'shadow-[0px_4px_5px_0px_#023430]',
    color: 'text-[#023430]',
  },
  {
    id: uuidv4(),
    name: 'Mongoose',
    icon: SiMongoose,
    boxShadow: 'shadow-[0px_4px_5px_0px_#880000]',
    color: 'text-[#880000]',
  },
  {
    id: uuidv4(),
    name: 'Neon',
    icon: NeonLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#34d59a]',
  },
  {
    id: uuidv4(),
    name: 'Netlify',
    icon: NetlifyLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#05bdba]',
  },
  {
    id: uuidv4(),
    name: 'Next.js',
    icon: SiNextdotjs,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#171717] dark:shadow-[0px_4px_5px_0px_#ffffff]',
    color: 'text-black dark:text-white',
  },
  {
    id: uuidv4(),
    name: 'Node.js',
    icon: FaNodeJs,
    boxShadow: 'shadow-[0px_4px_5px_0px_#68a063]',
    color: 'text-[#68a063]',
  },
  {
    id: uuidv4(),
    name: 'Nuqs',
    icon: NuqsLogo,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#171717] dark:shadow-[0px_4px_5px_0px_#ffffff]',
  },
  {
    id: uuidv4(),
    name: 'PostgreSQL',
    icon: PostgresqlLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#336791]',
  },
  {
    id: uuidv4(),
    name: 'Postman',
    icon: PostmanLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#f26522]',
  },
  {
    id: uuidv4(),
    name: 'Prisma',
    icon: SiPrisma,
    boxShadow: 'shadow-[0px_4px_5px_0px_#5a67d8]',
    color: 'text-[#5a67d8]',
  },

  {
    id: uuidv4(),
    name: 'React',
    icon: FaReact,
    boxShadow: 'shadow-[0px_4px_5px_0px_#58c4dc]',
    color: 'text-[#58c4dc]',
  },
  {
    id: uuidv4(),
    name: 'Redis',
    icon: RedisLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#a32422]',
  },
  {
    id: uuidv4(),
    name: 'Shadcn UI',
    icon: SiShadcnui,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#000] dark:shadow-[0px_4px_5px_0px_#ffffff]',
    color: 'text-black dark:text-white',
  },
  {
    id: uuidv4(),
    name: 'Stripe',
    icon: FaStripeS,
    boxShadow: 'shadow-[0px_4px_5px_0px_#635bff]',
    color: 'text-[#635bff]',
  },
  {
    id: uuidv4(),
    name: 'Tailwind',
    icon: SiTailwindcss,
    boxShadow: 'shadow-[0px_4px_5px_0px_#38bdf8]',
    color: 'text-sky-400',
  },
  {
    id: uuidv4(),
    name: 'TanStack',
    icon: TanStackLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#ff8646]',
  },
  {
    id: uuidv4(),
    name: 'Cloudinary',
    icon: SiCloudinary,
    boxShadow: 'shadow-[0px_4px_5px_0px_#3448c5]',
    color: 'text-[#3448c5]',
  },
  {
    id: uuidv4(),
    name: 'Vercel',
    icon: SiVercel,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#000] dark:shadow-[0px_4px_5px_0px_#ffffff]',
    color: 'text-black dark:text-white',
  },
  {
    id: uuidv4(),
    name: 'VS Code',
    icon: VscodeLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#0098ff]',
  },
  {
    id: uuidv4(),
    name: 'Zod',
    icon: ZodLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#3e8ed0]',
  },
  {
    id: uuidv4(),
    name: 'Vite',
    icon: ViteLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#863BFF]',
  },
  {
    id: uuidv4(),
    name: 'Resend',
    icon: ResendIconLogo,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#000] dark:shadow-[0px_4px_5px_0px_#ffffff]',
    color: 'text-black dark:text-white',
  },
  {
    id: uuidv4(),
    name: 'Upstash',
    icon: UpstashLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#34d399]',
    color: 'text-emerald-400',
  },
  {
    id: uuidv4(),
    name: 'AWS',
    icon: AwsLightLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#FF9900]',
    color: 'text-orange-400',
    themeMode: 'block dark:hidden',
  },
  {
    id: uuidv4(),
    name: 'AWS',
    icon: AwsDarkLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#FF9900]',
    color: 'text-orange-400',
    themeMode: 'hidden dark:block',
  },
  {
    id: uuidv4(),
    name: 'NestJS',
    icon: NestJsLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#a32422]',
    color: 'text-red-400',
  },
  {
    id: uuidv4(),
    name: 'Jest',
    icon: JestLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#99425b]',
  },
];
