import BootStrap from '@/components/technologies/BootStrap';
import CSS from '@/components/technologies/CSS';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import ReactIcon from '@/components/technologies/ReactIcon';
import NextJs from '@/components/technologies/NextJs';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'Akai Space',
    position: 'Front-End Developer Intern',
    location: 'New Delhi',
    image: '/company/akai.png',
    description: [
      'Led the end-to-end design and development of the official Akai Space website, transforming the company\'s online presence.',
      'Collaborated with the Akai Space team to understand business needs and translate them into a modern, user-friendly website.',
    ],
    startDate: 'January 2025',
    endDate: 'May 2025',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'HTML',
        href: 'https://html.com/',
        icon: <Html />,
      },
      {
        name: 'CSS',
        href: 'https://css.com/',
        icon: <CSS />,
      },
    ],
    website: 'https://www.akaispace.xyz',
  },
  {
    isCurrent: false,
    company: 'Climate Resilient Observing Systems Promotion Council (CROPC)',
    position: 'Front-End Developer Intern',
    location: 'New Delhi',
    image: '/company/cropc.png',
    description: [
      'Led the front-end development of the CROPC website, significantly enhancing user interface design and improving site responsiveness with React.js and Bootstrap.',
      'Engineered seamless API integrations for real-time weather data and news updates, leveraging Axios and React to provide dynamic content to users.',
    ],
    startDate: 'August 2024',
    endDate: 'September 2024',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'BootStrap',
        href: 'https://getbootstrap.com/',
        icon: <BootStrap />,
      },
      {
        name: 'HTML',
        href: 'https://html.com/',
        icon: <Html />,
      },
      {
        name: 'CSS',
        href: 'https://css.com/',
        icon: <CSS />,
      },
    ],
    website: 'https://www.cropc.org',
  },
  {
    isCurrent: false,
    company: 'EaseMyRoom',
    position: 'Front End Developer Intern',
    location: 'New Delhi',
    image: '/company/easemyroom.png',
    description: [
      'Spearheaded the front-end development of the EaseMyRoom platform, enhancing user interface design and optimizing page load speeds to ensure seamless customer experiences.',
      'Developed dynamic, responsive layouts using React.js and Bootstrap, improving the platform\'s accessibility and user engagement across multiple devices.',
    ],
    startDate: 'May 2023',
    endDate: 'August 2023',
    website: 'https://easemyroom.daapen.com',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'BootStrap',
        href: 'https://getbootstrap.com/',
        icon: <BootStrap />,
      },
      {
        name: 'HTML',
        href: 'https://html.com/',
        icon: <Html />,
      },
      {
        name: 'CSS',
        href: 'https://css.com/',
        icon: <CSS />,
      },
    ],
  },
];
