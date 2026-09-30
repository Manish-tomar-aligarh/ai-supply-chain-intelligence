"use client";

import {
  Activity,
  Bell,
  Boxes,
  ChevronDown,
  CircleDollarSign,
  LayoutDashboard,
  Menu,
  Package,
  Settings,
  Truck,
  TrendingDown,
  TrendingUp,
  Users,
  Warehouse,
  X,
} from "lucide-react";

import { useState } from "react";

const navigation = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Inventory",
    icon: Package,
  },
  {
    label: "Forecast",
    icon: TrendingUp,
  },
  {
    label: "Warehouses",
    icon: Warehouse,
  },
  {
    label: "Suppliers",
    icon: Truck,
  },
  {
    label: "Procurement",
    icon: Boxes,
  },
  {
    label: "Analytics",
    icon: Activity,
  },
];

const bottomNavigation = [
  {
    label: "AI Analyst",
    icon: CircleDollarSign,
  },
  {
    label: "Alerts",
    icon: Bell,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

const stats = [
  {
    title: "Inventory Value",
    value: "₹48.2L",
    change: "+8.4%",
    positive: true,
    icon: CircleDollarSign,
  },
  {
    title: "Total Products",
    value: "2,438",
    change: "+124",
    positive: true,
    icon: Package,
  },
  {
    title: "At Risk",
    value: "23",
    change: "-5.2%",
    positive: false,
    icon: TrendingDown,
  },
  {
    title: "Active Suppliers",
    value: "86",
    change: "+6",
    positive: true,
    icon: Users,
  },
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#070A0F] text-slate-100">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-[260px]
          flex-col border-r border-[#1F2937] bg-[#0D1117]
          transition-transform duration-300
          lg:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-[76px] items-center justify-between border-b border-[#1F2937] px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 ring-1 ring-cyan-400/20">
              <Boxes size={19} />
            </div>

            <div>
              <h1 className="text-[15px] font-semibold tracking-wide">
                SupplyMind
              </h1>

              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Intelligence
              </p>
            </div>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-slate-500 hover:bg-white/5 hover:text-white lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 overflow-y-auto px-3 py-6">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
            Workspace
          </p>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  className={`
                    group flex w-full items-center gap-3 rounded-xl px-3 py-2.5
                    text-sm transition-all duration-200
                    ${
                      item.active
                        ? "bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/10"
                        : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-100"
                    }
                  `}
                >
                  <Icon
                    size={18}
                    className={
                      item.active
                        ? "text-cyan-400"
                        : "text-slate-500 group-hover:text-slate-300"
                    }
                  />

                  <span>{item.label}</span>

                  {item.label === "Alerts" && (
                    <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500/10 px-1.5 text-[10px] text-red-400">
                      7
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="my-7 h-px bg-[#1F2937]" />

          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
            Intelligence
          </p>

          <nav className="space-y-1">
            {bottomNavigation.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition-all duration-200 hover:bg-white/[0.04] hover:text-slate-100"
                >
                  <Icon
                    size={18}
                    className="text-slate-500 group-hover:text-cyan-400"
                  />

                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Workspace */}
        <div className="border-t border-[#1F2937] p-4">
          <div className="rounded-xl border border-[#1F2937] bg-[#111827]/70 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-300">
                Workspace
              </span>

              <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[9px] font-medium text-emerald-400">
                PRO
              </span>
            </div>

            <p className="text-[11px] leading-5 text-slate-500">
              Acme Manufacturing
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <section className="lg:pl-[260px]">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-[#1F2937] bg-[#070A0F]/90 px-5 backdrop-blur-xl lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl border border-[#1F2937] bg-[#0D1117] p-2 text-slate-400 hover:text-white lg:hidden"
            >
              <Menu size={20} />
            </button>

            <div>
              <p className="text-xs text-slate-500">Workspace</p>

              <button className="mt-0.5 flex items-center gap-1 text-sm font-medium text-slate-200">
                Acme Manufacturing
                <ChevronDown size={14} className="text-slate-500" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative rounded-xl border border-[#1F2937] bg-[#0D1117] p-2.5 text-slate-400 transition hover:border-slate-600 hover:text-white">
              <Bell size={18} />

              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-400" />
            </button>

            <div className="hidden h-8 w-px bg-[#1F2937] sm:block" />

            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-medium text-slate-200">
                  Manish Tomar
                </p>

                <p className="text-[11px] text-slate-500">
                  Administrator
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm font-semibold text-white">
                MT
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard */}
        <div className="mx-auto max-w-[1500px] px-5 py-8 lg:px-8">
          {/* Heading */}
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Intelligence Dashboard
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Good morning, Manish.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Monitor inventory, demand, suppliers and procurement decisions
                from one intelligent workspace.
              </p>
            </div>

            <button className="w-fit rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-[#061014] shadow-[0_0_30px_rgba(34,211,238,0.12)] transition hover:-translate-y-0.5 hover:bg-cyan-300">
              + Add Product
            </button>
          </div>

          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="group rounded-2xl border border-[#1F2937] bg-[#0D1117] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-[#111827]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-cyan-400">
                      <Icon size={19} />
                    </div>

                    <span
                      className={`
                        rounded-full px-2 py-1 text-[10px] font-medium
                        ${
                          stat.positive
                            ? "bg-emerald-400/10 text-emerald-400"
                            : "bg-amber-400/10 text-amber-400"
                        }
                      `}
                    >
                      {stat.change}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500">{stat.title}</p>

                  <p className="mt-1 text-2xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Main Grid */}
          <div className="mt-6 grid gap-6 xl:grid-cols-[1.7fr_1fr]">
            {/* Demand Forecast */}
            <div className="rounded-2xl border border-[#1F2937] bg-[#0D1117] p-5 lg:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-200">
                    Demand Forecast
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Predicted demand vs actual sales
                  </p>
                </div>

                <button className="rounded-lg border border-[#1F2937] px-3 py-1.5 text-xs text-slate-400 hover:text-white">
                  Last 30 days
                </button>
              </div>

              <div className="relative mt-8 h-[280px] overflow-hidden rounded-xl border border-[#1F2937] bg-[#070A0F]">
                {/* Grid */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="border-t border-[#1F2937]" />
                  <div className="border-t border-[#1F2937]" />
                  <div className="border-t border-[#1F2937]" />
                  <div className="border-t border-[#1F2937]" />
                  <div className="border-t border-[#1F2937]" />
                </div>

                {/* Fake chart for Day 1 UI */}
                <div className="absolute inset-x-6 bottom-8 top-8">
                  <svg
                    viewBox="0 0 700 220"
                    className="h-full w-full"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="forecastGradient"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#22D3EE"
                          stopOpacity="0.25"
                        />
                        <stop
                          offset="100%"
                          stopColor="#22D3EE"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 185 C70 175 90 145 145 160 C205 177 230 100 285 125 C340 150 370 82 425 105 C475 125 510 55 565 78 C615 98 650 38 700 55 L700 220 L0 220 Z"
                      fill="url(#forecastGradient)"
                    />

                    <path
                      d="M0 185 C70 175 90 145 145 160 C205 177 230 100 285 125 C340 150 370 82 425 105 C475 125 510 55 565 78 C615 98 650 38 700 55"
                      fill="none"
                      stroke="#22D3EE"
                      strokeWidth="3"
                      vectorEffect="non-scaling-stroke"
                    />

                    <path
                      d="M0 170 C80 165 110 150 150 168 C210 188 250 135 300 145 C350 155 390 115 440 130 C500 148 530 90 580 105 C630 120 660 85 700 95"
                      fill="none"
                      stroke="#6366F1"
                      strokeWidth="2"
                      strokeDasharray="7 7"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>

                <div className="absolute bottom-2 left-6 right-6 flex justify-between text-[9px] text-slate-600">
                  <span>Sep 01</span>
                  <span>Sep 08</span>
                  <span>Sep 15</span>
                  <span>Sep 22</span>
                  <span>Sep 30</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-5 text-[11px] text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  Forecast
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-400" />
                  Actual
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="rounded-2xl border border-[#1F2937] bg-[#0D1117] p-5 lg:p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-200">
                    AI Insights
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Intelligent signals from your data
                  </p>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-400/10 text-indigo-400">
                  ✦
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl border border-red-400/10 bg-red-400/[0.04] p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-red-400" />

                    <div>
                      <p className="text-xs font-medium text-slate-200">
                        Stockout Risk
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-slate-500">
                        Laptop X may run out of stock within 4 days.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-amber-400/10 bg-amber-400/[0.04] p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-amber-400" />

                    <div>
                      <p className="text-xs font-medium text-slate-200">
                        Overstock Detected
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-slate-500">
                        Product Y has remained unsold for 73 days.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />

                    <div>
                      <p className="text-xs font-medium text-slate-200">
                        Demand Signal
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-slate-500">
                        Product Z demand may increase next month.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#1F2937] py-2.5 text-xs font-medium text-slate-300 transition hover:border-slate-600 hover:bg-white/[0.03] hover:text-white">
                Open AI Analyst
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Inventory Health */}
          <div className="mt-6 rounded-2xl border border-[#1F2937] bg-[#0D1117] p-5 lg:p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-200">
                  Inventory Health
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Current inventory distribution
                </p>
              </div>

              <button className="text-xs text-cyan-400 hover:text-cyan-300">
                View inventory →
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {[
                {
                  label: "Healthy",
                  value: "1,842",
                  percentage: "76%",
                  className: "bg-emerald-400",
                },
                {
                  label: "Low Stock",
                  value: "324",
                  percentage: "13%",
                  className: "bg-amber-400",
                },
                {
                  label: "Overstock",
                  value: "184",
                  percentage: "8%",
                  className: "bg-indigo-400",
                },
                {
                  label: "Critical",
                  value: "88",
                  percentage: "3%",
                  className: "bg-red-400",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[#1F2937] bg-[#070A0F] p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${item.className}`}
                      />

                      <span className="text-xs text-slate-400">
                        {item.label}
                      </span>
                    </div>

                    <span className="text-[10px] text-slate-600">
                      {item.percentage}
                    </span>
                  </div>

                  <p className="mt-3 text-xl font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}