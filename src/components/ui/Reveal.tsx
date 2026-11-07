import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

type From = 'bottom' | 'top' | 'left' | 'right' | 'none';

interface RevealProps extends HTMLMotionProps<'div'> {
  delay?: number;
  from?: From;
  distance?: number;
  blur?: boolean;
}

const offsets = (from: From, d: number) => {
  switch (from) {
    case 'bottom':
      return { y: d };
    case 'top':
      return { y: -d };
    case 'left':
      return { x: -d };
    case 'right':
      return { x: d };
    default:
      return {};
  }
};

/** Fades + slides its children in the first time they scroll into view. */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  from = 'bottom',
  distance = 40,
  blur = true,
  ...rest
}) => (
  <motion.div
    initial={{ opacity: 0, ...offsets(from, distance), ...(blur ? { filter: 'blur(10px)' } : {}) }}
    whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    {...rest}
  >
    {children}
  </motion.div>
);
