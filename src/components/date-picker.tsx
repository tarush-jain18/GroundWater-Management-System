import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface DatePickerProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function DatePicker({ label, value, onChange }: DatePickerProps) {
  return (
    <div className="w-full space-y-2">
      <Label htmlFor={label.toLowerCase().replace(' ', '-')}>{label}</Label>
      <Input
        id={label.toLowerCase().replace(' ', '-')}
        type="date"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full"
      />
    </div>
  );
}