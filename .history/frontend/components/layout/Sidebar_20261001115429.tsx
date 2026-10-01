"use client";

import {
  Activity,
  Bell,
  Boxes,
  CircleDollarSign,
  LayoutDashboard,
  Package,
  Settings,
  Truck,
  TrendingUp,
  Warehouse,
  X,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const navigation = [
  {
    label: "Overview",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Inventory",
    href: "/inventory",
    icon: Package,
  },
  {
    label: "Forecast",
    href: "/forecast",
    icon: TrendingUp,
  },
  {
    label: "Warehouses",
    href: "/warehouses",
    icon: Warehouse,
  },
  {
    label: "Suppliers",
    href: "/suppliers",
    icon: Truck,
  },
  {
    label: "Procurement",
    href: "/procurement",
    icon: Boxes,
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: Activity,
  },
];

const intelligenceNavigation = [
  {
    label: "AI Analyst",
    href: "/ai-analyst",
    icon: CircleDollarSign,
  },
  {
    label: "Alerts",
    href: "/alerts",
    icon: Bell,
    badge: "7",
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar({
  open,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <button
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-[260px]
          flex-col border-r border-[#1F2937]
          bg-[#0D1117]
          transition-transform duration-300
          lg:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-[76px] items-center justify-between border-b border-[#1F2937] px-6">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 ring-1 ring-cyan-400/20">
              <Boxes size={19} />
            </div>

            <div>
              <h1 className="text-[15px] font-semibold tracking-wide text-white">
                SupplyMind
              </h1>

              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Intelligence
              </p>
            </div>
          </Link>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-white/5 hover:text-white lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-3 py-6">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
            Workspace
          </p>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.href ||
                (item.href !== "/" &&
                  pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    group flex w-full items-center gap-3 rounded-xl
                    px-3 py-2.5 text-sm transition-all duration-200
                    ${
                      isActive
                        ? "bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/10"
                        : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-100"
                    }
                  `}
                >
                  <Icon
                    size={18}
                    className={
                      isActive
                        ? "text-cyan-400"
                        : "text-slate-500 group-hover:text-slate-300"
                    }
                  />

                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="my-7 h-px bg-[#1F2937]" />

          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
            Intelligence
          </p>

          <nav className="space-y-1">
            {intelligenceNavigation.map((item) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.href ||
                pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    group flex w-full items-center gap-3 rounded-xl
                    px-3 py-2.5 text-sm transition-all duration-200
                    ${
                      isActive
                        ? "bg-indigo-400/10 text-indigo-300 ring-1 ring-indigo-400/10"
                        : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-100"
                    }
                  `}
                >
                  <Icon
                    size={18}
                    className={
                      isActive
                        ? "text-indigo-400"
                        : "text-slate-500 group-hover:text-slate-300"
                    }
                  />

                  <span>{item.label}</span>

                  {item.badge && (
                    <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500/10 px-1.5 text-[10px] text-red-400">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Workspace Card */}
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
    </>
  );
}