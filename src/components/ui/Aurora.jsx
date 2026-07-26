/**
 * Fixed mesh-gradient backdrop. Pure radial gradients — no filter: blur(),
 * which is what usually murders scroll performance on mid-range Android.
 */
export default function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute -left-[10vw] -top-[18vh] h-[70vw] max-h-[900px] w-[70vw] max-w-[900px] rounded-full opacity-[0.17] animate-drift will-change-transform"
        style={{ background: 'radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 68%)' }}
      />
      <div
        className="absolute -right-[16vw] top-[38vh] h-[64vw] max-h-[820px] w-[64vw] max-w-[820px] rounded-full opacity-[0.15] animate-drift-slow will-change-transform"
        style={{ background: 'radial-gradient(circle at 50% 50%, var(--accent-2) 0%, transparent 68%)' }}
      />
      <div
        className="absolute -bottom-[10vh] left-[20vw] h-[50vw] max-h-[640px] w-[50vw] max-w-[640px] rounded-full opacity-[0.11] animate-drift-slower will-change-transform"
        style={{ background: 'radial-gradient(circle at 50% 50%, #7C5CFF 0%, transparent 68%)' }}
      />
      <div
        className="absolute inset-0 bg-grid bg-grid"
        style={{
          maskImage: 'radial-gradient(120% 90% at 50% 0%, #000 0%, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(120% 90% at 50% 0%, #000 0%, transparent 72%)',
        }}
      />
    </div>
  );
}
