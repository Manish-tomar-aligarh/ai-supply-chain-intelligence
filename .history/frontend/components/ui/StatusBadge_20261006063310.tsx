type Status =
  | "healthy"
  | "warning"
  | "critical"
  | "low"
  | "medium"
  | "high";

interface StatusBadgeProps {
  status: Status;
}

const statusStyles: Record<Status, string> = {
  healthy:
    "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",

  warning:
    "bg-amber-400/10 text-amber-400 border-amber-400/20",

  critical:
    "bg-red-400/10 text-red-400 border-red-400/20",

  low:
    "bg-emerald-400/10 text-emerald-400 border-emerald-400/20",

  medium:
    "bg-amber-400/10 text-amber-400 border-amber-400/20",

  high:
    "bg-red-400/10 text-red-400 border-red-400/20",
};

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium capitalize ${statusStyles[status]}`}
    >
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />

      {status}
    </span>
  );
}