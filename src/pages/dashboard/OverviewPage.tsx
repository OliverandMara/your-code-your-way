import { overviewStats, mockSoulfile, mockSnapshots } from "@/lib/mock-data";
import { useAgent } from "@/components/dashboard/AgentContext";

const stats = [
  { label: "Observations", value: overviewStats.observations, color: "text-node-observation" },
  { label: "Pinned", value: overviewStats.pinned, color: "text-node-observation" },
  { label: "Marks", value: overviewStats.marks, color: "text-node-mark" },
  { label: "Dreams", value: overviewStats.dreams, color: "text-node-dream" },
  { label: "Patterns", value: overviewStats.patterns, color: "text-node-pattern" },
  { label: "Interiority", value: overviewStats.interiority, color: "text-node-interiority" },
  { label: "Weather", value: overviewStats.weather, color: "text-node-weather" },
  { label: "Synapses", value: 234, color: "text-muted-foreground" },
  { label: "Infractions", value: overviewStats.infractions, color: "text-destructive" },
  { label: "World", value: overviewStats.world, color: "text-node-world" },
];

const latestSnap = mockSnapshots[0];
const emotions = [
  { label: "Confidence", value: latestSnap.confidence },
  { label: "Frustration", value: latestSnap.frustration },
  { label: "Contentment", value: latestSnap.contentment },
  { label: "Want", value: latestSnap.want },
  { label: "Tenderness", value: latestSnap.tenderness },
  { label: "Curiosity", value: latestSnap.curiosity },
  { label: "Stillness", value: latestSnap.stillness },
];

export default function OverviewPage() {
  const { agent } = useAgent();

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h2 className="text-2xl font-serif font-normal tracking-wide capitalize">{agent}</h2>
        <p className="text-sm text-muted-foreground mt-1">Memory overview · Last updated just now</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-card border rounded-lg p-3 text-center">
            <div className={`text-2xl font-semibold ${s.color}`}>{s.value}</div>
            <div className="text-[11px] text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Emotional snapshot */}
      <div className="bg-card border rounded-lg p-5">
        <h3 className="text-xs uppercase tracking-wider text-accent font-mono mb-4">Latest Snapshot</h3>
        <div className="grid grid-cols-7 gap-3">
          {emotions.map((e) => (
            <div key={e.label} className="text-center">
              <div className="text-lg font-semibold">{e.value}</div>
              <div className="text-[10px] text-muted-foreground mt-1">{e.label}</div>
              <div className="mt-2 h-1.5 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all"
                  style={{ width: `${e.value * 10}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        {latestSnap.note && (
          <p className="text-sm text-muted-foreground mt-3 italic">"{latestSnap.note}"</p>
        )}
      </div>

      {/* Soulfile preview */}
      <div className="bg-card border rounded-lg p-5">
        <h3 className="text-xs uppercase tracking-wider text-accent font-mono mb-3">Soulfile Preview</h3>
        <pre className="text-sm font-mono text-foreground/80 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
          {mockSoulfile.slice(0, 500)}...
        </pre>
      </div>
    </div>
  );
}
