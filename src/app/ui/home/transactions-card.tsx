import { poppins } from "../../../static/fonts";
function Transaction({ type }: { type: string }) {
  return (
    <div className="flex items-center gap-2 first:mt-0 mt-5">
      <div className="h-10 w-10 rounded-full bg-gray-400"></div>
      <div className="flex-1">
        <p className="text-black font-bold uppercase">Amazon xxxxx3434</p>
        <p className="text-gray-500 text-sm font-semibold">2:00 PM</p>
      </div>
      <div className={`${poppins.className}`}>
        <p
          className={`font-bold ${
            type === "expense" ? "text-red-400" : "text-emerald-400"
          } text-xl`}
        >
          $100,000.000
        </p>
      </div>
    </div>
  );
}
function Transactions() {
  const transactions = [
    { type: "income" },
    { type: "expense" },
    { type: "expense" },
    { type: "expense" },
    { type: "income" },
  ];
  return transactions.map((t, i) => {
    return <Transaction key={i} type={t.type} />;
  });
}

export function TransactionsCard() {
  return (
    <div className="border border-red-50">
      <p className="font-semibold text-gray-500">Today</p>
      <div className="p-2">
        {/* Transaction component */}
        <Transactions />
      </div>
    </div>
  );
}
