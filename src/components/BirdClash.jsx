import { BIRD_CLASH_STATS } from '../data/site';
import Reveal from './ui/Reveal';
import { ShotCard } from './ui/BentoCard';
import HoloBadge from './ui/HoloBadge';

/** Launching in 2 days — no download button anywhere in this section. */
export default function BirdClash({ countdown }) {
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
              className="h-[clamp(260px,44vw,460px)] w-full object-cover object-[50%_45%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,4,12,.35)_0%,rgba(6,4,12,.15)_40%,rgba(6,4,12,.92)_100%)]" />

            <div className="absolute inset-0 flex flex-col justify-between p-[18px] sm:p-8">
              <div className="flex justify-end">
                <HoloBadge>Coming soon</HoloBadge>
              </div>

              <div className="flex flex-wrap items-end justify-between gap-5">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-bone/55">Launching in</span>
                  <div className="flex items-end gap-2.5 sm:gap-[18px]">
                    <Unit value={countdown.days} label="DAYS" />
                    <Unit value={countdown.hours} label="HRS" />
                    <Unit value={countdown.mins} label="MIN" />
                    <Unit value={countdown.secs} label="SEC" accent />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {BIRD_CLASH_STATS.map((s) => (
                    <span key={s} className="rounded-pill border border-white/[0.12] bg-white/[0.07] px-3.5 py-2.5 text-[12.5px] text-bone/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-3 sm:gap-4">
          <Reveal className="flex">
            <ShotCard src="/assets/bc-1.jpg" alt="Bird Clash main menu" className="w-full" edge="hover:border-vesper-gold/45" />
          </Reveal>
          <Reveal delay={0.06} className="flex">
            <ShotCard src="/assets/bc-4.jpg" alt="Three ways to play — levels, practice, attack" className="w-full" edge="hover:border-vesper-gold/45" />
          </Reveal>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-3 sm:gap-4">
          <Reveal className="flex">
            <ShotCard src="/assets/bc-2.jpg" alt="13 stunning worlds" className="w-full" edge="hover:border-vesper-violet/45" />
          </Reveal>
          <Reveal delay={0.06} className="flex">
            <ShotCard src="/assets/bc-3.jpg" alt="9 legendary bows" className="w-full" edge="hover:border-vesper-violet/45" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Unit({ value, label, accent }) {
  return (
    <div className="flex min-w-[56px] flex-col items-center gap-0.5 rounded-2xl border border-white/[0.11] bg-white/[0.06] px-3 py-2.5">
      <span className={'font-display text-[clamp(22px,3.6vw,30px)] font-semibold leading-none tracking-[-0.02em] ' + (accent ? 'text-vesper-gold' : '')}>
        {value}
      </span>
      <span className="font-mono text-[9px] tracking-[0.14em] text-white/45">{label}</span>
    </div>
  );
}
