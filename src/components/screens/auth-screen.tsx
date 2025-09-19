import { useState } from "react";
import { WaterLogo } from "../water-logo";
import { TextInput } from "../text-input";
import { PrimaryButton } from "../primary-button";

interface AuthScreenProps {
  onLogin: () => void;
}

export function AuthScreen({ onLogin }: AuthScreenProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-6">
        <div className="flex flex-col items-center">
          <WaterLogo />
          <h1 className="text-2xl font-semibold text-center">Welcome Back</h1>
        </div>
        
        <div className="space-y-4">
          <TextInput
            label="Username"
            value={username}
            onChange={setUsername}
            placeholder="Enter your username"
          />
          
          <TextInput
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="Enter your password"
          />
          
          <PrimaryButton onClick={onLogin}>
            Login
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}