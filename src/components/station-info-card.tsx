import { Card, CardContent } from "./ui/card";

interface StationInfoCardProps {
  name: string;
  code: string;
  waterLevel: string;
  status: "safe" | "warning" | "critical";
  onClick?: () => void;
}

export function StationInfoCard({ name, code, waterLevel, status, onClick }: StationInfoCardProps) {
  const statusColors = {
    safe: "bg-green-500",
    warning: "bg-yellow-500", 
    critical: "bg-red-500"
  };

  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={onClick}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-3 h-3 rounded-full ${statusColors[status]}`}></div>
              <h3 className="font-medium">{name}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-1">Code: {code}</p>
            <p className="text-sm">Water Level: {waterLevel}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}