interface SectionHeaderProps {
  title: string;
  description?: string;
  action?: string;
}

export default function SectionHeader({
  title,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      
      <div>
        <h2 className="text-lg font-semibold text-white">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-sm text-slate-400">
            {description}
          </p>
        )}
      </div>

      {action && (
        <button className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300">
          {action}
        </button>
      )}
    </div>
  );
}