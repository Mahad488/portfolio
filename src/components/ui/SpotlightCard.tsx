import React, { useRef } from 'react';
import { motion, useSpring, type HTMLMotionProps } from 'framer-motion';

interface SpotlightCardProps extends HTMLMotionProps<'div'> {
  /** Max tilt in degrees (0 disables 3D tilt). */
  tilt?: number;
}

/**
 * A card with a glowing border + soft light that follows the pointer,
 * and an optional 3D tilt on mouse devices.
 */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  tilt = 0,
  className = '',
  style,
  children,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 180, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 180, damping: 18 });

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
    if (tilt && e.pointerType === 'mouse') {
      rotateX.set((y / rect.height - 0.5) * -tilt);
      rotateY.set((x / rect.width - 0.5) * tilt);
    }
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000, ...style }}
      className={`spotlight ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
