import { FaMinus, FaPlus } from "react-icons/fa";
import { NavBarSide } from "./ui/nav-side";
import { TopNavBar } from "./ui/top-bar";
import { ReactNode } from "react";
import { FaIdCardClip } from "react-icons/fa6";
import { LuInbox } from "react-icons/lu";
import { BiPlus } from "react-icons/bi";
import { AiFillMedicineBox } from "react-icons/ai";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl text-purple-600 font-bold">Welcome, Axel </h1>
      <p className="text-gray-600">
        Continue your journey to better finance management and success
      </p>

      <section className="mt-10 bg-white rounded-lg flex items-center justify-center space-x-10 p-5 h-full min-h-[130px]">
        <MainButton
          icon={<FaMinus size={15} />}
          text="Add Expense"
          mainColor="bg-red-600 group-hover:bg-red-400"
          backgroundColor="bg-red-100"
        />

        <MainButton
          icon={<FaPlus size={15} />}
          text="Top Up"
          mainColor="bg-green-600 group-hover:bg-green-400"
          backgroundColor="bg-green-100"
        />

        <MainButton
          icon={<AiFillMedicineBox size={15} />}
          text="Create Budget"
          mainColor="bg-indigo-600 group-hover:bg-indigo-400"
          backgroundColor="bg-indigo-100"
        />
      </section>
    </main>
  );
}

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
