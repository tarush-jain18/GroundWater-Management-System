import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface TextInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function TextInput({ label, type = "text", placeholder, value, onChange }: TextInputProps) {
  return (
    <div className="w-full space-y-2">
      <Label htmlFor={label.toLowerCase()}>{label}</Label>
      <Input
        id={label.toLowerCase()}
        type={type}
        placeholder={placeholder || label}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full"
      />
    </div>
  );
}