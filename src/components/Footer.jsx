import { PLAY_URL, SOCIALS } from '../data/site';
import SocialIcon from './ui/SocialIcon';

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 px-[18px] pb-7 pt-10 sm:px-8 sm:pb-11 sm:pt-16 lg:px-16 lg:pt-24">
      <div className="glass relative mx-auto max-w-[1180px] overflow-hidden rounded-[28px] p-5 shadow-bento-lg sm:rounded-[36px] sm:p-10 lg:p-[52px]">
        {/* Offset to the right on wide cards; on a phone that left the first
            third unlit, so the glow spans the whole width there instead. */}
        <div
          className="pointer-events-none absolute -top-[60%] -left-[25%] h-[180%] w-[150%] rounded-full sm:left-[30%] sm:w-[70%]"
          style={{ background: 'radial-gradient(circle, var(--accent-2), transparent 62%)', opacity: 'calc(0.14 * var(--glow) * 1.5)' }}
        />

        <div className="relative flex flex-wrap justify-between gap-7 sm:gap-12 lg:gap-16">
          <div className="flex max-w-[38ch] flex-1 basis-[300px] flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="/assets/vesper-logo-256.png" alt="" width="38" height="38" loading="lazy" decoding="async" className="h-[38px] w-[38px] rounded-xl object-cover" />
              <span className="font-display text-[22px] font-bold tracking-[-0.02em]">Team Vesper</span>
            </div>
            <p className="m-0 text-[15px] leading-relaxed text-bone-dim">
              An independent studio building apps and games for Android.
            </p>
            {/* You are already here — the domain is a label, not a link. */}
            <span className="inline-flex items-center gap-2 self-start rounded-pill border border-white/[0.11] bg-white/[0.05] px-[18px] py-2.5 font-mono text-xs tracking-[0.05em] text-bone/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
              teamvesper.com
            </span>
          </div>

          {/* Products + Social pair up into a tidy two-column row on phones. */}
          <div className="flex basis-[calc(50%-14px)] flex-col gap-3.5 sm:basis-[190px]">
            <span className="label">Products</span>
            <div className="flex flex-col gap-3 text-[14.5px]">
              <a href="#snaptrack" className="text-bone/70 hover:text-vesper-gold">SnapTrack AI</a>
              <a href="#birdclash" className="text-bone/70 hover:text-vesper-gold">Bird Clash</a>
              <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="text-bone/70 hover:text-vesper-gold">Google Play</a>
            </div>
          </div>

          <div className="flex basis-[calc(50%-14px)] flex-col gap-3.5 sm:basis-[190px]">
            <span className="label">Social</span>
            <div className="flex flex-col gap-3 text-[14.5px]">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className="flex items-center gap-2.5 text-bone/70 hover:text-vesper-gold">
                  <SocialIcon name={s.icon} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-1 basis-[240px] flex-col gap-3.5">
            <span className="label">Contact</span>
            <a
              href="mailto:contact@teamvesper.com"
              className="inline-flex min-h-[56px] items-center justify-between gap-3 rounded-[20px] border border-white/[0.10] bg-white/[0.045] px-5 text-[14.5px] transition-colors hover:border-vesper-amber/40 hover:bg-white/[0.09]"
            >
              contact@teamvesper.com <span className="text-[var(--accent)]">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="relative mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-5 text-[12.5px] text-white/[0.38] sm:mt-11">
          <span>&copy; 2026 Team Vesper. All rights reserved.</span>
          <span className="inline-flex items-center gap-[7px] font-mono text-[10.5px] uppercase tracking-[0.16em]">
            Made with <span className="text-[13px] leading-none text-[var(--accent-2)]">&#9829;</span> for Mobile Users
          </span>
        </div>
      </div>
    </footer>
  );
}
