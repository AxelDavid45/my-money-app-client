import {
  FaLongArrowAltDown,
  FaLongArrowAltUp,
  FaMinus,
  FaPiggyBank,
  FaPlus,
} from "react-icons/fa";
import React from "react";
import { BiArrowFromRight, BiSolidBank } from "react-icons/bi";
import { AiFillMedicineBox } from "react-icons/ai";
import Link from "next/link";
import { StatsCard } from "./ui/home/stats-card";
import { MainButton } from "./ui/home/buttons";
import { IoIosArrowForward } from "react-icons/io";
import { TransactionsCard } from "./ui/home/transactions-card";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl text-purple-600 font-bold">Hola, Axel </h1>
      <p className="text-gray-600">
        Continua tu viaje hacia una mejor gestión financiera
      </p>

      <section className="mt-10 bg-white rounded-lg flex items-center justify-center gap-x-24  py-10 min-h-[130px]">
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

      <section className="flex flex-wrap justify-between gap-2">
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

      <section className="mt-10 flex flex-wrap gap-2">
        <div className="bg-white p-5 rounded-lg w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-800 text-2xl font-bold font-sans">
              Ultimas transacciones
            </h2>
            <Button asChild>
              <Link href="/" className="flex items-center">
                View All <IoIosArrowForward size={20} />
              </Link>
            </Button>
          </div>

          <div className="mt-5">
            {/* Transactions */}
            <TransactionsCard />
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg w-full">
          <div className="flex items-center justify-between space-x-3">
            <h2 className="text-gray-900 text-2xl font-bold">Transactions</h2>
            <Link href="/" className="text-purple-500">
              View All <IoIosArrowForward size={25} />
            </Link>
          </div>
          <div className="">content</div>
        </div>
      </section>
    </>
  );
}
