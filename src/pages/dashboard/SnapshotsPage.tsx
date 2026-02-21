import { mockSnapshots } from "@/lib/mock-data";

const emotionLabels = ["confidence", "frustration", "contentment", "want", "tenderness", "curiosity", "stillness"] as const;

export default function SnapshotsPage() {
  return (
    <div className="space-y-5 max-w-4xl">
      <h2 className="text-xl font-serif">Emotional Snapshots</h2>

      <div className="space-y-4">
        {mockSnapshots.map((snap) => (
          <div key={snap.id} className="bg-card border rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium">
                {new Date(snap.created_at).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
              </span>
              {snap.note && <span className="text-xs text-muted-foreground italic">"{snap.note}"</span>}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {emotionLabels.map((emo) => (
                <div key={emo} className="text-center">
                  <div className="text-sm font-semibold">{snap[emo]}</div>
                  <div className="text-[9px] text-muted-foreground capitalize mt-0.5">{emo}</div>
                  <div className="mt-1.5 h-1 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full"
                      style={{ width: `${snap[emo] * 10}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
