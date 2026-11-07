import React, { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

/** Fixed animated backdrop: drifting gradient blobs, a faded grid and a glow that trails the cursor. */
export const Background: React.FC = () => {
  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const x = useSpring(mx, { stiffness: 90, damping: 20 });
  const y = useSpring(my, { stiffness: 90, damping: 20 });
  const glow = useMotionTemplate`radial-gradient(520px circle at ${x}px ${y}px, rgba(34, 211, 238, 0.09), transparent 65%)`;

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [mx, my]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-48 -left-40 h-[38rem] w-[38rem] rounded-full bg-cyan-500/20 blur-[130px] will-change-transform animate-blob" />
      <div className="absolute top-1/3 -right-48 h-[34rem] w-[34rem] rounded-full bg-blue-600/20 blur-[130px] will-change-transform animate-blob [animation-delay:-6s]" />
      <div className="absolute -bottom-56 left-1/4 h-[32rem] w-[32rem] rounded-full bg-purple-600/15 blur-[130px] will-change-transform animate-blob [animation-delay:-12s]" />
      <div className="absolute inset-0 bg-grid" />
      <motion.div className="absolute inset-0" style={{ background: glow }} />
    </div>
  );
};
