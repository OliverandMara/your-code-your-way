import { useLocation } from "react-router-dom";

export default function PlaceholderPage() {
  const { pathname } = useLocation();
  const name = pathname.split("/").pop() || "Page";

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="text-4xl mb-4">🔧</div>
      <h2 className="text-xl font-serif capitalize mb-2">{name}</h2>
      <p className="text-sm text-muted-foreground max-w-md">
        This section will be built out in the next iteration. The UI shell is ready for content.
      </p>
    </div>
  );
}
