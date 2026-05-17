export type ServiceStatus = "healthy" | "degraded" | "down";

export function getStatus(uptime: number): ServiceStatus {
  if (uptime > 0.995) return "healthy";
  if (uptime > 0.95) return "degraded";
  return "down";
}

export function statusEmoji(s: ServiceStatus): string {
  return s === "healthy" ? "🟢" : s === "degraded" ? "🟡" : "🔴";
}
