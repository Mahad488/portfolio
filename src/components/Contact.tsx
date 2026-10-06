import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'muhammadmahad2021@gmail.com', href: 'mailto:muhammadmahad2021@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+92 328 1903970', href: 'tel:+923281903970' },
    { icon: MapPin, label: 'Location', value: 'Pakistan', href: '#' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-8 border-l-4 border-cyan-500 pl-4 text-center md:text-left">
          Contact Information
        </h2>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 grid gap-6 md:grid-cols-3">
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex min-w-0 items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4 hover:border-cyan-500/40 transition-all"
            >
              <div className="shrink-0 p-2 rounded-lg bg-cyan-950/50 text-cyan-400 border border-cyan-800/40">
                <Icon size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
                <p className="mt-1 break-all text-sm font-medium text-slate-200">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};