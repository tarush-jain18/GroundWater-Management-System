import { Card, CardContent } from "./ui/card";

interface SummaryCardProps {
  title: string;
  value: string | number;
  className?: string;
}

export function SummaryCard({ title, value, className = "" }: SummaryCardProps) {
  return (
    <Card className={`flex-1 ${className}`}>
      <CardContent className="p-4 text-center">
        <p className="text-2xl font-semibold text-primary mb-1">{value}</p>
        <p className="text-sm text-muted-foreground">{title}</p>
      </CardContent>
    </Card>
  );
}