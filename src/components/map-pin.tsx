import { MapPin } from "lucide-react";

interface MapPinComponentProps {
  status: "safe" | "warning" | "critical";
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function MapPinComponent({ status, onClick, style }: MapPinComponentProps) {
  const colors = {
    safe: "text-green-500",
    warning: "text-yellow-500",
    critical: "text-red-500"
  };

  return (
    <div 
      className="absolute cursor-pointer hover:scale-110 transition-transform"
      onClick={onClick}
      style={style}
    >
      <MapPin className={`w-6 h-6 ${colors[status]} drop-shadow-md`} />
    </div>
  );
}