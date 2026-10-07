import {
  Truck,
  Star,
  Clock,
  PackageCheck,
} from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StatusBadge from "@/components/ui/StatusBadge";

const suppliers = [
  {
    name: "TechSource India",
    contact: "contact@techsource.in",
    products: 42,
    leadTime: "4 days",
    reliability: 96,
    status: "healthy" as const,
  },
  {
    name: "Global Components",
    contact: "sales@globalcomponents.com",
    products: 28,
    leadTime: "7 days",
    reliability: 89,
    status: "healthy" as const,
  },
  {
    name: "Prime Electronics",
    contact: "hello@primeelectronics.in",
    products: 19,
    leadTime: "11 days",
    reliability: 71,
    status: "warning" as const,
  },
];

export default function SuppliersPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">

          <div>
            <p className="text-sm text-cyan-400">
              Suppliers
            </p>

            <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              Supplier Management
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Track supplier reliability, lead times and product coverage.
            </p>
          </div>


          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {[
              ["Active Suppliers", "48", Truck],
              ["Avg. Reliability", "91%", Star],
              ["Avg. Lead Time", "6.4 days", Clock],
              ["Products Covered", "186", PackageCheck],
            ].map(([title, value, Icon]) => {
              const IconComponent = Icon as typeof Truck;

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


          <div className="mt-8 overflow-hidden rounded-2xl border border-[#1F2937] bg-[#111827]">

            <div className="border-b border-[#1F2937] p-6">
              <h2 className="text-lg font-semibold text-white">
                Supplier Performance
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Performance overview of your active suppliers.
              </p>
            </div>


            <div className="divide-y divide-[#1F2937]">

              {suppliers.map((supplier) => (
                <div
                  key={supplier.name}
                  className="flex flex-col gap-5 p-6 transition hover:bg-white/[0.02] lg:flex-row lg:items-center lg:justify-between"
                >

                  <div>
                    <h3 className="font-semibold text-white">
                      {supplier.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {supplier.contact}
                    </p>
                  </div>


                  <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">

                    <div>
                      <p className="text-xs text-slate-500">
                        Products
                      </p>

                      <p className="mt-1 font-medium text-white">
                        {supplier.products}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        Lead Time
                      </p>

                      <p className="mt-1 font-medium text-white">
                        {supplier.leadTime}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        Reliability
                      </p>

                      <p className="mt-1 font-medium text-white">
                        {supplier.reliability}%
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        Status
                      </p>

                      <div className="mt-1">
                        <StatusBadge status={supplier.status} />
                      </div>
                    </div>

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