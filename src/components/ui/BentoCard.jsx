import { motion, useReducedMotion } from 'framer-motion';

/** A bento tile: 1px translucent hairline, lifts on hover/tap. */
export default function BentoCard({ className = '', lift = true, children, ...rest }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      whileHover={reduce || !lift ? undefined : { y: -5 }}
      whileTap={reduce || !lift ? undefined : { y: -2 }}
      transition={{ type: 'spring', stiffness: 320, damping: 30 }}
      className={'glass overflow-hidden rounded-bento transition-colors duration-500 ' + className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Image tile — landscape screenshot inside a glowing bento frame. */
export function ShotCard({ src, alt, className = '', imgClass = 'h-auto w-full', edge = 'hover:border-vesper-amber/45' }) {
  return (
    <BentoCard className={edge + ' ' + className}>
      <img src={src} alt={alt} loading="lazy" decoding="async" className={imgClass} />
    </BentoCard>
  );
}
