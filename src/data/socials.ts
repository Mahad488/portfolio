export type SocialKind = 'github' | 'linkedin' | 'x';

export interface Social {
  name: string;
  kind: SocialKind;
  href: string;
  handle: string;
}

export const socialsData: Social[] = [
  { name: 'GitHub', kind: 'github', href: 'https://github.com/Mahad488', handle: '@Mahad488' },
  {
    name: 'LinkedIn',
    kind: 'linkedin',
    href: 'https://www.linkedin.com/in/muhammad-mahad-rafiq-942295389/',
    handle: 'Mahad Rafiq',
  },
  { name: 'X / Twitter', kind: 'x', href: 'https://x.com/MuhammadMahadR2', handle: '@MuhammadMahadR2' },
];

export const CV_URL = '/cv/Muhammad-Mahad-Rafiq-CV.pdf';
export const EMAIL = 'muhammadmahad2021@gmail.com';
