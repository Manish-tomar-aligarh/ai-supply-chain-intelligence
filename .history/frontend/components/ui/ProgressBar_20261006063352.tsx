interface ProgressBarProps {
  value: number;
  label?: string;
}

export default function ProgressBar({
  value,
  label,
}: ProgressBarProps) {
  return (
    <div className="w-full">
      
      {label && (
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-slate-400">
            {label}
          </span>

          <span className="text-sm font-medium text-white">
            {value}%
          </span>
        </div>
      )}

      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}