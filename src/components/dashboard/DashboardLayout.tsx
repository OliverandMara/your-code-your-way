import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { AgentProvider, useAgent } from "./AgentContext";
import { FileText } from "lucide-react";

function DashboardHeader() {
  const { agent } = useAgent();
  return (
    <header className="h-12 flex items-center gap-3 border-b px-4 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
      <SidebarTrigger />
      <div className="h-4 w-px bg-border" />
      <span className="text-sm text-muted-foreground capitalize font-mono">{agent}</span>
    </header>
  );
}

function DashboardInner() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <DashboardHeader />
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export function DashboardLayout() {
  return (
    <AgentProvider>
      <DashboardInner />
    </AgentProvider>
  );
}
