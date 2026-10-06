import ProgressBar from "../ui/ProgressBar";
import StatusBadge from "../ui/StatusBadge";

const inventory = [
  {
    name: "Electronics",
    stock: 82,
    status: "healthy" as const,
  },
  {
    name: "Home Appliances",
    stock: 64,
    status: "healthy" as const,
  },
  {
    name: "Accessories",
    stock: 41,
    status: "warning" as const,
  },
  {
    name: "Computer Parts",
    stock: 18,
    status: "critical" as const,
  },
];

export default function InventoryHealth() {
  return (
    <div className="rounded-2xl border border-[#1F2937] bg-[#111827] p-6">
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">
          Inventory Health
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Current stock health across major categories
        </p>
      </div>

      <div className="space-y-6">
        {inventory.map((item) => (
          <div key={item.name}>
            
            <div className="mb-3 flex items-center justify-between">
              
              <span className="text-sm font-medium text-slate-200">
                {item.name}
              </span>

              <StatusBadge status={item.status} />

            </div>

            <ProgressBar value={item.stock} />
          </div>
        ))}
      </div>
    </div>
  );
}