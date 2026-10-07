import {
  TrendingUp,
  BrainCircuit,
  CalendarDays,
  Target,
} from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import DemandChart from "@/components/dashboard/DemandChart";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ForecastPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">

          <div>
            <p className="text-sm text-cyan-400">
              Forecast
            </p>

            <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              Demand Forecasting
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Predict future demand using historical sales patterns.
            </p>
          </div>


          {/* Forecast Stats */}

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {[
              {
                title: "Forecast Horizon",
                value: "30 Days",
                icon: CalendarDays,
              },
              {
                title: "Predicted Demand",
                value: "7,842",
                icon: TrendingUp,
              },
              {
                title: "Model Accuracy",
                value: "91.4%",
                icon: Target,
              },
              {
                title: "Model",
                value: "XGBoost",
                icon: BrainCircuit,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#1F2937] bg-[#111827] p-5"
                >
                  <div className="flex items-center justify-between">

                    <p className="text-sm text-slate-400">
                      {item.title}
                    </p>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-400/10 text-indigo-400">
                      <Icon size={18} />
                    </div>

                  </div>

                  <p className="mt-3 text-2xl font-semibold text-white">
                    {item.value}
                  </p>

                </div>
              );
            })}

          </div>


          {/* Chart */}

          <div className="mt-8 rounded-2xl border border-[#1F2937] bg-[#111827] p-6">

            <SectionHeader
              title="30-Day Demand Forecast"
              description="Historical demand compared with predicted demand"
            />

            <DemandChart />

          </div>


          {/* AI explanation */}

          <div className="mt-6 rounded-2xl border border-indigo-400/20 bg-indigo-400/5 p-6">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-400">
                <BrainCircuit size={20} />
              </div>

              <div>

                <h3 className="font-semibold text-white">
                  AI Forecast Summary
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                  Demand is showing an upward trend across the
                  selected period. The current forecast suggests
                  that inventory levels should be reviewed before
                  the next replenishment cycle.
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}