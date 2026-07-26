import { motion, useReducedMotion } from 'framer-motion';

/**
 * Primary CTA: soft pulsing neon halo behind a gradient pill, plus a
 * travelling sheen. Halo scale/opacity only — never box-shadow — so the
 * pulse stays on the compositor.
 */
export default function GlowButton({ href, children, size = 'md', className = '', ...rest }) {
  const reduce = useReducedMotion();
  const sizes = {
    md: 'min-h-[58px] px-[30px] text-base',
    lg: 'min-h-[74px] px-8 text-base sm:text-lg md:text-xl',
    sm: 'min-h-[40px] px-[17px] text-[13px]',
  };

  return (
    <motion.a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={reduce ? undefined : { y: -2, scale: 1.015 }}
      whileTap={reduce ? undefined : { scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 400, damping: 26 }}
      className={
        'group relative inline-flex select-none items-center justify-center gap-2.5 overflow-hidden rounded-pill ' +
        'bg-vesper-grad font-display font-bold tracking-[-0.01em] text-[#0F0703] shadow-glow ' +
        sizes[size] + ' ' + className
      }
      {...rest}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-1.5 -z-10 rounded-pill bg-vesper-grad blur-2xl animate-pulse-glow"
        style={{ opacity: 'calc(0.8 * var(--glow))' }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-1/3 animate-sheen bg-gradient-to-r from-transparent via-white/50 to-transparent"
      />
      <span className="relative flex items-center gap-2.5">{children}</span>
    </motion.a>
  );
}
