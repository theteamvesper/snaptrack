/** Holographic "Coming soon" chip — spinning conic gradient behind a dark core. */
export default function HoloBadge({ children = 'Coming soon' }) {
  return (
    <div className="relative inline-flex items-center gap-2.5 overflow-hidden rounded-pill px-5 py-[11px] shadow-[0_14px_40px_rgba(255,120,40,0.28)]">
      <span aria-hidden className="absolute -inset-[160%] animate-spin-slow bg-holo will-change-transform" />
      <span aria-hidden className="absolute inset-[1.5px] rounded-pill bg-[rgba(8,6,14,0.88)]" />
      <span aria-hidden className="absolute inset-[1.5px] rounded-pill bg-gradient-to-br from-white/[0.16] via-transparent to-white/[0.10]" />
      <span className="relative h-[7px] w-[7px] rounded-full bg-[#FFD27A] shadow-[0_0_10px_#FFB020]" />
      <span className="relative bg-holo-text bg-clip-text font-mono text-[11.5px] font-bold uppercase tracking-[0.2em] text-transparent">
        {children}
      </span>
    </div>
  );
}
