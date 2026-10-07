import {
  Warehouse,
  MapPin,
  Package,
  Activity,
} from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ProgressBar from "@/components/ui/ProgressBar";
import StatusBadge from "@/components/ui/StatusBadge";

const warehouses = [
  {
    name: "Noida Central Warehouse",
    location: "Noida, Uttar Pradesh",
    capacity: 82,
    products: 8420,
    status: "healthy" as const,
  },
  {
    name: "Delhi Distribution Hub",
    location: "New Delhi, Delhi",
    capacity: 68,
    products: 6240,
    status: "healthy" as const,
  },
  {
    name: "Gurgaon Storage Center",
    location: "Gurgaon, Haryana",
    capacity: 94,
    products: 9810,
    status: "warning" as const,
  },
];

export default function WarehousesPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">

          <div>
            <p className="text-sm text-cyan-400">
              Warehouses
            </p>

            <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              Warehouse Operations
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Monitor warehouse capacity and inventory distribution.
            </p>
          </div>


          <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">

            {warehouses.map((warehouse) => (
              <div
                key={warehouse.name}
                className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20"
              >

                <div className="flex items-start justify-between">

                  <div className="flex gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                      <Warehouse size={20} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        {warehouse.name}
                      </h3>

                      <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                        <MapPin size={13} />
                        {warehouse.location}
                      </div>
                    </div>

                  </div>

                  <StatusBadge status={warehouse.status} />

                </div>


                <div className="mt-7">

                  <ProgressBar
                    value={warehouse.capacity}
                    label="Capacity Used"
                  />

                </div>


                <div className="mt-6 grid grid-cols-2 gap-4">

                  <div className="rounded-xl bg-[#0D1117] p-4">

                    <div className="flex items-center gap-2 text-slate-500">
                      <Package size={15} />
                      <span className="text-xs">
                        Products
                      </span>
                    </div>

                    <p className="mt-2 font-semibold text-white">
                      {warehouse.products.toLocaleString()}
                    </p>

                  </div>


                  <div className="rounded-xl bg-[#0D1117] p-4">

                    <div className="flex items-center gap-2 text-slate-500">
                      <Activity size={15} />
                      <span className="text-xs">
                        Utilization
                      </span>
                    </div>

                    <p className="mt-2 font-semibold text-white">
                      {warehouse.capacity}%
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}