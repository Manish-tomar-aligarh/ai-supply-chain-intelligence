import {
  ShoppingCart,
  Clock,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StatusBadge from "@/components/ui/StatusBadge";

const orders = [
  {
    id: "PO-2048",
    supplier: "TechSource India",
    items: 24,
    amount: "₹4,82,000",
    status: "healthy" as const,
  },
  {
    id: "PO-2047",
    supplier: "Global Components",
    items: 18,
    amount: "₹2,64,500",
    status: "warning" as const,
  },
  {
    id: "PO-2046",
    supplier: "Prime Electronics",
    items: 12,
    amount: "₹1,92,000",
    status: "critical" as const,
  },
];

export default function ProcurementPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">

          <div>
            <p className="text-sm text-cyan-400">
              Procurement
            </p>

            <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              Procurement Center
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Manage purchase orders and replenishment decisions.
            </p>
          </div>


          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {[
              ["Pending Orders", "12", Clock],
              ["Approved Orders", "28", CheckCircle2],
              ["Total Spend", "₹18.4L", ShoppingCart],
              ["At Risk", "3", AlertTriangle],
            ].map(([title, value, Icon]) => {
              const IconComponent = Icon as typeof ShoppingCart;

              return (
                <div
                  key={title as string}
                  className="rounded-2xl border border-[#1F2937] bg-[#111827] p-5"
                >

                  <div className="flex items-center justify-between">

                    <p className="text-sm text-slate-400">
                      {title as string}
                    </p>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
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


          <div className="mt-8 rounded-2xl border border-[#1F2937] bg-[#111827]">

            <div className="border-b border-[#1F2937] p-6">

              <h2 className="text-lg font-semibold text-white">
                Purchase Orders
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Current procurement activity.
              </p>

            </div>


            <div className="divide-y divide-[#1F2937]">

              {orders.map((order) => (
                <div
                  key={order.id}
                  className="flex flex-col gap-4 p-6 transition hover:bg-white/[0.02] md:flex-row md:items-center md:justify-between"
                >

                  <div>
                    <p className="font-semibold text-white">
                      {order.id}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {order.supplier}
                    </p>
                  </div>


                  <div className="flex items-center gap-8">

                    <div>
                      <p className="text-xs text-slate-500">
                        Items
                      </p>

                      <p className="mt-1 text-sm text-white">
                        {order.items}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        Amount
                      </p>

                      <p className="mt-1 text-sm text-white">
                        {order.amount}
                      </p>
                    </div>

                    <StatusBadge status={order.status} />

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}