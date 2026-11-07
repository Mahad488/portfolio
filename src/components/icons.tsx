import React from 'react';
import type { SocialKind } from '../data/socials';

type IconProps = { className?: string };

export const GitHubLogo: React.FC<IconProps> = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={`${className} fill-current`}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.04.78 2.1v3.12c0 .31.2.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

export const LinkedInLogo: React.FC<IconProps> = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={`${className} fill-current`}>
    <path d="M6.94 8.5A1.5 1.5 0 1 1 6.94 5.5a1.5 1.5 0 0 1 0 3ZM5.5 9.75h2.88v8.75H5.5V9.75Zm4.75 0h2.76v1.2h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.43 1.9 3.43 4.38v4.65h-2.88v-4.36c0-1.04-.02-2.38-1.45-2.38-1.45 0-1.67 1.13-1.67 2.3v4.44H10.25V9.75Z" />
  </svg>
);

export const XLogo: React.FC<IconProps> = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={`${className} fill-current`}>
    <path d="M18.9 2h3.6l-7.86 8.98L22.8 22h-7.11l-5.56-8.16L3.42 22H-.18l8.42-9.62L.8 2h7.27l5.03 7.45L18.9 2Zm-1.26 18h1.97L7.1 3.9H5.05L17.64 20Z" />
  </svg>
);

export const SocialIcon: React.FC<IconProps & { kind: SocialKind }> = ({ kind, className }) => {
  if (kind === 'github') return <GitHubLogo className={className} />;
  if (kind === 'linkedin') return <LinkedInLogo className={className} />;
  return <XLogo className={className} />;
};
