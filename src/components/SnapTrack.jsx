import { PLAY_URL, SNAPTRACK_TAGS, SNAPTRACK_SHOTS, SNAPTRACK_SHOTS_B } from '../data/site';
import Reveal from './ui/Reveal';
import BentoCard, { ShotCard } from './ui/BentoCard';
import GlowButton from './ui/GlowButton';

export default function SnapTrack() {
  return (
    <section id="snaptrack" className="relative z-10 px-[18px] py-14 sm:px-8 sm:py-20 lg:px-16 lg:py-32">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-6 sm:gap-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-[18px]">
            <div className="relative shrink-0">
              <img
                src="/assets/snaptrack-logo-256.png" alt="SnapTrack AI" width="64" height="64" loading="lazy" decoding="async"
                className="h-14 w-14 rounded-[20px] border border-white/[0.12] object-cover sm:h-[68px] sm:w-[68px]"
              />
              <span
                className="pointer-events-none absolute -inset-2 -z-10 rounded-[26px] blur-lg"
                style={{ background: 'radial-gradient(circle, var(--accent), transparent 70%)', opacity: 'calc(0.7 * var(--glow))' }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">01 / Product</span>
                <span className="inline-flex items-center gap-1.5 rounded-pill border border-vesper-mint/30 bg-vesper-mint/[0.12] px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-[#6EE7B7]">
                  <span className="h-1.5 w-1.5 animate-blink rounded-full bg-vesper-mint shadow-[0_0_10px_#34D399]" />
                  LIVE
                </span>
              </div>
              <h2 className="m-0 font-display text-[clamp(30px,5.6vw,52px)] font-semibold leading-none tracking-[-0.035em]">SnapTrack AI</h2>
            </div>
          </div>
          <p className="m-0 max-w-[36ch] text-[15px] leading-relaxed text-bone-dim">
            Point your camera at a meal. Calories, macros, hydration and streaks — logged before
            you finish chewing.
          </p>
        </Reveal>

        {/* Asymmetric row: wide hero shot + a stacked info column. */}
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Reveal className="flex min-w-[min(100%,560px)] flex-1 basis-[560px]">
            <ShotCard
              src="/assets/st-1.jpg"
              alt="SnapTrack AI — everything you need to eat smart"
              className="w-full rounded-bento-lg shadow-bento-lg"
              imgClass="w-full h-auto"
            />
          </Reveal>

          <div className="flex flex-1 basis-[300px] flex-col gap-3 sm:gap-4">
            <Reveal delay={0.06} className="flex flex-1">
              <BentoCard lift={false} className="flex w-full flex-col justify-center gap-3.5 rounded-bento-lg p-6 sm:p-[30px]">
                <span className="label">What it does</span>
                <div className="flex flex-wrap gap-2">
                  {SNAPTRACK_TAGS.map((t) => (
                    <span key={t} className="rounded-pill border border-white/[0.09] bg-white/[0.05] px-3.5 py-2 text-[12.5px] text-bone/80">
                      {t}
                    </span>
                  ))}
                </div>
              </BentoCard>
            </Reveal>
            <div className="flex gap-3 sm:gap-4">
              <Reveal delay={0.1} className="flex flex-1">
                <BentoCard lift={false} className="flex w-full flex-col gap-1.5 rounded-[24px] p-5">
                  <span className="font-display text-[26px] font-semibold tracking-[-0.03em] text-[var(--accent)]">&lt;3s</span>
                  <span className="label">Per scan</span>
                </BentoCard>
              </Reveal>
              <Reveal delay={0.14} className="flex flex-1">
                <BentoCard lift={false} className="flex w-full flex-col gap-1.5 rounded-[24px] p-5">
                  <span className="font-display text-[26px] font-semibold tracking-[-0.03em]">04</span>
                  <span className="label">Themes</span>
                </BentoCard>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-3 sm:gap-4">
          {SNAPTRACK_SHOTS.map((s, i) => (
            <Reveal key={s.src} delay={i * 0.06} className="flex">
              <ShotCard {...s} className="w-full" />
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-3 sm:gap-4">
          {SNAPTRACK_SHOTS_B.map((s, i) => (
            <Reveal key={s.src} delay={i * 0.06} className="flex">
              <ShotCard {...s} className="w-full" edge="hover:border-vesper-pink/45" />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="relative flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-bento-lg border border-white/[0.12] bg-[linear-gradient(140deg,rgba(255,138,31,.16),rgba(255,61,119,.10)_55%,rgba(255,255,255,.03))] p-6 shadow-bento-lg sm:p-11">
            <div
              className="pointer-events-none absolute -bottom-[70%] left-[20%] h-[160%] w-[60%] rounded-full"
              style={{ background: 'radial-gradient(circle, var(--accent), transparent 62%)', opacity: 'calc(0.28 * var(--glow) * 1.4)' }}
            />
            <div className="relative flex min-w-[min(100%,260px)] flex-col gap-2">
              <h3 className="m-0 font-display text-[clamp(24px,4vw,36px)] font-semibold leading-[1.05] tracking-[-0.03em]">
                Free. No manual logging. Ever.
              </h3>
              <p className="m-0 text-[14.5px] text-bone-dim">Android · Google Play · com.teamvesper.snapvision</p>
            </div>

            {/* Massive thumb-friendly CTA — 74px tall, full-width on mobile. */}
            <GlowButton href={PLAY_URL} size="lg" className="relative w-full max-w-[420px] flex-1 basis-[300px]">
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
