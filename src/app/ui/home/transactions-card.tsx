import { poppins } from "../../../static/fonts";
function Transaction({ type }: { type: string }) {
  return (
    <div className="flex items-center first:mt-0 mt-5">
      <div
        className={`h-9 w-9 rounded-full ${
          type === "expense" ? "bg-black" : "bg-emerald-500"
        } mr-4`}
      ></div>
      <div className="flex-1 flex flex-col items-start justify-center font-sans">
        <p className="text-black font-semibold leading-3">
          Amazonasas AsdXXXX3434
        </p>
        <p className="text-gray-500 text-sm">2:00 PM</p>
      </div>
      <div className="flex items-center">
        <p
          className={`font-sans font-extrabold ${
            type === "expense" ? "text-black" : "text-emerald-500"
          }`}
        >
          $100,000.00
        </p>
      </div>
    </div>
  );
}
function Transactions() {
  const transactions = [
    {
      date: "Today",
      transactions: [
        { type: "income" },
        { type: "expense" },
        { type: "expense" },
      ],
    },
    {
      date: "Yesterday",
      transactions: [{ type: "expense" }, { type: "income" }],
    },
  ];
  return transactions.map((info) => {
    return (
      <>
        <p className="font-semibold text-gray-500">{info.date}</p>
        <div className="p-2">
          {info.transactions.map((t, i) => {
            return <Transaction key={i} type={t.type} />;
          })}
        </div>
      </>
    );
  });
}

export function TransactionsCard() {
  return (
    <div className="">
      {/* Transaction component */}
      <Transactions />
    </div>
  );
}
