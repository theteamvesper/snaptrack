import { BIRD_CLASH_STATS, BIRD_CLASH_SHOTS } from '../data/site';
import Reveal from './ui/Reveal';
import { ShotCard } from './ui/BentoCard';
import Carousel from './ui/Carousel';
import GlowButton from './ui/GlowButton';

export default function BirdClash() {
  return (
    <section id="birdclash" className="relative z-10 px-[18px] py-14 sm:px-8 sm:py-20 lg:px-16 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(124,92,255,.12),transparent_70%)]" />

      <div className="relative mx-auto flex max-w-[1180px] flex-col gap-6 sm:gap-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-[18px]">
            <div className="relative shrink-0">
              <img
                src="/assets/bc-icon-256.png" alt="Bird Clash" width="64" height="64" loading="lazy" decoding="async"
                className="h-14 w-14 rounded-[20px] border border-white/[0.14] object-cover sm:h-[68px] sm:w-[68px]"
              />
              <span
                className="pointer-events-none absolute -inset-2 -z-10 rounded-[26px] blur-lg"
                style={{ background: 'radial-gradient(circle, #FFB020, transparent 70%)', opacity: 'calc(0.7 * var(--glow))' }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C4B5FD]">02 / Game</span>
              <h2 className="m-0 font-display text-[clamp(30px,5.6vw,52px)] font-semibold leading-none tracking-[-0.035em]">Bird Clash</h2>
            </div>
          </div>
          <p className="m-0 max-w-[36ch] text-[15px] leading-relaxed text-bone-dim">
            Draw the bow. Lead the shot. Rule the sky. A physics archery game across 13 painted worlds.
          </p>
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden rounded-bento-lg border border-white/[0.13] shadow-bento-lg">
            <img
              src="/assets/bc-feature.jpg" alt="Bird Clash — draw, aim, clash" width="1024" height="500" loading="lazy" decoding="async"
              className="h-[clamp(200px,44vw,460px)] w-full object-cover object-[50%_45%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,4,12,.35)_0%,rgba(6,4,12,.15)_40%,rgba(6,4,12,.92)_100%)]" />

            <div className="absolute inset-0 flex flex-col justify-end p-[18px] sm:p-8">
              <div className="flex flex-wrap gap-2">
                {BIRD_CLASH_STATS.map((s) => (
                  <span key={s} className="rounded-pill border border-white/[0.12] bg-white/[0.07] px-3.5 py-2 text-[12.5px] text-bone/80 sm:py-2.5">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Phones swipe one row; everything from sm up keeps the two-up grids. */}
        <Reveal className="sm:hidden">
          <Carousel items={BIRD_CLASH_SHOTS} label="Bird Clash screenshots" edge="hover:border-vesper-gold/45" />
        </Reveal>

        <div className="hidden grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-3 sm:grid sm:gap-4">
          {BIRD_CLASH_SHOTS.slice(0, 2).map((s, i) => (
            <Reveal key={s.src} delay={i * 0.06} className="flex">
              <ShotCard {...s} className="w-full" edge="hover:border-vesper-gold/45" />
            </Reveal>
          ))}
        </div>

        <div className="hidden grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-3 sm:grid sm:gap-4">
          {BIRD_CLASH_SHOTS.slice(2).map((s, i) => (
            <Reveal key={s.src} delay={i * 0.06} className="flex">
              <ShotCard {...s} className="w-full" edge="hover:border-vesper-violet/45" />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="relative flex flex-wrap items-center justify-between gap-5 overflow-hidden rounded-bento-lg border border-white/[0.12] bg-[linear-gradient(140deg,rgba(124,92,255,.18),rgba(255,176,32,.12)_55%,rgba(255,255,255,.03))] p-5 shadow-bento-lg sm:gap-6 sm:p-11">
            <div
              className="pointer-events-none absolute -bottom-[70%] left-[20%] h-[160%] w-[60%] rounded-full"
              style={{ background: 'radial-gradient(circle, #A78BFA, transparent 62%)', opacity: 'calc(0.30 * var(--glow) * 1.4)' }}
            />
            <div className="relative flex min-w-[min(100%,260px)] flex-col gap-2">
              <h3 className="m-0 font-display text-[clamp(24px,4vw,36px)] font-semibold leading-[1.05] tracking-[-0.03em]">
                50 stages. 9 bows. One sky.
              </h3>
              <p className="m-0 text-[14.5px] text-bone-dim">Android · Google Play</p>
            </div>

            {/* Same pill as SnapTrack's, deliberately inert until the store listing is live. */}
            <GlowButton size="lg" className="relative w-full max-w-[420px] flex-1 basis-[300px]">
              <span className="flex flex-col items-start leading-tight">
                <span className="font-mono text-[10px] tracking-[0.2em] opacity-70">GET IT ON</span>
                <span>Google Play</span>
              </span>
              <span className="text-xl">&#8599;</span>
            </GlowButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
