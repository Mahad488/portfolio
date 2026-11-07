export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  /** Screenshot path (e.g. /images/smart-city.png in /public). If missing, an animated preview is shown. */
  image?: string;
  /** Style of the animated preview shown when there is no screenshot. */
  preview?: 'map' | 'shop';
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
    preview: 'map',
    liveUrl: 'https://smart-city-citizen-portel-a37g.vercel.app/',
    githubUrl: 'https://github.com/Mahad488/Smart-City-Citizen-portel.git',
    featured: true,
  },
  {
    id: 'ecommerce',
    title: 'Full-Stack E-Commerce',
    description: 'Modern storefront featuring full shopping cart state, secure payment integration, and relational DB inventory.',
    techStack: ['React', 'Node.js', 'MySQL', 'Tailwind CSS'],
    preview: 'shop',
    githubUrl: 'https://github.com/Mahad488/E-Commerce-Website.git',
  },
];
