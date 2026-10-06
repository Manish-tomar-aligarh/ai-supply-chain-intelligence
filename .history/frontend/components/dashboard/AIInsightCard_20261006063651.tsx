import {
  BrainCircuit,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function AIInsightCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/10 via-[#111827] to-cyan-400/5 p-6">
      
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative">
        
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-400">
            <BrainCircuit size={21} />
          </div>

          <div>
            <p className="text-sm font-medium text-indigo-300">
              AI Insight
            </p>

            <p className="text-xs text-slate-500">
              Updated a few minutes ago
            </p>
          </div>
        </div>

        <h3 className="mt-5 text-lg font-semibold text-white">
          Demand for Electronics is expected to increase
          next month.
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Based on recent sales trends, seasonal patterns
          and current inventory levels, the model predicts
          approximately 18% higher demand.
        </p>

        <div className="mt-5 flex items-center justify-between">
          
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-400">
            <ArrowUpRight size={17} />
            18% predicted growth
          </div>

          <Sparkles
            size={18}
            className="text-cyan-400"
          />
        </div>
      </div>
    </div>
  );
}