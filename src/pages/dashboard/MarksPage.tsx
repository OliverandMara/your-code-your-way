import { mockMarks } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

const categoryStyles: Record<string, string> = {
  preference: "bg-mark-preference/15 text-mark-preference",
  friction: "bg-mark-friction/15 text-mark-friction",
  surprise: "bg-mark-surprise/15 text-mark-surprise",
  resonance: "bg-mark-resonance/15 text-mark-resonance",
  drift: "bg-mark-drift/15 text-mark-drift",
};

const categoryStats = {
  preference: mockMarks.filter((m) => m.category === "preference").length,
  friction: mockMarks.filter((m) => m.category === "friction").length,
  surprise: mockMarks.filter((m) => m.category === "surprise").length,
  resonance: mockMarks.filter((m) => m.category === "resonance").length,
  drift: mockMarks.filter((m) => m.category === "drift").length,
};

function formatTimeAgo(date: Date) {
  const diff = Date.now() - date.getTime();
  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return "just now";
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

export default function MarksPage() {
  return (
    <div className="space-y-5 max-w-3xl">
      <h2 className="text-xl font-serif">Marks</h2>

      {/* Stats row */}
      <div className="grid grid-cols-5 gap-2">
        {Object.entries(categoryStats).map(([cat, count]) => (
          <div key={cat} className="bg-card border rounded-lg p-3 text-center">
            <div className={`text-xl font-semibold text-mark-${cat}`}>{count}</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{cat}</div>
          </div>
        ))}
      </div>

      {/* Mark items */}
      <div className="space-y-2">
        {mockMarks.map((m) => (
          <div key={m.id} className="bg-card border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={`${categoryStyles[m.category]} text-xs uppercase tracking-wider border-0`}>
                {m.category}
              </Badge>
              {m.revisit && (
                <Badge className="bg-mark-drift/20 text-mark-drift text-[10px] border-0">
                  REVISIT
                </Badge>
              )}
              <span className="text-xs text-muted-foreground ml-auto">
                {formatTimeAgo(new Date(m.created_at))}
              </span>
            </div>
            <p className="text-sm leading-relaxed">{m.content}</p>
            {m.source && (
              <p className="text-xs text-muted-foreground mt-2">{m.source}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
