import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, BadgeCheck, Calendar } from 'lucide-react';
import { certificatesData } from '../data/certificates';
import { SectionHeading } from './ui/SectionHeading';
import { SpotlightCard } from './ui/SpotlightCard';
import { Reveal } from './ui/Reveal';

export const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Certificates"
          title="Always"
          highlight="learning"
          subtitle="Courses and credentials that sharpened my skills along the way."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificatesData.map((cert, i) => (
            <Reveal key={cert.id} delay={(i % 3) * 0.12} from={i % 2 === 0 ? 'left' : 'right'} className="h-full">
              <SpotlightCard
                tilt={8}
                className="group h-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
              >
                <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="relative flex h-full flex-col p-6">
                  {/* animated top accent line */}
                  <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 transition-transform duration-500 group-hover:scale-x-100" />
                  {/* shine sweep */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                  <div className="mb-5 flex items-start justify-between">
                    <motion.div
                      className="rounded-2xl border border-cyan-500/30 bg-linear-to-br from-cyan-500/20 to-purple-500/20 p-3.5 text-cyan-300"
                      whileHover={{ rotate: [0, -12, 12, -6, 0], scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Award size={28} />
                    </motion.div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                      <BadgeCheck size={12} /> Verified
                    </span>
                  </div>

                  <h3 className="mb-2 text-lg leading-snug font-semibold text-slate-100 transition-colors group-hover:text-cyan-300">
                    {cert.title}
                  </h3>
                  <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-400">
                    <span className="font-medium text-slate-300">{cert.platform}</span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={13} /> {cert.issueDate}
                    </span>
                  </div>

                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-cyan-300">
                    View Credential
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </a>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
