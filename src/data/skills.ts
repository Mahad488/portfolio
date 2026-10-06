export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database / GIS' | 'Languages';
  level: number; // Percentage 0-100
}

export const skillsData: Skill[] = [
  { name: 'React', category: 'Frontend', level: 90 },
  { name: 'TypeScript', category: 'Frontend', level: 85 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 92 },
  { name: 'Node.js', category: 'Backend', level: 80 },
  { name: 'Express', category: 'Backend', level: 82 },
  { name: 'MySQL', category: 'Database / GIS', level: 85 },
  { name: 'Leaflet / GIS', category: 'Database / GIS', level: 88 },
  { name: 'Java', category: 'Languages', level: 78 },
  { name: 'Python', category: 'Languages', level: 75 },
];