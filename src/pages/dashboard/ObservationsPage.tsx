import { useParams } from "react-router-dom";
import { mockObservations } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

const tierLabels: Record<string, string> = {
  recent: "Recent Observations",
  salient: "High Salience",
  hot: "Hot (Recently Active)",
  pinned: "Pinned Memories",
  superseded: "Superseded",
  archived: "Archived",
};

export default function ObservationsPage() {
  const { tier = "recent" } = useParams();
  const title = tierLabels[tier] || "Observations";

  // Filter mock data based on tier
  const obs = tier === "pinned"
    ? mockObservations.filter((o) => o.pinned)
    : mockObservations;

  return (
    <div className="space-y-4 max-w-3xl">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-serif">{title}</h2>
        <span className="text-sm text-muted-foreground">{obs.length} observations</span>
      </div>

      {obs.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          No {tier} observations found.
        </div>
      ) : (
        <div className="space-y-3">
          {obs.map((o) => (
            <div key={o.id} className="bg-card border rounded-lg p-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 text-xs">
                    {o.kind}
                  </Badge>
                  <Badge className="bg-success text-success-foreground text-xs">
                    S: {o.decayed_salience ?? o.salience}
                  </Badge>
                  {o.pinned && (
                    <Badge className="bg-success/20 text-success text-xs">PINNED</Badge>
                  )}
                  {o.tags?.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                  ))}
                </div>
                <code className="text-[10px] text-muted-foreground font-mono shrink-0 cursor-pointer hover:text-foreground">
                  {o.id.slice(0, 10)}
                </code>
              </div>
              <p className="text-sm leading-relaxed mb-3">{o.content}</p>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span>Author: {o.author}</span>
                <span>{new Date(o.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
