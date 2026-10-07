import {
  AlertTriangle,
  PackageX,
  TrendingDown,
  Bell,
} from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StatusBadge from "@/components/ui/StatusBadge";

const alerts = [
  {
    title: "Wireless Mouse stock is critically low",
    description: "Current stock is below the recommended reorder level.",
    type: "critical" as const,
    icon: PackageX,
    time: "12 min ago",
  },
  {
    title: "Gurgaon warehouse near capacity",
    description: "Warehouse utilization has reached 94%.",
    type: "warning" as const,
    icon: AlertTriangle,
    time: "38 min ago",
  },
  {
    title: "Demand forecast increased",
    description: "Electronics demand is expected to increase by 18%.",
    type: "medium" as const,
    icon: TrendingDown,
    time: "1 hour ago",
  },
];

export default function AlertsPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">

          <div>
            <p className="text-sm text-cyan-400">
              Alerts
            </p>

            <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              Supply Chain Alerts
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Review important inventory and operational risks.
            </p>
          </div>


          <div className="mt-8 space-y-4">

            {alerts.map((alert) => {
              const Icon = alert.icon;

              return (
                <div
                  key={alert.title}
                  className="rounded-2xl border border-[#1F2937] bg-[#111827] p-5 transition hover:border-cyan-400/20"
                >

                  <div className="flex items-start gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-400/10 text-red-400">
                      <Icon size={20} />
                    </div>

                    <div className="flex-1">

                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                        <h3 className="font-semibold text-white">
                          {alert.title}
                        </h3>

                        <StatusBadge status={alert.type} />

                      </div>

                      <p className="mt-2 text-sm text-slate-400">
                        {alert.description}
                      </p>

                      <p className="mt-3 text-xs text-slate-600">
                        {alert.time}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>


          <div className="mt-8 rounded-2xl border border-[#1F2937] bg-[#111827] p-6">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Bell size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Alert automation
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Configure how SupplyMind should notify you.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}