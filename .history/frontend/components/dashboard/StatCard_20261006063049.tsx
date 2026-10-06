import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  description: string;
  icon: LucideIcon;
  positive?: boolean;
}

export default function StatCard({
  title,
  value,
  change,
  description,
  icon: Icon,
  positive = true,
}: StatCardProps) {
  return (
    <div className="group rounded-2xl border border-[#1F2937] bg-[#111827] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">
      
      <div className="flex items-start justify-between">
        
        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            {value}
          </h3>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
          <Icon size={20} />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span
          className={`text-sm font-medium ${
            positive ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {change}
        </span>

        <span className="text-xs text-slate-500">
          {description}
        </span>
      </div>
    </div>
  );
}