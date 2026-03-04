import { Brain, Database, Globe, PenSquare, Server } from "lucide-react";

const toolbelt = [
  { icon: Globe, label: "Web Systems" },
  { icon: Brain, label: "ML Workflows" },
  { icon: Server, label: "Backend Design" },
  { icon: Database, label: "Data Modeling" },
  { icon: PenSquare, label: "Clear Writing" }
];

export function ToolbeltRow() {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {toolbelt.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 rounded-xl border border-ink/12 bg-white/70 px-3 py-2 text-sm text-ink/80"
        >
          <item.icon className="h-4 w-4 text-accent" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
