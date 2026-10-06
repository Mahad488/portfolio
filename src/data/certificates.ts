export interface Certificate {
  id: string;
  title: string;
  platform: string;
  issueDate: string;
  imageUrl: string;
  credentialUrl: string;
}

export const certificatesData: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Introduction to Web Development',
    platform: 'Coursera',
    issueDate: 'July 2026',
    imageUrl: '/Certificates/Introduction to Web Development.pdf',
    credentialUrl: '/Certificates/Introduction to Web Development.pdf',
  },
  {
    id: 'cert-2',
    title: 'Introduction to Programming With C#',
    platform: 'Coursera',
    issueDate: 'August 2026',
    imageUrl: '/Certificates/Introduction to Programming With C#.pdf',
    credentialUrl: '/Certificates/Introduction to Programming With C#.pdf',
  },
  {
    id: 'cert-3',
    title: 'Foundations of Coding Full-Stack',
    platform: 'Coursera',
    issueDate: 'September 2026',
    imageUrl: '/Certificates/Foundations of Coding Full-Stack.pdf',
    credentialUrl: '/Certificates/Foundations of Coding Full-Stack.pdf',
  },
  {
    id: 'cert-4',
    title: 'Blazor for Front-End Development',
    platform: 'Coursera',
    issueDate: 'October 2026',
    imageUrl: '/Certificates/Blazor for Front-End Development.pdf',
    credentialUrl: '/Certificates/Blazor for Front-End Development.pdf',
  },
  {
    id: 'cert-5',
    title: 'DecodeLabs Internship Certificate',
    platform: 'DecodeLabs',
    issueDate: 'July 2024',
    imageUrl: '/Certificates/DecodeLabs Internship Certificate_260724094628.pdf',
    credentialUrl: '/Certificates/DecodeLabs Internship Certificate_260724094628.pdf',
  },
];