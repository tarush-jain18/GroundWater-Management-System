import { useState } from "react";
import { AuthScreen } from "./components/screens/auth-screen";
import { DashboardScreen } from "./components/screens/dashboard-screen";
import { MapScreen } from "./components/screens/map-screen";
import { HistoricalDataScreen } from "./components/screens/historical-data-screen";
import { PredictionScreen } from "./components/screens/prediction-screen";
import { DownloadScreen } from "./components/screens/download-screen";
import { BottomNavigation } from "./components/bottom-navigation";

type Screen = "auth" | "dashboard" | "map" | "historical" | "prediction" | "download";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("auth");

  const handleLogin = () => {
    setCurrentScreen("dashboard");
  };

  const handleScreenChange = (screen: Exclude<Screen, "auth">) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "auth":
        return <AuthScreen onLogin={handleLogin} />;
      case "dashboard":
        return <DashboardScreen />;
      case "map":
        return <MapScreen />;
      case "historical":
        return <HistoricalDataScreen />;
      case "prediction":
        return <PredictionScreen />;
      case "download":
        return <DownloadScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderScreen()}
      
      {currentScreen !== "auth" && (
        <BottomNavigation 
          activeScreen={currentScreen as Exclude<Screen, "auth">}
          onScreenChange={handleScreenChange}
        />
      )}
    </div>
  );
}