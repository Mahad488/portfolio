import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-800 bg-slate-950 text-center text-slate-500 text-sm">
      <p>© {new Date().getFullYear()} Muhammad Mahad Rafiq. All rights reserved.</p>
    </footer>
  );
};