import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { X } from "lucide-react";

interface StationPopupProps {
  stationName: string;
  level: string;
  district: string;
  longitude: string;
  latitude: string;
  onClose: () => void;
  style?: React.CSSProperties;
}

export function StationPopup({ 
  stationName, 
  level, 
  district, 
  longitude, 
  latitude, 
  onClose,
  style 
}: StationPopupProps) {
  return (
    <Card className="absolute z-10 w-64 shadow-lg" style={style}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">{stationName}</CardTitle>
          <button 
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-2">
        <div>
          <span className="text-sm font-medium">Level: </span>
          <span className="text-sm">{level}</span>
        </div>
        <div>
          <span className="text-sm font-medium">District: </span>
          <span className="text-sm">{district}</span>
        </div>
        <div>
          <span className="text-sm font-medium">Longitude: </span>
          <span className="text-sm">{longitude}</span>
        </div>
        <div>
          <span className="text-sm font-medium">Latitude: </span>
          <span className="text-sm">{latitude}</span>
        </div>
      </CardContent>
    </Card>
  );
}