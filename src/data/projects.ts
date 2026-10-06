export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 'smart-city-gis',
    title: 'Enterprise Smart City GIS',
    description: 'An interactive operations dashboard featuring GIS heatmaps, real-time telemetry, and city infrastructure tracking.',
    techStack: ['React', 'TypeScript', 'Leaflet', 'Tailwind CSS', 'Node.js'],
    image: '/images/smart-city.png',
    liveUrl: 'https://smart-city-citizen-portel-a37g.vercel.app/',
    githubUrl: 'https://github.com/Mahad488/Smart-City-Citizen-portel.git',
    featured: true,
  },
  {
    id: 'ecommerce',
    title: 'Full-Stack E-Commerce',
    description: 'Modern storefront featuring full shopping cart state, secure payment integration, and relational DB inventory.',
    techStack: ['React', 'Node.js', 'MySQL', 'Tailwind CSS'],
    image: '/images/ecommerce.png',
    githubUrl: 'https://github.com/Mahad488/E-Commerce-Website.git',
  },
];