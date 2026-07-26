import { motion } from 'framer-motion';
import { NAV } from '../data/site';

/** Floating glass pill. No store CTA here — download lives with its product. */
export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 top-3.5 z-50 flex justify-center px-3.5"
    >
      <nav className="frosted pointer-events-auto flex w-full max-w-[980px] items-center gap-3 rounded-pill px-5 py-2.5">
        <a href="#top" className="flex shrink-0 items-center gap-2.5">
          <img src="/assets/vesper-logo-256.png" alt="Team Vesper" width="26" height="26" className="h-[26px] w-[26px] rounded-lg object-cover" />
          <span className="font-display text-[15px] font-bold tracking-[-0.01em]">Vesper</span>
        </a>

        <div className="flex flex-1 items-center justify-end gap-3 overflow-hidden text-[clamp(12px,3vw,13.5px)] font-medium text-bone-dim sm:gap-[26px]">
          {/* About + Contact drop below 560px so the pill never clips a link. */}
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={'whitespace-nowrap transition-colors hover:text-bone' + (n.hideSm ? ' hidden min-[560px]:inline' : '')}
            >
              {n.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
