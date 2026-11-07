import React, { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => setVisible(y > 700));

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#home"
          aria-label="Back to top"
          className="fixed right-5 bottom-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-900/80 text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.25)] backdrop-blur-md hover:bg-cyan-400 hover:text-slate-950 sm:right-8 sm:bottom-8"
          initial={{ opacity: 0, scale: 0.4, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.4, y: 30 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <ArrowUp size={20} />
        </motion.a>
      )}
    </AnimatePresence>
  );
};
