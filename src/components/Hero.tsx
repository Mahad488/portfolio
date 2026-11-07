import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Atom, Database, MapPinned, Server, Sparkles } from 'lucide-react';
import profileImage from '../../photo/Image 2.jpeg';
import { socialsData } from '../data/socials';
import { projectsData } from '../data/projects';
import { certificatesData } from '../data/certificates';
import { skillsData } from '../data/skills';
import { SocialIcon } from './icons';
import { Magnetic } from './ui/Magnetic';
import { CountUp } from './ui/CountUp';

const ease = [0.22, 1, 0.36, 1] as const;
const roles = ['Full Stack Developer', 'GIS Enthusiast', 'React & TypeScript Engineer', 'Problem Solver'];

const Typewriter: React.FC<{ words: string[] }> = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let delay = deleting ? 40 : 85;
    let next: () => void = () =>
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));

    if (!deleting && text === word) {
      delay = 1700;
      next = () => setDeleting(true);
    } else if (deleting && text === '') {
      delay = 300;
      next = () => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      };
    }

    const id = window.setTimeout(next, delay);
    return () => window.clearTimeout(id);
  }, [text, deleting, index, words]);

  return (
    <span aria-hidden="true">
      <span className="text-gradient">{text}</span>
      <span className="ml-0.5 inline-block w-[3px] animate-blink bg-cyan-400 align-middle text-transparent">|</span>
    </span>
  );
};

const AnimatedName: React.FC<{ text: string; gradient?: boolean; startDelay: number }> = ({
  text,
  gradient,
  startDelay,
}) => (
  <span className="inline-block whitespace-nowrap">
    {text.split('').map((char, i) => (
      <span key={i} className="inline-block overflow-hidden pb-2 align-bottom">
        <motion.span
          className={`inline-block ${gradient ? 'text-gradient' : ''}`}
          initial={{ y: '110%', rotate: 12, opacity: 0 }}
          animate={{ y: '0%', rotate: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: startDelay + i * 0.035, ease }}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      </span>
    ))}
  </span>
);

const floatingBadges = [
  { icon: Atom, label: 'React', className: '-top-4 -left-6 sm:-left-12', delay: '0s', color: 'text-cyan-300' },
  { icon: Server, label: 'Node.js', className: 'top-1/3 -right-6 sm:-right-14', delay: '-1.5s', color: 'text-emerald-300' },
  { icon: MapPinned, label: 'GIS', className: '-bottom-5 left-4 sm:-left-8', delay: '-3s', color: 'text-pink-300' },
  { icon: Database, label: 'MySQL', className: '-bottom-3 -right-2 sm:right-6', delay: '-4.5s', color: 'text-amber-300' },
];

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  // Parallax: content drifts and fades as the hero scrolls away.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // 3D tilt on the photo.
  const rotateX = useSpring(0, { stiffness: 150, damping: 15 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 15 });
  const handlePhotoMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    rotateX.set(((e.clientY - rect.top) / rect.height - 0.5) * -18);
    rotateY.set(((e.clientX - rect.left) / rect.width - 0.5) * 18);
  };
  const resetPhoto = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const stats = [
    { value: skillsData.length, suffix: '+', label: 'Technologies' },
    { value: certificatesData.length, suffix: '', label: 'Certificates' },
    { value: projectsData.length, suffix: '', label: 'Featured Projects' },
  ];

  return (
    <section ref={sectionRef} id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Left column */}
        <motion.div className="space-y-7 lg:col-span-7" style={{ y: textY, opacity: fade }}>
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-300"
            initial={{ opacity: 0, y: -16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities
          </motion.div>

          <div>
            <motion.p
              className="mb-2 font-mono text-cyan-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
            >
              Hi there, I'm 👋
            </motion.p>
            <h1
              className="text-5xl leading-[1.05] font-bold tracking-tight text-white sm:text-7xl"
              aria-label="Muhammad Mahad Rafiq"
            >
              <span aria-hidden="true">
                <AnimatedName text="Muhammad Mahad" startDelay={0.25} />{' '}
                <AnimatedName text="Rafiq" gradient startDelay={0.25 + 14 * 0.035} />
              </span>
            </h1>
          </div>

          <motion.h2
            className="min-h-[2.5rem] text-2xl font-semibold text-slate-300 sm:text-3xl"
            aria-label={roles.join(', ')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Typewriter words={roles} />
          </motion.h2>

          <motion.p
            className="max-w-2xl text-lg leading-relaxed text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease }}
          >
            I craft full-stack web applications, spatial <span className="text-slate-200">GIS dashboards</span>, and
            scalable databases — focused on clean architecture, modern UX, and turning spatial data into products people
            love to use.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease }}
          >
            <Magnetic>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-[length:200%_100%] px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-[background-position,box-shadow] duration-500 hover:bg-right hover:shadow-cyan-400/50"
              >
                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Sparkles size={18} className="relative" />
                <span className="relative">View Projects</span>
                <ArrowRight size={18} className="relative transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-7 py-3.5 font-semibold text-slate-200 backdrop-blur transition-colors hover:border-cyan-400/60 hover:text-cyan-300"
              >
                Contact Me
              </a>
            </Magnetic>

            <div className="flex items-center gap-3 sm:ml-2">
              {socialsData.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/70 text-slate-400 backdrop-blur transition-colors hover:border-cyan-400/60 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 1.35 + i * 0.1 }}
                  whileHover={{ y: -4, rotate: -6 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SocialIcon kind={social.kind} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid max-w-lg grid-cols-3 gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5, ease }}
          >
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-cyan-400/40 pl-4">
                <CountUp to={s.value} suffix={s.suffix} className="font-display text-3xl font-bold text-white sm:text-4xl" />
                <p className="mt-1 text-xs tracking-wide text-slate-500 uppercase">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column: photo */}
        <motion.div
          className="flex justify-center lg:col-span-5"
          style={{ y: photoY }}
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
        >
          <motion.div
            ref={photoRef}
            onPointerMove={handlePhotoMove}
            onPointerLeave={resetPhoto}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            className="relative h-72 w-72 sm:h-96 sm:w-96"
          >
            {/* glow */}
            <div className="absolute -inset-8 animate-pulse rounded-[3rem] bg-linear-to-tr from-cyan-500/40 via-blue-600/30 to-purple-600/40 blur-3xl" />

            {/* spinning gradient border */}
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] p-[3px] shadow-2xl shadow-cyan-500/20">
              <div className="conic-ring absolute top-1/2 left-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow" />
              <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-3px)] bg-slate-900">
                <img
                  src={profileImage}
                  alt="Muhammad Mahad Rafiq"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* floating tech badges */}
            {floatingBadges.map(({ icon: Icon, label, className, delay, color }, i) => (
              <motion.div
                key={label}
                className={`absolute ${className}`}
                style={{ translateZ: 60 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 1.1 + i * 0.15 }}
              >
                <div
                  className="flex animate-float items-center gap-2 rounded-2xl border border-slate-700/80 bg-slate-900/85 px-3 py-2 text-sm font-semibold text-slate-200 shadow-xl backdrop-blur-md"
                  style={{ animationDelay: delay }}
                >
                  <Icon size={18} className={color} />
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block" style={{ opacity: fade }}>
        <motion.a
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-2 text-xs tracking-widest text-slate-500 uppercase transition-colors hover:text-cyan-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <span className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-600 pt-2">
            <span className="h-2 w-1 animate-scroll-wheel rounded-full bg-cyan-400" />
          </span>
          Scroll
        </motion.a>
      </motion.div>
    </section>
  );
};
