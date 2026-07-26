const ITEMS = ['Team Vesper', 'SnapTrack AI', 'Calorie Scanner', 'Bird Clash', 'Archery Game', 'Google Play'];

export default function Marquee() {
  const Row = ({ hidden }) => (
    <div
      aria-hidden={hidden || undefined}
      className="flex items-center gap-[38px] whitespace-nowrap pr-[38px] font-mono text-xs uppercase tracking-[0.2em] text-white/[0.34]"
    >
      {ITEMS.map((t) => (
        <span key={t} className="flex items-center gap-[38px]">
          {t}
          <span className="text-[var(--accent)]">&#9671;</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="relative z-10 overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-[15px]"
      style={{
        maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
      }}
    >
      <div className="flex w-max animate-marquee will-change-transform">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
