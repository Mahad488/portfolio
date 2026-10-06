import React from 'react';
import { certificatesData } from '../data/certificates';
import { Award, ExternalLink } from 'lucide-react';

export const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-100 mb-12 border-l-4 border-cyan-500 pl-4">
          Certificates & Credentials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-slate-700 transition-all">
              <div className="p-4 bg-cyan-950/50 text-cyan-400 rounded-xl border border-cyan-800/40">
                <Award size={32} />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="font-semibold text-slate-200">{cert.title}</h3>
                <p className="text-xs text-slate-400">{cert.platform} • {cert.issueDate}</p>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:underline pt-1"
                >
                  View Credential <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};