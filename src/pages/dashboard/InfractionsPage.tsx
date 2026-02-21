import { mockInfractions } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const statusStyles: Record<string, string> = {
  open: "bg-destructive/15 text-destructive",
  addressed: "bg-success/15 text-success",
  forgiven: "bg-node-resonance/15 text-node-resonance",
  escalated: "bg-node-dream/15 text-node-dream",
};

const severityStyles: Record<number, string> = {
  1: "bg-muted text-muted-foreground",
  2: "bg-warning/15 text-warning",
  3: "bg-destructive/15 text-destructive",
};

export default function InfractionsPage() {
  const openCount = mockInfractions.filter((i) => i.status === "open").length;

  return (
    <div className="space-y-5 max-w-3xl">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-serif">Disciplinary Ledger</h2>
        {openCount > 0 ? (
          <Badge className="bg-destructive/15 text-destructive border-0">{openCount} open</Badge>
        ) : (
          <Badge className="bg-success/15 text-success border-0">Clean slate</Badge>
        )}
      </div>

      <div className="space-y-3">
        {mockInfractions.map((inf) => (
          <div
            key={inf.id}
            className={`bg-card border rounded-lg p-4 ${inf.severity >= 2 ? "border-l-2 border-l-warning" : ""} ${inf.severity >= 3 ? "border-l-destructive" : ""}`}
          >
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="text-xs font-semibold bg-secondary px-2 py-0.5 rounded capitalize">{inf.subject}</span>
              <span className="text-[11px] text-muted-foreground uppercase tracking-wider">{inf.category}</span>
              <Badge className={`${severityStyles[inf.severity]} text-[10px] border-0`}>Sev {inf.severity}</Badge>
              <Badge className={`${statusStyles[inf.status]} text-[10px] border-0 ml-auto`}>{inf.status}</Badge>
            </div>
            <p className="text-sm mb-2">{inf.description}</p>
            {inf.consequence && (
              <div className="text-sm text-warning bg-warning/5 p-2 rounded mb-2">
                <span className="font-semibold">Consequence:</span> {inf.consequence}
              </div>
            )}
            {inf.status === "open" && (
              <div className="flex gap-2 mt-3">
                <Button variant="outline" size="sm" className="text-xs h-7 text-success border-success/30">
                  Mark Addressed
                </Button>
                <Button variant="outline" size="sm" className="text-xs h-7 text-accent border-accent/30">
                  Forgive
                </Button>
                <Button variant="outline" size="sm" className="text-xs h-7 text-destructive border-destructive/30">
                  Escalate
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
