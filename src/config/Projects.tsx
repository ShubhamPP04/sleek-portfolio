import CSS from '@/components/technologies/CSS';
import JavaScript from '@/components/technologies/JavaScript';
import NextJs from '@/components/technologies/NextJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Mind-It: AI-powered Notes with Web Search',
    description:
      'AI-powered notes application with real-time web search capabilities using OpenRouter API and multiple AI models',
    image: '/project/mind-it.png',
    link: 'https://mind-it.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/ShubhamPP04/mind-it',
    live: 'https://mind-it.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/mind-it',
    isWorking: false,
  },
  {
    title: 'DocCollect: Docs and Notes Platform',
    description:
      'Full-stack document management app with authentication, file management, and note-taking system',
    image: '/project/doccollect.png',
    link: 'https://nonu-doc.vercel.app',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/ShubhamPP04/DocuCollect',
    live: 'https://nonu-doc.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/doccollect',
    isWorking: false,
  },
  {
    title: 'CROPC Website',
    description:
      'Responsive website for Climate Resilient Observing Systems Promotion Council with weather APIs and Google Maps integration',
    image: '/project/cropc.png',
    link: 'https://www.cropc.org/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    live: 'https://www.cropc.org/',
    details: true,
    projectDetailsPageSlug: '/projects/cropc-website',
    isWorking: false,
  },
];