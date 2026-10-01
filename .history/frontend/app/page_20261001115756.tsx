import DashboardLayout from "@/components/layout/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-[1500px] px-5 py-8 lg:px-8">
        
        <div className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Intelligence Dashboard
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Good morning, Manish.
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Monitor inventory, demand, suppliers and procurement
            decisions from one intelligent workspace.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Inventory Value",
              value: "₹48.2L",
            },
            {
              title: "Total Products",
              value: "2,438",
            },
            {
              title: "At Risk",
              value: "23",
            },
            {
              title: "Active Suppliers",
              value: "86",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#1F2937] bg-[#0D1117] p-5"
            >
              <p className="text-xs text-slate-500">
                {item.title}
              </p>

              <p className="mt-2 text-2xl font-semibold text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="min-h-[300px] rounded-2xl border border-[#1F2937] bg-[#0D1117] p-6">
            <p className="text-sm font-medium text-slate-200">
              Demand Forecast
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Forecasting engine will appear here.
            </p>

            <div className="mt-8 flex h-48 items-center justify-center rounded-xl border border-dashed border-[#1F2937]">
              <span className="text-xs text-slate-600">
                Forecast chart coming soon
              </span>
            </div>
          </div>

          <div className="min-h-[300px] rounded-2xl border border-[#1F2937] bg-[#0D1117] p-6">
            <p className="text-sm font-medium text-slate-200">
              AI Insights
            </p>

            <p className="mt-1 text-xs text-slate-500">
              AI analysis will appear here.
            </p>

            <div className="mt-8 flex h-48 items-center justify-center rounded-xl border border-dashed border-[#1F2937]">
              <span className="text-xs text-slate-600">
                AI engine coming soon
              </span>
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}