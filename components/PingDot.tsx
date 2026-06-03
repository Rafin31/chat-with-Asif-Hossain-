/**
 * Ping ripple dot  replaces animate-pulse for status indicators.
 * A solid dot with a ripple ring expanding outward (radar / broadcast feel).
 */
export default function PingDot({
  color = "bg-accent-yellow",
  size = "h-2 w-2",
}: {
  color?: string
  size?: string
}) {
  return (
    <span className={`relative flex shrink-0 ${size}`}>
      <span
        className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-50`}
      />
      <span className={`relative inline-flex h-full w-full rounded-full ${color}`} />
    </span>
  )
}
