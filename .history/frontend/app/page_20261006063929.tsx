import {
  Package,
  TrendingUp,
  AlertTriangle,
  Truck,
} from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import DemandChart from "@/components/dashboard/DemandChart";
import AIInsightCard from "@/components/dashboard/AIInsightCard";
import InventoryHealth from "@/components/dashboard/InventoryHealth";
import SectionHeader from "@/components/ui/SectionHeader";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        
        <div className="mx-auto max-w-[1600px]">

          {/* Header */}

          <div className="mb-8">
            <p className="text-sm text-cyan-400">
              Overview
            </p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Supply Chain Intelligence
            </h1>

            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              Monitor inventory, demand and supply chain
              performance from one intelligent workspace.
            </p>
          </div>


          {/* Stats */}

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            <StatCard
              title="Total Inventory"
              value="₹24.8L"
              change="+12.5%"
              description="vs last month"
              icon={Package}
            />

            <StatCard
              title="Demand Forecast"
              value="7,842"
              change="+18.2%"
              description="next 30 days"
              icon={TrendingUp}
            />

            <StatCard
              title="Stockout Risk"
              value="12 Items"
              change="-8.4%"
              description="vs last week"
              icon={AlertTriangle}
              positive={true}
            />

            <StatCard
              title="Active Suppliers"
              value="48"
              change="+4"
              description="this month"
              icon={Truck}
            />

          </div>


          {/* Main Analytics */}

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_1fr]">

            {/* Demand */}

            <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6">

              <SectionHeader
                title="Demand Forecast"
                description="Expected product demand based on recent trends"
                action="View Forecast"
              />

              <DemandChart />

            </div>


            {/* AI */}

            <AIInsightCard />

          </div>


          {/* Inventory */}

          <div className="mt-8">

            <SectionHeader
              title="Inventory Overview"
              description="Monitor stock levels and identify potential risks"
              action="View Inventory"
            />

            <InventoryHealth />

          </div>


          {/* Bottom Section */}

          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6">

              <SectionHeader
                title="Recent Activity"
                description="Latest supply chain events"
              />

              <div className="space-y-4">

                {[
                  "Inventory threshold updated for SKU-1024",
                  "Supplier reliability score improved",
                  "Demand forecast generated for Electronics",
                  "Purchase order PO-2048 created",
                ].map((activity, index) => (
                  <div
                    key={activity}
                    className="flex items-center gap-3 rounded-xl border border-[#1F2937] bg-[#0D1117] p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs font-semibold text-cyan-400">
                      {index + 1}
                    </div>

                    <p className="text-sm text-slate-300">
                      {activity}
                    </p>
                  </div>
                ))}

              </div>

            </div>


            <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6">

              <SectionHeader
                title="Supply Chain Health"
                description="Overall operational health"
              />

              <div className="flex items-center justify-center py-8">

                <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[14px] border-emerald-400/20">

                  <div className="absolute inset-0 rounded-full border-[14px] border-transparent border-t-emerald-400 border-r-emerald-400 rotate-45" />

                  <div className="text-center">

                    <p className="text-4xl font-bold text-white">
                      87
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Health Score
                    </p>

                  </div>

                </div>

              </div>

              <p className="text-center text-sm text-emerald-400">
                Supply chain is performing well
              </p>

            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}