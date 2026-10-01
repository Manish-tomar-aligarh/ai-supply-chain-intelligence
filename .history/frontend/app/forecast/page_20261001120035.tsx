import DashboardLayout from "@/components/layout/DashboardLayout";

export default function ForecastPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-[1500px] px-5 py-8 lg:px-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-indigo-400">
            Intelligence
          </p>

          <h1 className="mt-2 text-3xl font-semibold text-white">
            Demand Forecast
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Predict future product demand using machine learning.
          </p>
        </div>

        <div className="rounded-2xl border border-[#1F2937] bg-[#0D1117] p-8">
          <div className="flex min-h-[350px] items-center justify-center rounded-xl border border-dashed border-[#1F2937]">
            <div className="text-center">
              <p className="text-sm font-medium text-slate-300">
                Forecasting engine
              </p>

              <p className="mt-2 text-xs text-slate-600">
                ML forecasting will be implemented later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}