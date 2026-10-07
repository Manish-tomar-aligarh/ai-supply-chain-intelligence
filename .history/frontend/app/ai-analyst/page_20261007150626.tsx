"use client";

import { useState } from "react";
import {
  BrainCircuit,
  Send,
  FileText,
  Sparkles,
} from "lucide-react";

import DashboardLayout from "@/components/layout/DashboardLayout";

export default function AIAnalystPage() {
  const [message, setMessage] = useState("");

  return (
    <DashboardLayout>
      <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-400/10 text-indigo-400">
              <BrainCircuit size={28} />
            </div>

            <p className="mt-5 text-sm text-indigo-400">
              AI Analyst
            </p>

            <h1 className="mt-1 text-3xl font-bold text-white">
              Ask your supply chain
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Ask questions about inventory, suppliers, demand
              forecasts and business operations.
            </p>

          </div>


          <div className="mt-10 rounded-2xl border border-[#1F2937] bg-[#111827] p-5">

            <div className="flex min-h-[360px] flex-col items-center justify-center text-center">

              <Sparkles
                size={28}
                className="text-cyan-400"
              />

              <h2 className="mt-4 text-lg font-semibold text-white">
                How can I help?
              </h2>

              <p className="mt-2 max-w-md text-sm text-slate-400">
                Try asking: "Which products are at high stockout risk?"
              </p>

            </div>


            <div className="border-t border-[#1F2937] pt-5">

              <div className="flex gap-3">

                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask your supply chain question..."
                  className="flex-1 rounded-xl border border-[#1F2937] bg-[#0D1117] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-indigo-400/50"
                />

                <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500 text-white transition hover:bg-indigo-400">
                  <Send size={18} />
                </button>

              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <FileText size={14} />
                Connect business documents to improve AI answers.
              </div>

            </div>

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}