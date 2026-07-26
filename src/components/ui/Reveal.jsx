import { motion, useReducedMotion } from 'framer-motion';

/**
 * Scroll reveal. GPU-only properties (opacity + transform), fires once,
 * and degrades to "just visible" when the user prefers reduced motion.
 */
export default function Reveal({ as = 'div', delay = 0, y = 32, className = '', children, ...rest }) {
  const reduce = useReducedMotion();
  const M = motion[as] || motion.div;

  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px', amount: 0.05 }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'opacity, transform' }}
      {...rest}
    >
      {children}
    </M>
  );
}
