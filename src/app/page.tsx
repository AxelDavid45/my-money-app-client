import {
  FaLongArrowAltDown,
  FaLongArrowAltUp,
  FaMinus,
  FaPiggyBank,
  FaPlus,
} from "react-icons/fa";
import { NavBarSide } from "./ui/nav-side";
import { TopNavBar } from "./ui/top-bar";
import React, { ReactNode } from "react";
import { FaIdCardClip } from "react-icons/fa6";
import { LuInbox } from "react-icons/lu";
import { BiPlus, BiSolidBank } from "react-icons/bi";
import { AiFillMedicineBox } from "react-icons/ai";
import { BsBank2 } from "react-icons/bs";
import { Poppins } from "next/font/google";
import { poppins } from "../static/fonts";

const font = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="container">
      <h1 className="text-2xl text-purple-600 font-bold">Welcome, Axel </h1>
      <p className="text-gray-600">
        Continue your journey to better finance management and success
      </p>

      <section className="mt-10 bg-white rounded-lg flex items-center justify-center space-x-10 py-10 h-full min-h-[130px]">
        <MainButton
          icon={<FaMinus size={15} />}
          text="Add Expense"
          mainColor="bg-red-600 group-hover:bg-red-400"
          backgroundColor="bg-red-100"
        />

        <MainButton
          icon={<FaPlus size={15} />}
          text="Top Up"
          mainColor="bg-emerald-600 group-hover:bg-emerald-400"
          backgroundColor="bg-emerald-100"
        />

        <MainButton
          icon={<AiFillMedicineBox size={15} />}
          text="Create Budget"
          mainColor="bg-indigo-600 group-hover:bg-indigo-400"
          backgroundColor="bg-indigo-100"
        />
      </section>

      <section className="mt-10 flex justify-between flex-wrap gap-y-3 gap-x-10">
        <StatsCard
          icon={<BiSolidBank size={30} />}
          title="$100,000.00"
          backgroudColor="bg-purple-100 text-purple-600"
          description="Total Balance"
        />

        <StatsCard
          icon={<FaPiggyBank size={30} />}
          title="10"
          backgroudColor="bg-blue-100 text-blue-400"
          description="Budgets"
        />

        <StatsCard
          icon={<FaLongArrowAltUp size={30} />}
          title="$200,000.00"
          description="Incomes"
          backgroudColor="bg-emerald-100 text-emerald-400"
        />

        <StatsCard
          icon={<FaLongArrowAltDown size={30} />}
          title="$100,000.00"
          backgroudColor="bg-red-100 text-red-600"
          description="Expenses"
        />
      </section>
    </main>
  );
}

function StatsCard({
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
    <div className="bg-white px-6 pt-12 pb-6 w-full min-w-[270px] h-full max-h-[300px] rounded-lg space-y-5 lg:w-2/12">
      <div
        className={`${backgroudColor} flex justify-center h-14 w-14 rounded-full items-center`}
      >
        {icon}
      </div>
      <p
        className={`${poppins.className} font-extrabold text-indigo-950 text-3xl`}
      >
        {title}
      </p>
      <p className="font-semibold text-gray-500 text-xl">{description}</p>
    </div>
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
