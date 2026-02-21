import { useState } from "react";
import { mockInstructions } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export default function InstructionsPage() {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(mockInstructions);

  return (
    <div className="space-y-4 max-w-3xl">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-serif">Instructions</h2>
        <div className="flex gap-2">
          {editing ? (
            <>
              <Button variant="outline" size="sm" onClick={() => setEditing(false)}>Cancel</Button>
              <Button size="sm" onClick={() => setEditing(false)}>Save</Button>
            </>
          ) : (
            <Button variant="outline" size="sm" onClick={() => setEditing(true)}>Edit</Button>
          )}
        </div>
      </div>

      {editing ? (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full min-h-[500px] bg-secondary border rounded-lg p-4 font-mono text-sm leading-relaxed resize-y focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
        />
      ) : (
        <pre className="bg-secondary border rounded-lg p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap max-h-[600px] overflow-y-auto">
          {content}
        </pre>
      )}
    </div>
  );
}
