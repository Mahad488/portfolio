import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Muhammad Mahad Rafiq
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
                {link.name}
              </a>
            ))}
            <a
              href="/Cv/9151a1a6-7633-4d26-a6af-e2873064a58d.docx(1).pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 transition-all"
            >
              <Download size={14} /> Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 font-medium py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Cv/9151a1a6-7633-4d26-a6af-e2873064a58d.docx(1).pdf"
            download
            className="w-full mt-2 inline-flex justify-center items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500 text-slate-950"
          >
            <Download size={14} /> Download CV
          </a>
        </div>
      )}
    </nav>
  );
};