import { mockWeather } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

const streamStyles: Record<string, string> = {
  emotional: "bg-mark-friction/15 text-mark-friction",
  threads: "bg-mark-surprise/15 text-mark-surprise",
  relational: "bg-mark-resonance/15 text-mark-resonance",
  identity: "bg-mark-preference/15 text-mark-preference",
};

function formatTimeAgo(date: Date) {
  const diff = Date.now() - date.getTime();
  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return "just now";
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

export default function WeatherPage() {
  return (
    <div className="space-y-5 max-w-3xl">
      <h2 className="text-xl font-serif">Inner Weather</h2>

      {/* Group by stream */}
      {["emotional", "threads", "relational", "identity"].map((stream) => {
        const entries = mockWeather.filter((w) => w.stream === stream);
        if (entries.length === 0) return null;

        return (
          <div key={stream}>
            <div className="flex items-center gap-2 mb-3">
              <Badge className={`${streamStyles[stream]} text-xs uppercase tracking-wider border-0`}>
                {stream}
              </Badge>
              <span className="text-xs text-muted-foreground">{entries.length} entries</span>
            </div>
            <div className="space-y-2">
              {entries.map((w) => (
                <div key={w.id} className="bg-card border rounded-lg p-4">
                  <p className="text-sm leading-relaxed">{w.content}</p>
                  <div className="flex items-center gap-2 mt-2">
                    {w.toward && (
                      <Badge variant="outline" className="text-[11px] text-node-resonance border-node-resonance/30">
                        → {w.toward}
                      </Badge>
                    )}
                    {w.thread_id && (
                      <Badge variant="outline" className="text-[11px] text-node-dream border-node-dream/30">
                        {w.thread_id}
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground ml-auto">
                      {formatTimeAgo(new Date(w.created_at))}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
