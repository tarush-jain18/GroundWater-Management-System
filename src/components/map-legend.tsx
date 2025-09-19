import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function MapLegend() {
  return (
    <Card className="absolute top-4 right-4 w-40 shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">Status Legend</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-xs">Safe</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <span className="text-xs">Warning</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-xs">Critical</span>
        </div>
      </CardContent>
    </Card>
  );
}