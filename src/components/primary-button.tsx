import { Button } from "./ui/button";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export function PrimaryButton({ children, onClick, type = "button", className = "" }: PrimaryButtonProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      className={`w-full bg-primary text-primary-foreground hover:bg-primary/90 ${className}`}
    >
      {children}
    </Button>
  );
}