import DashboardLayout from "@/components/layout/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-[1500px] px-5 py-8 lg:px-8">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
          System
        </p>

        <h1 className="mt-2 text-3xl font-semibold text-white">
          Settings
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage workspace, profile and application preferences.
        </p>

        <div className="mt-8 flex min-h-[350px] items-center justify-center rounded-2xl border border-dashed border-[#1F2937] bg-[#0D1117]">
          <p className="text-xs text-slate-600">
            Settings module coming soon
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}