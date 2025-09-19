import { useState } from "react";
import { TextInput } from "../text-input";
import { PrimaryButton } from "../primary-button";
import { ChartPlaceholder } from "../chart-placeholder";

export function HistoricalDataScreen() {
  const [stationCode, setStationCode] = useState("");
  const [showChart, setShowChart] = useState(false);

  const handleSearch = () => {
    if (stationCode.trim()) {
      setShowChart(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-semibold">Historical Data</h1>
        
        <div className="space-y-4">
          <TextInput
            label="Station Code"
            value={stationCode}
            onChange={setStationCode}
            placeholder="Enter station code (e.g., MUM001)"
          />
          
          <PrimaryButton onClick={handleSearch}>
            Search
          </PrimaryButton>
        </div>
        
        {showChart && (
          <div className="space-y-4">
            <h2 className="text-lg font-medium">
              Historical Data for {stationCode.toUpperCase()}
            </h2>
            
            <ChartPlaceholder 
              title="Water Level Trends (Last 12 Months)"
              height="h-80"
            />
          </div>
        )}
        
        {!showChart && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Enter a station code to view historical data
            </p>
          </div>
        )}
      </div>
    </div>
  );
}