"use client";

import {
  Bell,
  ChevronDown,
  Menu,
} from "lucide-react";

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({
  onMenuClick,
}: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-[#1F2937] bg-[#070A0F]/90 px-5 backdrop-blur-xl lg:px-8">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-xl border border-[#1F2937] bg-[#0D1117] p-2 text-slate-400 hover:text-white lg:hidden"
        >
          <Menu size={20} />
        </button>

        <div>
          <p className="text-xs text-slate-500">
            Workspace
          </p>

          <button className="mt-0.5 flex items-center gap-1 text-sm font-medium text-slate-200">
            Acme Manufacturing

            <ChevronDown
              size={14}
              className="text-slate-500"
            />
          </button>
        </div>
      </div>

      {/* Right */}
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
  );
}