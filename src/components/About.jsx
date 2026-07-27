import { ABOUT_FACTS } from '../data/site';
import Reveal from './ui/Reveal';

/** The studio, kept out of the product story and given its own room. */
export default function About() {
  return (
    <section id="about" className="relative z-10 px-[18px] pb-5 pt-14 sm:px-8 sm:pb-10 sm:pt-20 lg:px-16 lg:pt-30">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-6 sm:gap-11">
        <Reveal className="min-w-[min(100%,400px)] flex-1 basis-[400px]">
          <div className="overflow-hidden rounded-[clamp(24px,3vw,32px)] border border-white/10 shadow-bento-lg">
            {/* Art direction: the 3:1 cut on phones — the square crop ate half a
                screen — and the same 2:1 banner as the desktop layout from 560px up. */}
            <picture>
              <source media="(min-width: 560px)" srcSet="/assets/vesper-banner-2x1.jpg" />
              <img src="/assets/vesper-banner-wide.jpg" alt="Team Vesper" loading="lazy" decoding="async" className="block h-auto w-full" />
            </picture>
          </div>
        </Reveal>

        <div className="flex flex-1 basis-[380px] flex-col gap-4 sm:gap-6">
          <Reveal delay={0.06} className="flex flex-col gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">03 / About</span>
            <h2 className="m-0 font-display text-[clamp(28px,5vw,44px)] font-semibold leading-[1.04] tracking-[-0.03em]">Team Vesper</h2>
            <p className="m-0 max-w-[46ch] text-pretty text-[15.5px] leading-[1.68] text-bone-dim">
              An independent studio. We design and build our own apps and games end to end, and
              ship them on Google Play.
            </p>
          </Reveal>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,190px),1fr))] gap-2.5 sm:gap-3.5">
            {ABOUT_FACTS.map((f, i) => (
              <Reveal key={f.label} delay={0.12 + i * 0.06} className="flex">
                <div className="flex w-full flex-col gap-1.5 rounded-[22px] border border-white/[0.085] bg-white/[0.032] px-5 py-[18px]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-faint">{f.label}</span>
                  <span className="font-display text-base font-semibold tracking-[-0.02em]">{f.value}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
