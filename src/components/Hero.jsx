import { motion, useReducedMotion } from 'framer-motion';
import GlowButton from './ui/GlowButton';

const ease = [0.22, 1, 0.36, 1];
const rise = (delay) => ({
  initial: { opacity: 0, y: 34 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative z-10 flex min-h-[min(100svh,900px)] items-center px-[18px] pb-14 pt-[120px] sm:px-8 sm:pt-[150px] lg:px-16 lg:pt-[190px]">
      {/* 3000px studio banner — never an <img>. A masked, GPU-composited
          background layer that only ever decodes the 1800px variant. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={'absolute -inset-[6%] bg-cover bg-[30%_50%] will-change-transform ' + (reduce ? '' : 'animate-breathe')}
          style={{
            backgroundImage: "url('/assets/vesper-banner-2x1.jpg')",
            opacity: 'calc(0.40 * var(--glow))',
            filter: 'saturate(1.5) contrast(1.05) blur(2px)',
            maskImage: 'radial-gradient(118% 84% at 50% 34%, #000 0%, #000 26%, rgba(0,0,0,.35) 58%, transparent 82%)',
            WebkitMaskImage: 'radial-gradient(118% 84% at 50% 34%, #000 0%, #000 26%, rgba(0,0,0,.35) 58%, transparent 82%)',
            transform: 'translateZ(0)',
          }}
        />
        <div
          className={'absolute inset-0 will-change-transform ' + (reduce ? '' : 'animate-breathe-slow')}
          style={{ background: 'radial-gradient(70% 55% at 42% 46%, rgba(255,168,70,.20) 0%, rgba(255,92,120,.10) 45%, transparent 78%)' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.62)_0%,rgba(0,0,0,.3)_34%,rgba(0,0,0,.78)_82%,#000_100%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1180px] flex-col gap-6 sm:gap-8">
        <motion.div
          {...rise(0)}
          className="inline-flex select-none items-center gap-2.5 self-start rounded-pill border border-white/[0.16] bg-white/[0.07] py-[7px] pl-2.5 pr-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-bone/90"
        >
          <span className="h-[7px] w-[7px] animate-blink rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />
          Indie app studio
        </motion.div>

        <motion.h1
          {...rise(0.08)}
          className="m-0 max-w-[15ch] text-balance font-display text-[clamp(38px,8.2vw,92px)] font-semibold leading-[0.98] tracking-[-0.035em]"
        >
          Building{' '}
          <span className="bg-vesper-text bg-clip-text text-transparent">intelligent apps</span>{' '}
          and games.
        </motion.h1>

        <motion.p {...rise(0.16)} className="m-0 max-w-[52ch] text-pretty text-[15px] leading-relaxed text-bone-dim sm:text-lg">
          An independent studio building for Android. SnapTrack AI is live on Google Play, and
          Bird Clash lands in two days.
        </motion.p>

        <motion.div {...rise(0.24)} className="flex flex-wrap gap-3">
          <GlowButton href="#snaptrack">
            SnapTrack AI <span className="text-[17px] leading-none">&rarr;</span>
          </GlowButton>
          <motion.a
            href="#birdclash"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.985 }}
            className="inline-flex min-h-[58px] items-center justify-center gap-2.5 rounded-pill border border-white/[0.12] bg-white/[0.045] px-[26px] font-display text-base font-semibold tracking-[-0.01em] transition-colors hover:bg-white/[0.09]"
          >
            Bird Clash
            <span className="rounded-md bg-white/[0.08] px-2 py-1 font-mono text-[10px] tracking-[0.12em] text-bone-dim">2 DAYS</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
