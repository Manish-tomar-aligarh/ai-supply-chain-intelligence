import DashboardLayout from "@/components/layout/DashboardLayout";

export default function ProcurementPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-[1500px] px-5 py-8 lg:px-8">
        <p className="text-xs uppercase tracking-[0.18em] text-amber-400">
          Optimization
        </p>

        <h1 className="mt-2 text-3xl font-semibold text-white">
          Procurement
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Generate optimized procurement plans using demand,
          inventory and supplier data.
        </p>

        <div className="mt-8 flex min-h-[350px] items-center justify-center rounded-2xl border border-dashed border-[#1F2937] bg-[#0D1117]">
          <p className="text-xs text-slate-600">
            Optimization engine coming soon
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}