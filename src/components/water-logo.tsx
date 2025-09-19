import { Droplets } from "lucide-react";

export function WaterLogo() {
  return (
    <div className="flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-8">
      <Droplets className="w-10 h-10 text-accent-foreground" />
    </div>
  );
}