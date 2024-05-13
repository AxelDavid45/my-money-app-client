import { ReactNode } from "react";

export function MainButton({
  text,
  mainColor,
  backgroundColor,
  icon,
}: {
  text: string;
  icon: ReactNode;
  mainColor: string;
  backgroundColor: string;
}) {
  return (
    <div className="flex items-center flex-col justify-center">
      <button
        className={`${backgroundColor} h-16 group w-16 rounded-full flex justify-center items-center flex-col `}
      >
        <div
          className={`${mainColor} text-white h-8 w-8 rounded-full flex items-center  justify-center flex-col`}
        >
          {icon}
        </div>
      </button>
      <p className="mt-2 font-semibold text-gray-500">{text}</p>
    </div>
  );
}
