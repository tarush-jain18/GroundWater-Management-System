import { useState } from "react";
import { TextInput } from "../text-input";
import { DatePicker } from "../date-picker";
import { RadioGroupComponent } from "../radio-group-component";
import { PrimaryButton } from "../primary-button";
import { Download } from "lucide-react";

export function DownloadScreen() {
  const [stationCode, setStationCode] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fileFormat, setFileFormat] = useState("csv");

  const handleDownload = () => {
    // Mock download functionality
    alert(`Downloading ${fileFormat.toUpperCase()} data for ${stationCode} from ${startDate} to ${endDate}`);
  };

  const formatOptions = [
    { value: "csv", label: "CSV Format" },
    { value: "pdf", label: "PDF Report" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-semibold">Download Station Data</h1>
        
        <div className="space-y-6">
          <TextInput
            label="Station Code"
            value={stationCode}
            onChange={setStationCode}
            placeholder="Enter station code (e.g., MUM001)"
          />
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={setStartDate}
            />
            
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={setEndDate}
            />
          </div>
          
          <RadioGroupComponent
            title="File Format"
            options={formatOptions}
            value={fileFormat}
            onChange={setFileFormat}
          />
          
          <div className="pt-4">
            <PrimaryButton 
              onClick={handleDownload}
              className="flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Data
            </PrimaryButton>
          </div>
        </div>
        
        <div className="bg-muted p-4 rounded-lg space-y-2">
          <h3 className="font-medium">Download Information</h3>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>• CSV files contain raw data with timestamps and measurements</p>
            <p>• PDF reports include charts, summaries, and analysis</p>
            <p>• Maximum date range allowed: 1 year</p>
            <p>• Large datasets may take a few minutes to generate</p>
          </div>
        </div>
      </div>
    </div>
  );
}