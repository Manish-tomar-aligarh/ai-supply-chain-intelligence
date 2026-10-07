"use client";

import {
  Package,
  Search,
  Plus,
  MoreHorizontal,
  ArrowDown,
  ArrowUp,
} from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import StatusBadge from "@/components/ui/StatusBadge";

const products = [
  {
    name: "MacBook Pro 14",
    sku: "MBP-014",
    category: "Electronics",
    stock: 42,
    reorder: 15,
    price: "₹1,49,999",
    status: "healthy" as const,
  },
  {
    name: "Wireless Keyboard",
    sku: "KB-204",
    category: "Accessories",
    stock: 12,
    reorder: 20,
    price: "₹2,499",
    status: "warning" as const,
  },
  {
    name: "Wireless Mouse",
    sku: "MS-301",
    category: "Accessories",
    stock: 4,
    reorder: 15,
    price: "₹1,299",
    status: "critical" as const,
  },
  {
    name: "Monitor 27 inch",
    sku: "MON-510",
    category: "Electronics",
    stock: 28,
    reorder: 10,
    price: "₹24,999",
    status: "healthy" as const,
  },
  {
    name: "USB-C Hub",
    sku: "HUB-120",
    category: "Accessories",
    stock: 18,
    reorder: 12,
    price: "₹3,499",
    status: "healthy" as const,
  },
];

export default function InventoryPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">

          {/* Header */}

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm text-cyan-400">
                Inventory
              </p>

              <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                Inventory Management
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                Monitor products, stock levels and reorder requirements.
              </p>
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              <Plus size={17} />
              Add Product
            </button>
          </div>


          {/* Stats */}

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {[
              ["Total Products", "248", Package],
              ["Healthy Stock", "186", ArrowUp],
              ["Low Stock", "18", ArrowDown],
              ["Out of Stock", "4", ArrowDown],
            ].map(([title, value, Icon], index) => {
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

                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                        index === 2 || index === 3
                          ? "bg-red-400/10 text-red-400"
                          : "bg-cyan-400/10 text-cyan-400"
                      }`}
                    >
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


          {/* Products */}

          <div className="mt-8 rounded-2xl border border-[#1F2937] bg-[#111827]">

            <div className="border-b border-[#1F2937] p-5">
              <SectionHeader
                title="Products"
                description="Current inventory across your catalog"
              />

              <div className="mt-4 flex flex-col gap-3 md:flex-row">

                <div className="relative flex-1">
                  <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full rounded-xl border border-[#1F2937] bg-[#0D1117] py-2.5 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
                  />
                </div>

                <button className="rounded-xl border border-[#1F2937] bg-[#0D1117] px-4 py-2.5 text-sm text-slate-300 transition hover:border-cyan-400/30">
                  Filter
                </button>

              </div>
            </div>


            {/* Table */}

            <div className="overflow-x-auto">

              <table className="w-full min-w-[800px] text-left">

                <thead className="border-b border-[#1F2937] bg-[#0D1117]">

                  <tr>
                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Product
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      SKU
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Category
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Stock
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Price
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-5 py-4" />
                  </tr>

                </thead>

                <tbody>

                  {products.map((product) => (
                    <tr
                      key={product.sku}
                      className="border-b border-[#1F2937] transition hover:bg-white/[0.02]"
                    >

                      <td className="px-5 py-4">
                        <p className="font-medium text-white">
                          {product.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Reorder at {product.reorder}
                        </p>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-400">
                        {product.sku}
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-400">
                        {product.category}
                      </td>

                      <td className="px-5 py-4">
                        <span className="font-medium text-white">
                          {product.stock}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-300">
                        {product.price}
                      </td>

                      <td className="px-5 py-4">
                        <StatusBadge status={product.status} />
                      </td>

                      <td className="px-5 py-4">
                        <button className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-800 hover:text-white">
                          <MoreHorizontal size={18} />
                        </button>
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}"use client";

import {
  Package,
  Search,
  Plus,
  MoreHorizontal,
  ArrowDown,
  ArrowUp,
} from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import StatusBadge from "@/components/ui/StatusBadge";

const products = [
  {
    name: "MacBook Pro 14",
    sku: "MBP-014",
    category: "Electronics",
    stock: 42,
    reorder: 15,
    price: "₹1,49,999",
    status: "healthy" as const,
  },
  {
    name: "Wireless Keyboard",
    sku: "KB-204",
    category: "Accessories",
    stock: 12,
    reorder: 20,
    price: "₹2,499",
    status: "warning" as const,
  },
  {
    name: "Wireless Mouse",
    sku: "MS-301",
    category: "Accessories",
    stock: 4,
    reorder: 15,
    price: "₹1,299",
    status: "critical" as const,
  },
  {
    name: "Monitor 27 inch",
    sku: "MON-510",
    category: "Electronics",
    stock: 28,
    reorder: 10,
    price: "₹24,999",
    status: "healthy" as const,
  },
  {
    name: "USB-C Hub",
    sku: "HUB-120",
    category: "Accessories",
    stock: 18,
    reorder: 12,
    price: "₹3,499",
    status: "healthy" as const,
  },
];

export default function InventoryPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">

          {/* Header */}

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm text-cyan-400">
                Inventory
              </p>

              <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                Inventory Management
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                Monitor products, stock levels and reorder requirements.
              </p>
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              <Plus size={17} />
              Add Product
            </button>
          </div>


          {/* Stats */}

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {[
              ["Total Products", "248", Package],
              ["Healthy Stock", "186", ArrowUp],
              ["Low Stock", "18", ArrowDown],
              ["Out of Stock", "4", ArrowDown],
            ].map(([title, value, Icon], index) => {
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

                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                        index === 2 || index === 3
                          ? "bg-red-400/10 text-red-400"
                          : "bg-cyan-400/10 text-cyan-400"
                      }`}
                    >
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


          {/* Products */}

          <div className="mt-8 rounded-2xl border border-[#1F2937] bg-[#111827]">

            <div className="border-b border-[#1F2937] p-5">
              <SectionHeader
                title="Products"
                description="Current inventory across your catalog"
              />

              <div className="mt-4 flex flex-col gap-3 md:flex-row">

                <div className="relative flex-1">
                  <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full rounded-xl border border-[#1F2937] bg-[#0D1117] py-2.5 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
                  />
                </div>

                <button className="rounded-xl border border-[#1F2937] bg-[#0D1117] px-4 py-2.5 text-sm text-slate-300 transition hover:border-cyan-400/30">
                  Filter
                </button>

              </div>
            </div>


            {/* Table */}

            <div className="overflow-x-auto">

              <table className="w-full min-w-[800px] text-left">

                <thead className="border-b border-[#1F2937] bg-[#0D1117]">

                  <tr>
                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Product
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      SKU
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Category
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Stock
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Price
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-5 py-4" />
                  </tr>

                </thead>

                <tbody>

                  {products.map((product) => (
                    <tr
                      key={product.sku}
                      className="border-b border-[#1F2937] transition hover:bg-white/[0.02]"
                    >

                      <td className="px-5 py-4">
                        <p className="font-medium text-white">
                          {product.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Reorder at {product.reorder}
                        </p>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-400">
                        {product.sku}
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-400">
                        {product.category}
                      </td>

                      <td className="px-5 py-4">
                        <span className="font-medium text-white">
                          {product.stock}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-300">
                        {product.price}
                      </td>

                      <td className="px-5 py-4">
                        <StatusBadge status={product.status} />
                      </td>

                      <td className="px-5 py-4">
                        <button className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-800 hover:text-white">
                          <MoreHorizontal size={18} />
                        </button>
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}"use client";

import {
  Package,
  Search,
  Plus,
  MoreHorizontal,
  ArrowDown,
  ArrowUp,
} from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import SectionHeader from "@/components/ui/SectionHeader";
import StatusBadge from "@/components/ui/StatusBadge";

const products = [
  {
    name: "MacBook Pro 14",
    sku: "MBP-014",
    category: "Electronics",
    stock: 42,
    reorder: 15,
    price: "₹1,49,999",
    status: "healthy" as const,
  },
  {
    name: "Wireless Keyboard",
    sku: "KB-204",
    category: "Accessories",
    stock: 12,
    reorder: 20,
    price: "₹2,499",
    status: "warning" as const,
  },
  {
    name: "Wireless Mouse",
    sku: "MS-301",
    category: "Accessories",
    stock: 4,
    reorder: 15,
    price: "₹1,299",
    status: "critical" as const,
  },
  {
    name: "Monitor 27 inch",
    sku: "MON-510",
    category: "Electronics",
    stock: 28,
    reorder: 10,
    price: "₹24,999",
    status: "healthy" as const,
  },
  {
    name: "USB-C Hub",
    sku: "HUB-120",
    category: "Accessories",
    stock: 18,
    reorder: 12,
    price: "₹3,499",
    status: "healthy" as const,
  },
];

export default function InventoryPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">

          {/* Header */}

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm text-cyan-400">
                Inventory
              </p>

              <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                Inventory Management
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                Monitor products, stock levels and reorder requirements.
              </p>
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              <Plus size={17} />
              Add Product
            </button>
          </div>


          {/* Stats */}

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {[
              ["Total Products", "248", Package],
              ["Healthy Stock", "186", ArrowUp],
              ["Low Stock", "18", ArrowDown],
              ["Out of Stock", "4", ArrowDown],
            ].map(([title, value, Icon], index) => {
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

                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                        index === 2 || index === 3
                          ? "bg-red-400/10 text-red-400"
                          : "bg-cyan-400/10 text-cyan-400"
                      }`}
                    >
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


          {/* Products */}

          <div className="mt-8 rounded-2xl border border-[#1F2937] bg-[#111827]">

            <div className="border-b border-[#1F2937] p-5">
              <SectionHeader
                title="Products"
                description="Current inventory across your catalog"
              />

              <div className="mt-4 flex flex-col gap-3 md:flex-row">

                <div className="relative flex-1">
                  <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full rounded-xl border border-[#1F2937] bg-[#0D1117] py-2.5 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
                  />
                </div>

                <button className="rounded-xl border border-[#1F2937] bg-[#0D1117] px-4 py-2.5 text-sm text-slate-300 transition hover:border-cyan-400/30">
                  Filter
                </button>

              </div>
            </div>


            {/* Table */}

            <div className="overflow-x-auto">

              <table className="w-full min-w-[800px] text-left">

                <thead className="border-b border-[#1F2937] bg-[#0D1117]">

                  <tr>
                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Product
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      SKU
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Category
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Stock
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Price
                    </th>

                    <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-5 py-4" />
                  </tr>

                </thead>

                <tbody>

                  {products.map((product) => (
                    <tr
                      key={product.sku}
                      className="border-b border-[#1F2937] transition hover:bg-white/[0.02]"
                    >

                      <td className="px-5 py-4">
                        <p className="font-medium text-white">
                          {product.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Reorder at {product.reorder}
                        </p>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-400">
                        {product.sku}
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-400">
                        {product.category}
                      </td>

                      <td className="px-5 py-4">
                        <span className="font-medium text-white">
                          {product.stock}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-300">
                        {product.price}
                      </td>

                      <td className="px-5 py-4">
                        <StatusBadge status={product.status} />
                      </td>

                      <td className="px-5 py-4">
                        <button className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-800 hover:text-white">
                          <MoreHorizontal size={18} />
                        </button>
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}