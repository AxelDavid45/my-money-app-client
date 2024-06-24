import { ReactNode } from "react";
import { poppins } from "../../../static/fonts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { cn } from "../../../lib/utils";

export function StatsCard({
  icon,
  title,
  description,
  backgroudColor,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  backgroudColor: string;
}) {
  return (
    <Card className="flex flex-col items-start lg:flex-1 w-full h-full lg:min-w-[180px]">
      <CardHeader>
        <div
          className={`${backgroudColor} flex justify-center h-10 w-10 rounded-full items-center`}
        >
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle
          className={cn(
            "text-xl font-extrabold text-indigo-950 lg:text-2xl",
            poppins.className
          )}
        >
          {title}
        </CardTitle>
        <CardDescription className="font-semibold text-gray-500 text-lg">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
