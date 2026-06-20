/** Fixed, non-interactive film-grain texture across the whole page. */
export default function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="grain pointer-events-none fixed inset-0 z-[1] opacity-[0.06] mix-blend-soft-light"
    />
  );
}
