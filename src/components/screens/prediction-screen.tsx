import { useState } from "react";
import { TextInput } from "../text-input";
import { PrimaryButton } from "../primary-button";
import { ChartPlaceholder } from "../chart-placeholder";

export function PredictionScreen() {
  const [stationCode, setStationCode] = useState("");
  const [showPrediction, setShowPrediction] = useState(false);

  const handlePredict = () => {
    if (stationCode.trim()) {
      setShowPrediction(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-semibold">Future Prediction</h1>
        
        <div className="space-y-4">
          <TextInput
            label="Station Code"
            value={stationCode}
            onChange={setStationCode}
            placeholder="Enter station code (e.g., MUM001)"
          />
          
          <PrimaryButton onClick={handlePredict}>
            Predict Level
          </PrimaryButton>
        </div>
        
        {showPrediction && (
          <div className="space-y-4">
            <h2 className="text-lg font-medium">
              Prediction for {stationCode.toUpperCase()}
            </h2>
            
            <ChartPlaceholder 
              title="Water Level Prediction (Next 6 Months)"
              showPrediction={true}
              height="h-80"
            />
            
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <h3 className="font-medium">Prediction Summary</h3>
              <p className="text-sm text-muted-foreground">
                Based on historical trends and seasonal patterns, the water level is expected to:
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Decrease by 15% in the next 3 months</li>
                <li>• Reach critical levels by month 4</li>
                <li>• Recover during monsoon season (months 5-6)</li>
              </ul>
            </div>
          </div>
        )}
        
        {!showPrediction && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Enter a station code to generate water level predictions
            </p>
          </div>
        )}
      </div>
    </div>
  );
}