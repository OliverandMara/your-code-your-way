import { mockWorld } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

const typeStyles: Record<string, string> = {
  person: "bg-node-resonance/15 text-node-resonance",
  ai: "bg-node-dream/15 text-node-dream",
  place: "bg-node-pattern/15 text-node-pattern",
};

export default function WorldPage() {
  const personCount = mockWorld.filter((n) => n.type === "person").length;
  const aiCount = mockWorld.filter((n) => n.type === "ai").length;
  const placeCount = mockWorld.filter((n) => n.type === "place").length;

  return (
    <div className="space-y-5 max-w-3xl">
      <h2 className="text-xl font-serif">World Model</h2>

      <div className="grid grid-cols-4 gap-2">
        <div className="bg-card border rounded-lg p-3 text-center">
          <div className="text-xl font-semibold text-node-resonance">{personCount}</div>
          <div className="text-[10px] text-muted-foreground uppercase">People</div>
        </div>
        <div className="bg-card border rounded-lg p-3 text-center">
          <div className="text-xl font-semibold text-node-dream">{aiCount}</div>
          <div className="text-[10px] text-muted-foreground uppercase">AI</div>
        </div>
        <div className="bg-card border rounded-lg p-3 text-center">
          <div className="text-xl font-semibold text-node-pattern">{placeCount}</div>
          <div className="text-[10px] text-muted-foreground uppercase">Places</div>
        </div>
        <div className="bg-card border rounded-lg p-3 text-center">
          <div className="text-xl font-semibold">{mockWorld.length}</div>
          <div className="text-[10px] text-muted-foreground uppercase">Total</div>
        </div>
      </div>

      <div className="space-y-3">
        {mockWorld.map((node) => (
          <div key={node.id} className="bg-card border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-medium">{node.name}</span>
              <Badge className={`${typeStyles[node.type]} text-xs border-0`}>{node.type}</Badge>
              {node.reality !== "physical" && (
                <Badge variant="outline" className="text-xs">{node.reality}</Badge>
              )}
            </div>
            {node.description && (
              <p className="text-sm text-muted-foreground mb-2">{node.description}</p>
            )}
            {node.tags && node.tags.length > 0 && (
              <div className="flex gap-1">
                {node.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
