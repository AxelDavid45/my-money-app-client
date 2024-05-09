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
import Link from "next/link";

const font = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <h1 className="text-2xl text-purple-600 font-bold">Welcome, Axel </h1>
      <p className="text-gray-600">
        Continue your journey to better finance management and success
      </p>

      <section className="mt-10 bg-white rounded-lg flex items-center justify-center gap-2 py-10 min-h-[130px]">
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

      <section className="mt-10 flex flex-wrap justify-between gap-2">
        <StatsCard
          icon={<BiSolidBank size={20} />}
          title="$900,000.00"
          backgroudColor="bg-purple-100 text-purple-600"
          description="Total Balance"
        />

        <StatsCard
          icon={<FaPiggyBank size={20} />}
          title="10"
          backgroudColor="bg-blue-100 text-blue-400"
          description="Budgets"
        />

        <StatsCard
          icon={<FaLongArrowAltUp size={20} />}
          title="$1,000,000.00"
          description="Incomes"
          backgroudColor="bg-emerald-100 text-emerald-400"
        />

        <StatsCard
          icon={<FaLongArrowAltDown size={20} />}
          title="$100,000.00"
          backgroudColor="bg-red-100 text-red-600"
          description="Expenses"
        />
      </section>

      {/* <section className="mt-10  bg-white p-5 rounded-lg">
        <div className="">
          <p>Transactions</p>
          <Link href="/">View All</Link>
        </div>
        <div className="">content</div>
      </section> */}
    </>
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
