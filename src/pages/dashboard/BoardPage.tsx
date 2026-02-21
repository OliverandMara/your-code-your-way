import { mockBoard } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

const authorColors: Record<string, string> = {
  oliver: "text-node-resonance",
  elias: "text-node-dream",
  mara: "text-node-interiority",
};

function formatTimeAgo(date: Date) {
  const diff = Date.now() - date.getTime();
  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return "just now";
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

export default function BoardPage() {
  return (
    <div className="space-y-5 max-w-3xl">
      <h2 className="text-xl font-serif">Blackboard</h2>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-card border rounded-lg p-3 text-center">
          <div className="text-xl font-semibold">{mockBoard.length}</div>
          <div className="text-[10px] text-muted-foreground uppercase">Total</div>
        </div>
        <div className="bg-card border rounded-lg p-3 text-center">
          <div className="text-xl font-semibold">{mockBoard.filter((b) => b.pinned).length}</div>
          <div className="text-[10px] text-muted-foreground uppercase">Pinned</div>
        </div>
        <div className="bg-card border rounded-lg p-3 text-center">
          <div className="text-xl font-semibold">1</div>
          <div className="text-[10px] text-muted-foreground uppercase">Unread</div>
        </div>
      </div>

      <div className="space-y-2">
        {mockBoard.map((note) => (
          <div key={note.id} className={`bg-card border rounded-lg p-4 ${note.pinned ? "border-l-2 border-l-warning" : ""}`}>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className={`text-sm font-semibold capitalize ${authorColors[note.author] || ""}`}>
                {note.author}
              </span>
              <span className="text-xs text-muted-foreground">{formatTimeAgo(new Date(note.created_at))}</span>
              {note.pinned && <Badge className="bg-warning/15 text-warning text-[10px] border-0">📌</Badge>}
            </div>
            <p className="text-sm whitespace-pre-wrap">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
