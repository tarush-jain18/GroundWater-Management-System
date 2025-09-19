interface ChartPlaceholderProps {
  title: string;
  showPrediction?: boolean;
  height?: string;
}

export function ChartPlaceholder({ title, showPrediction = false, height = "h-64" }: ChartPlaceholderProps) {
  return (
    <div className={`${height} bg-muted rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center p-4`}>
      <div className="text-center space-y-2">
        <h3 className="font-medium text-muted-foreground">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-primary"></div>
            <span>Historical Data</span>
          </div>
          {showPrediction && (
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-accent border-dashed border-t-2 border-accent"></div>
              <span>Prediction</span>
            </div>
          )}
        </div>
        <div className="text-xs text-muted-foreground mt-4">
          <div>Y-Axis: Water Level (meters)</div>
          <div>X-Axis: Time Period</div>
        </div>
      </div>
    </div>
  );
}