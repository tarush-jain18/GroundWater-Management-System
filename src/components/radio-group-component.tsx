import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

interface RadioGroupComponentProps {
  title: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
}

export function RadioGroupComponent({ title, options, value, onChange }: RadioGroupComponentProps) {
  return (
    <div className="space-y-3">
      <Label className="text-base font-medium">{title}</Label>
      <RadioGroup value={value} onValueChange={onChange}>
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={option.value} />
            <Label htmlFor={option.value}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}