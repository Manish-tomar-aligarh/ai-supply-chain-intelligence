import {
  TrendingUp,
  IndianRupee,
  Package,
  Activity,
} from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import DemandChart from "@/components/dashboard/DemandChart";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">

          <div>
            <p className="text-sm text-cyan-400">
              Analytics
            </p>

            <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              Supply Chain Analytics
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Understand revenue, inventory and operational performance.
            </p>
          </div>


          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {[
              ["Revenue", "₹42.8L", IndianRupee],
              ["Orders", "1,284", Package],
              ["Growth", "+18.6%", TrendingUp],
              ["Efficiency", "92.4%", Activity],
            ].map(([title, value, Icon]) => {
              const IconComponent = Icon as typeof Package;

              return (
                <div
                  key={title as string}
                  className="rounded-2xl border border-[#1F2937] bg-[#111827] p-5"
                >

                  <div className="flex items-center justify-between">

                    <p className="text-sm text-slate-400">
                      {title as string}
                    </p>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-400/10 text-indigo-400">
                      <IconComponent size={18} />
                    </div>

                  </div>

                  <p className="mt-3 text-2xl font-semibold text-white">
                    {value as string}
                  </p>

                </div>
              );
            })}

          </div>


          <div className="mt-8 rounded-2xl border border-[#1F2937] bg-[#111827] p-6">

            <div className="mb-5">
              <h2 className="text-lg font-semibold text-white">
                Performance Trend
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Demand and business performance over time.
              </p>
            </div>

            <DemandChart />

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}