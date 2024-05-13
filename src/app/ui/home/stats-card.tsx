import { ReactNode } from "react";
import { poppins } from "../../../static/fonts";

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
    <div className="bg-white flex flex-col items-start gap-y-5 p-4 lg:flex-1 w-full h-full  rounded-lg ">
      <div
        className={`${backgroudColor} flex justify-center h-10 w-10 rounded-full items-center p-3`}
      >
        {icon}
      </div>
      <p
        className={`${poppins.className} font-extrabold text-indigo-950 text-2xl`}
      >
        {title}
      </p>
      <p className="font-semibold text-gray-500 text-lg">{description}</p>
    </div>
  );
}
