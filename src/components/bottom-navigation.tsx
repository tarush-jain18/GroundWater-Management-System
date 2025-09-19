import { Home, Map, BarChart3, TrendingUp, Download } from "lucide-react";

type Screen = "dashboard" | "map" | "historical" | "prediction" | "download";

interface BottomNavigationProps {
  activeScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

export function BottomNavigation({ activeScreen, onScreenChange }: BottomNavigationProps) {
  const navItems = [
    { id: "dashboard" as const, icon: Home, label: "Dashboard" },
    { id: "map" as const, icon: Map, label: "Map" },
    { id: "historical" as const, icon: BarChart3, label: "History" },
    { id: "prediction" as const, icon: TrendingUp, label: "Predict" },
    { id: "download" as const, icon: Download, label: "Download" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onScreenChange(item.id)}
              className={`flex flex-col items-center py-2 px-3 min-w-0 flex-1 ${
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs truncate">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}