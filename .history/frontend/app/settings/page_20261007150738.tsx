"use client";

import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [forecastAlerts, setForecastAlerts] = useState(true);
  const [stockAlerts, setStockAlerts] = useState(true);

  return (
    <DashboardLayout>
      <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1000px]">

          <div>
            <p className="text-sm text-cyan-400">
              Settings
            </p>

            <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              Workspace Settings
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Manage your SupplyMind workspace preferences.
            </p>
          </div>


          <div className="mt-8 space-y-6">

            {/* Workspace */}

            <section className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6">

              <h2 className="text-lg font-semibold text-white">
                Workspace
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Basic workspace information.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="text-sm text-slate-400">
                    Workspace Name
                  </label>

                  <input
                    defaultValue="SupplyMind Demo"
                    className="mt-2 w-full rounded-xl border border-[#1F2937] bg-[#0D1117] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/50"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-400">
                    Industry
                  </label>

                  <input
                    defaultValue="Retail & E-commerce"
                    className="mt-2 w-full rounded-xl border border-[#1F2937] bg-[#0D1117] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/50"
                  />
                </div>

              </div>

            </section>


            {/* Notifications */}

            <section className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6">

              <h2 className="text-lg font-semibold text-white">
                Notifications
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Choose which alerts you want to receive.
              </p>


              <div className="mt-6 space-y-5">

                {[
                  [
                    "General notifications",
                    notifications,
                    setNotifications,
                  ],
                  [
                    "Stockout alerts",
                    stockAlerts,
                    setStockAlerts,
                  ],
                  [
                    "Forecast alerts",
                    forecastAlerts,
                    setForecastAlerts,
                  ],
                ].map(([title, value, setter]) => (
                  <div
                    key={title as string}
                    className="flex items-center justify-between gap-4"
                  >

                    <div>
                      <p className="font-medium text-white">
                        {title as string}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Receive important updates about your supply chain.
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        (setter as React.Dispatch<React.SetStateAction<boolean>>)(
                          !(value as boolean)
                        )
                      }
                      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                        value
                          ? "bg-cyan-400"
                          : "bg-slate-700"
                      }`}
                    >
                      <span
                        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                          value
                            ? "left-6"
                            : "left-1"
                        }`}
                      />
                    </button>

                  </div>
                ))}

              </div>

            </section>


            <button className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              Save Changes
            </button>

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}