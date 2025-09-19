import { useState } from "react";
import { MapPinComponent } from "../map-pin";
import { StationPopup } from "../station-popup";
import { MapLegend } from "../map-legend";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const mockPins = [
  { 
    id: 1, 
    status: "safe" as const, 
    style: { top: "20%", left: "25%" },
    data: { name: "Mumbai Central", level: "12.5m", district: "Mumbai", longitude: "72.8777", latitude: "19.0760" }
  },
  { 
    id: 2, 
    status: "warning" as const, 
    style: { top: "15%", left: "35%" },
    data: { name: "Delhi North", level: "8.2m", district: "Delhi", longitude: "77.1025", latitude: "28.7041" }
  },
  { 
    id: 3, 
    status: "critical" as const, 
    style: { top: "45%", left: "30%" },
    data: { name: "Chennai East", level: "5.1m", district: "Chennai", longitude: "80.2707", latitude: "13.0827" }
  },
  { 
    id: 4, 
    status: "safe" as const, 
    style: { top: "40%", left: "35%" },
    data: { name: "Bangalore South", level: "15.8m", district: "Bangalore", longitude: "77.5946", latitude: "12.2958" }
  },
  { 
    id: 5, 
    status: "warning" as const, 
    style: { top: "25%", left: "45%" },
    data: { name: "Kolkata West", level: "7.3m", district: "Kolkata", longitude: "88.3639", latitude: "22.5726" }
  },
];

export function MapScreen() {
  const [selectedPin, setSelectedPin] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedPinData = mockPins.find(pin => pin.id === selectedPin);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Search Bar */}
      <div className="absolute top-4 left-4 right-4 z-10">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search stations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card shadow-md"
          />
        </div>
      </div>

      {/* Map of India Placeholder */}
      <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-green-100 rounded-lg flex items-center justify-center border-2 border-dashed border-green-300">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-medium text-green-700">Map of India</h3>
              <p className="text-sm text-green-600">Interactive groundwater monitoring stations</p>
            </div>
          </div>
        </div>

        {/* Map Pins */}
        {mockPins.map((pin) => (
          <MapPinComponent
            key={pin.id}
            status={pin.status}
            style={pin.style}
            onClick={() => setSelectedPin(pin.id === selectedPin ? null : pin.id)}
          />
        ))}

        {/* Station Popup */}
        {selectedPin && selectedPinData && (
          <StationPopup
            stationName={selectedPinData.data.name}
            level={selectedPinData.data.level}
            district={selectedPinData.data.district}
            longitude={selectedPinData.data.longitude}
            latitude={selectedPinData.data.latitude}
            onClose={() => setSelectedPin(null)}
            style={{ 
              top: `calc(${selectedPinData.style.top} + 30px)`, 
              left: selectedPinData.style.left 
            }}
          />
        )}

        {/* Legend */}
        <MapLegend />
      </div>
    </div>
  );
}