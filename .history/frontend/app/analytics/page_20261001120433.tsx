import DashboardLayout from "@/components/layout/DashboardLayout";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-[1500px] px-5 py-8 lg:px-8">
        <p className="text-xs uppercase tracking-[0.18em] text-cyan-400">
          Intelligence
        </p>

        <h1 className="mt-2 text-3xl font-semibold text-white">
          Analytics
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Explore business metrics, inventory trends and supplier performance.
        </p>

        <div className="mt-8 flex min-h-[350px] items-center justify-center rounded-2xl border border-dashed border-[#1F2937] bg-[#0D1117]">
          <p className="text-xs text-slate-600">
            Analytics engine coming soon
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}