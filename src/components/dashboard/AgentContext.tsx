import { createContext, useContext, useState, ReactNode } from "react";
import { AGENTS, type AgentId } from "@/lib/mock-data";

interface AgentContextType {
  agent: AgentId;
  setAgent: (agent: AgentId) => void;
  agents: readonly AgentId[];
}

const AgentContext = createContext<AgentContextType | null>(null);

export function AgentProvider({ children }: { children: ReactNode }) {
  const [agent, setAgent] = useState<AgentId>(AGENTS[0]);

  return (
    <AgentContext.Provider value={{ agent, setAgent, agents: AGENTS }}>
      {children}
    </AgentContext.Provider>
  );
}

export function useAgent() {
  const ctx = useContext(AgentContext);
  if (!ctx) throw new Error("useAgent must be used within AgentProvider");
  return ctx;
}
