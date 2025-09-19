import { SummaryCard } from "../summary-card";
import { StationInfoCard } from "../station-info-card";
import { ScrollArea } from "../ui/scroll-area";

const mockStations = [
  { name: "Mumbai Central", code: "MUM001", waterLevel: "12.5m", status: "safe" as const },
  { name: "Delhi North", code: "DEL002", waterLevel: "8.2m", status: "warning" as const },
  { name: "Chennai East", code: "CHE003", waterLevel: "5.1m", status: "critical" as const },
  { name: "Bangalore South", code: "BLR004", waterLevel: "15.8m", status: "safe" as const },
  { name: "Kolkata West", code: "KOL005", waterLevel: "7.3m", status: "warning" as const },
  { name: "Hyderabad Central", code: "HYD006", waterLevel: "11.2m", status: "safe" as const },
];

export function DashboardScreen() {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        
        <div className="flex gap-4">
          <SummaryCard title="Total Stations" value="156" />
          <SummaryCard title="Critical Alerts" value="12" />
          <SummaryCard title="Safe Stations" value="132" />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-medium">All Stations</h2>
          
          <ScrollArea className="h-96">
            <div className="space-y-3">
              {mockStations.map((station) => (
                <StationInfoCard
                  key={station.code}
                  name={station.name}
                  code={station.code}
                  waterLevel={station.waterLevel}
                  status={station.status}
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}