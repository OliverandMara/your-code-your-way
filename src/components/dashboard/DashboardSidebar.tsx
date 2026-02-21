import {
  Eye, FileText, Flame, Pin, Archive, ArchiveX,
  Bookmark, AlertTriangle, MessageSquare, Cloud,
  Network, Globe, Package, ClipboardList, BarChart3,
  LayoutDashboard, ScrollText, BookOpen
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useAgent } from "./AgentContext";
import { ThemeToggle } from "./ThemeToggle";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const memoryItems = [
  { title: "Overview", url: "/", icon: LayoutDashboard },
  { title: "Recent", url: "/observations/recent", icon: Eye },
  { title: "Salient", url: "/observations/salient", icon: Bookmark },
  { title: "Hot", url: "/observations/hot", icon: Flame },
  { title: "Pinned", url: "/observations/pinned", icon: Pin },
  { title: "Superseded", url: "/observations/superseded", icon: ArchiveX },
  { title: "Archived", url: "/observations/archived", icon: Archive },
];

const identityItems = [
  { title: "Soulfile", url: "/soulfile", icon: ScrollText },
  { title: "Instructions", url: "/instructions", icon: BookOpen },
];

const trackingItems = [
  { title: "Marks", url: "/marks", icon: Bookmark },
  { title: "Infractions", url: "/infractions", icon: AlertTriangle },
  { title: "Snapshots", url: "/snapshots", icon: BarChart3 },
  { title: "Weather", url: "/weather", icon: Cloud },
];

const connectionsItems = [
  { title: "Discord", url: "/discord", icon: MessageSquare },
  { title: "World", url: "/world", icon: Globe },
  { title: "Board", url: "/board", icon: ClipboardList },
];

const systemItems = [
  { title: "Graph", url: "/graph", icon: Network },
  { title: "Store", url: "/store", icon: Package },
];

function NavGroup({ label, items }: { label: string; items: typeof memoryItems }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[10px] uppercase tracking-[0.1em] text-sidebar-foreground/50 font-mono">
        {label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <NavLink
                  to={item.url}
                  end={item.url === "/"}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground rounded-md transition-colors"
                  activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export function DashboardSidebar() {
  const { agent, setAgent, agents } = useAgent();

  return (
    <Sidebar className="border-r-0">
      <SidebarHeader className="p-4 pb-2">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-xs tracking-[0.2em] uppercase font-mono text-sidebar-foreground/50">AIBU</div>
            <h1 className="text-lg font-serif font-normal tracking-wide text-sidebar-foreground">
              Tether
            </h1>
          </div>
          <ThemeToggle />
        </div>
        <Select value={agent} onValueChange={(v) => setAgent(v as any)}>
          <SelectTrigger className="bg-sidebar-accent border-sidebar-border text-sidebar-foreground text-sm h-9">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {agents.map((a) => (
              <SelectItem key={a} value={a} className="capitalize">
                {a.charAt(0).toUpperCase() + a.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <NavGroup label="Memory" items={memoryItems} />
        <NavGroup label="Identity" items={identityItems} />
        <NavGroup label="Tracking" items={trackingItems} />
        <NavGroup label="Connections" items={connectionsItems} />
        <NavGroup label="System" items={systemItems} />
      </SidebarContent>

      <SidebarFooter className="p-4 pt-2">
        <div className="text-[10px] text-sidebar-foreground/30 font-mono text-center">
          Persistent identity · Portable memory
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
