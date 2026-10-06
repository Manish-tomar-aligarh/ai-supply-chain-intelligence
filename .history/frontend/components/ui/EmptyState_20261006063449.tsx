import { PackageOpen } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: string;
}

export default function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#1F2937] bg-[#0D1117] px-6 text-center">
      
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-slate-400">
        <PackageOpen size={22} />
      </div>

      <h3 className="text-base font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-slate-400">
        {description}
      </p>

      {action && (
        <button className="mt-5 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
          {action}
        </button>
      )}
    </div>
  );
}