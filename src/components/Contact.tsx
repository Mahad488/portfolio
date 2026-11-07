import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, Mail, MapPin, Phone, Send } from 'lucide-react';
import { EMAIL } from '../data/socials';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { Magnetic } from './ui/Magnetic';
import { SpotlightCard } from './ui/SpotlightCard';

const contactInfo = [
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: 'Phone', value: '+92 328 1903970', href: 'tel:+923281903970' },
  { icon: MapPin, label: 'Location', value: 'Pakistan' },
];

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(id);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading index="05" eyebrow="Contact" title="Let's build something" highlight="together" center />

        {/* CTA panel with a rotating gradient border */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl p-[2px]">
            <div className="conic-ring absolute top-1/2 left-1/2 aspect-square w-[150%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-70" />
            <div className="relative rounded-[calc(1.5rem-2px)] bg-slate-950/95 px-6 py-14 text-center backdrop-blur sm:px-12">
              <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
              <motion.div
                className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-blue-600 text-white shadow-lg shadow-cyan-500/40"
                animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Send size={28} />
              </motion.div>
              <p className="relative mx-auto max-w-xl text-lg text-slate-300">
                Have a project in mind, an opportunity, or just want to say hi? My inbox is always open — I'll get back
                to you as soon as I can.
              </p>

              <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
                <Magnetic>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-shadow hover:shadow-cyan-400/60"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <Mail size={18} className="relative" />
                    <span className="relative">Say Hello</span>
                  </a>
                </Magnetic>
                <Magnetic>
                  <button
                    onClick={copyEmail}
                    className="inline-flex min-w-40 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-4 font-semibold text-slate-200 transition-colors hover:border-cyan-400/60 hover:text-cyan-300"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {copied ? (
                        <motion.span
                          key="copied"
                          className="inline-flex items-center gap-2 text-emerald-300"
                          initial={{ y: 12, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -12, opacity: 0 }}
                        >
                          <Check size={18} /> Copied!
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          className="inline-flex items-center gap-2"
                          initial={{ y: 12, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -12, opacity: 0 }}
                        >
                          <Copy size={18} /> Copy Email
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contactInfo.map(({ icon: Icon, label, value, href }, i) => {
            const body = (
              <>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
                  <Icon size={20} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs tracking-wide text-slate-500 uppercase">{label}</p>
                  <p className="mt-1 text-sm font-medium break-all text-slate-200">{value}</p>
                </div>
              </>
            );
            const cls =
              'group flex h-full min-w-0 items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur transition-colors hover:border-cyan-500/40';
            return (
              <Reveal key={label} delay={0.1 * i + 0.1}>
                <SpotlightCard tilt={8} className="h-full rounded-2xl">
                  {href ? (
                    <a href={href} className={cls}>
                      {body}
                    </a>
                  ) : (
                    <div className={cls}>{body}</div>
                  )}
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
