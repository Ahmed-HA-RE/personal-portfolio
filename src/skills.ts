import { TanStackLogo } from '@/components/icons/tanstack';
import { FaCss3Alt, FaGithub, FaHtml5, FaNodeJs } from 'react-icons/fa';
import {
  BsJavascript,
  BsTypescript,
  BsOpenai,
  BsGit,
  BsClaude,
} from 'react-icons/bs';
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

export type Skill = {
  id: string;
  name: string;
  icon: IconType;
  boxShadow: string;
  color?: string;
};

export const SKILLS: Skill[] = [
  {
    id: '1',
    name: 'HTML',
    icon: FaHtml5,
    boxShadow: 'shadow-[0px_4px_5px_0px_#e34f26]',
    color: 'text-[#e34c26]',
  },
  {
    id: '2',
    name: 'CSS',
    icon: FaCss3Alt,
    boxShadow: 'shadow-[0px_4px_5px_0px_#264de4]',
    color: 'text-[#264de4]',
  },
  {
    id: '3',
    name: 'JavaScript',
    icon: BsJavascript,
    boxShadow: 'shadow-[0px_4px_5px_0px_#f0db4f]',
    color: 'text-[#f0db4f]',
  },
  {
    id: '4',
    name: 'TypeScript',
    icon: BsTypescript,
    boxShadow: 'shadow-[0px_4px_5px_0px_#007acc]',
    color: 'text-[#007acc]',
  },
  {
    id: '5',
    name: 'ChatGPT',
    icon: BsOpenai,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#000] dark:shadow-[0px_4px_5px_0px_#ffffff]',
    color: 'text-black dark:text-white',
  },
  {
    id: '6',
    name: 'Cursor',
    icon: CursorLogo,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#26251e] dark:shadow-[0px_4px_5px_0px_#ffffff]',
    color: 'text-[#26251e] dark:text-[#ffffff]',
  },
  {
    id: '8',
    name: 'Express',
    icon: SiExpress,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#000] dark:shadow-[0px_4px_5px_0px_#ffffff]',
    color: 'text-black dark:text-white',
  },
  {
    id: '9',
    name: 'Figma',
    icon: FigmaLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#f24e1e]',
  },
  {
    id: '10',
    name: 'Motion',
    icon: MotionLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#ff9f1c]',
  },
  {
    id: '11',
    name: 'Git',
    icon: BsGit,
    boxShadow: 'shadow-[0px_4px_5px_0px_#f1502f]',
    color: 'text-[#f1502f]',
  },
  {
    id: '12',
    name: 'GitHub Copilot',
    icon: SiGithubcopilot,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#211f1f] dark:shadow-[0px_4px_5px_0px_#fff]',
    color: 'text-black dark:text-white',
  },
  {
    id: '13',
    name: 'GitHub',
    icon: FaGithub,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#211f1f] dark:shadow-[0px_4px_5px_0px_#fff]',
    color: 'text-black dark:text-white',
  },
  {
    id: '14',
    name: 'Better Auth',
    icon: SiBetterauth,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#000] dark:shadow-[0px_4px_5px_0px_#ffffff]',
    color: 'text-black dark:text-white',
  },
  {
    id: '15',
    name: 'Claude',
    icon: BsClaude,
    boxShadow: 'shadow-[0px_4px_5px_0px_#c15f3c]',
    color: 'text-[#c15f3c]',
  },
  {
    id: '16',
    name: 'MongoDB',
    icon: SiMongodb,
    boxShadow: 'shadow-[0px_4px_5px_0px_#023430]',
    color: 'text-[#023430]',
  },
  {
    id: '17',
    name: 'Mongoose',
    icon: SiMongoose,
    boxShadow: 'shadow-[0px_4px_5px_0px_#880000]',
    color: 'text-[#880000]',
  },
  {
    id: '18',
    name: 'Neon',
    icon: NeonLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#34d59a]',
  },
  {
    id: '19',
    name: 'Netlify',
    icon: NetlifyLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#05bdba]',
  },
  {
    id: '20',
    name: 'Next.js',
    icon: SiNextdotjs,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#171717] dark:shadow-[0px_4px_5px_0px_#ffffff]',
    color: 'text-black dark:text-white',
  },
  {
    id: '21',
    name: 'Node.js',
    icon: FaNodeJs,
    boxShadow: 'shadow-[0px_4px_5px_0px_#68a063]',
    color: 'text-[#68a063]',
  },
  {
    id: '22',
    name: 'Nuqs',
    icon: NuqsLogo,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#171717] dark:shadow-[0px_4px_5px_0px_#ffffff]',
  },
  {
    id: '23',
    name: 'PostgreSQL',
    icon: PostgresqlLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#336791]',
  },
  {
    id: '24',
    name: 'Postman',
    icon: PostmanLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#f26522]',
  },
  {
    id: '25',
    name: 'Prisma',
    icon: SiPrisma,
    boxShadow: 'shadow-[0px_4px_5px_0px_#5a67d8]',
    color: 'text-[#5a67d8]',
  },

  {
    id: '26',
    name: 'React',
    icon: FaReact,
    boxShadow: 'shadow-[0px_4px_5px_0px_#58c4dc]',
    color: 'text-[#58c4dc]',
  },
  {
    id: '27',
    name: 'Redis',
    icon: RedisLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#a32422]',
  },
  {
    id: '28',
    name: 'Shadcn UI',
    icon: SiShadcnui,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#000] dark:shadow-[0px_4px_5px_0px_#ffffff]',
    color: 'text-black dark:text-white',
  },
  {
    id: '29',
    name: 'Stripe',
    icon: FaStripeS,
    boxShadow: 'shadow-[0px_4px_5px_0px_#635bff]',
    color: 'text-[#635bff]',
  },
  {
    id: '30',
    name: 'Tailwind',
    icon: SiTailwindcss,
    boxShadow: 'shadow-[0px_4px_5px_0px_#38bdf8]',
    color: 'text-sky-400',
  },
  {
    id: '31',
    name: 'TanStack',
    icon: TanStackLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#ff8646]',
  },
  {
    id: '32',
    name: 'Cloudinary',
    icon: SiCloudinary,
    boxShadow: 'shadow-[0px_4px_5px_0px_#3448c5]',
    color: 'text-[#3448c5]',
  },
  {
    id: '33',
    name: 'Vercel',
    icon: SiVercel,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#000] dark:shadow-[0px_4px_5px_0px_#ffffff]',
    color: 'text-black dark:text-white',
  },
  {
    id: '34',
    name: 'VS Code',
    icon: VscodeLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#0098ff]',
  },
  {
    id: '35',
    name: 'Zod',
    icon: ZodLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#3e8ed0]',
  },
  {
    id: '36',
    name: 'Vite',
    icon: ViteLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#863BFF]',
  },
  {
    id: '37',
    name: 'Resend',
    icon: ResendIconLogo,
    boxShadow:
      'shadow-[0px_4px_5px_0px_#000] dark:shadow-[0px_4px_5px_0px_#ffffff]',
    color: 'text-black dark:text-white',
  },
  {
    id: '38',
    name: 'Upstash',
    icon: UpstashLogo,
    boxShadow: 'shadow-[0px_4px_5px_0px_#34d399]',
    color: 'text-emerald-400',
  },
];
