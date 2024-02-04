import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Activity } from 'lucide-react';
interface CardProps {
  cardTitle: string;
  cardicon: string;
  cardMeasure: string;
}

export function AnalyticalCard(Props: CardProps) {
  return (
    <Card className="w-[200px] h-[125px]">
      <CardHeader>
        <CardTitle className="text-sm flex flex-row justify-between ">
          {Props.cardTitle}
          <Activity />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h4>{Props.cardMeasure}</h4>
      </CardContent>
      <CardFooter className="flex justify-between h-3"></CardFooter>
    </Card>
  );
}
