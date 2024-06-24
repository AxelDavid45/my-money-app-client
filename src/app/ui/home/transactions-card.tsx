import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../../../components/ui/avatar";
import { poppins } from "../../../static/fonts";
function Transaction({
  type,
  description,
  amount,
}: {
  type: string;
  amount: number;
  description: string;
}) {
  return (
    <div className="flex items-center first:mt-0 mt-5">
      <Avatar className="mr-4">
        <AvatarImage src={`https://ui-avatars.com/api/?name=${description}`} />
        <AvatarFallback>T</AvatarFallback>
      </Avatar>
      <div className="flex-1 flex flex-col items-start justify-center font-sans">
        <p className="text-black font-semibold leading-3 text-sm lg:text-lg">
          {description}
        </p>
        <p className="text-gray-500 text-sm">2:00 PM</p>
      </div>
      <div className="flex items-center">
        <p
          className={`font-sans font-extrabold ${
            type === "expense" ? "text-black" : "text-emerald-500"
          }`}
        >
          ${amount}
        </p>
      </div>
    </div>
  );
}
function Transactions() {
  const transactions = [
    {
      date: "2024-06-23",
      transactions: [
        { type: "income", description: "Amazon Checkout", amount: 150.0 },
        { type: "expense", description: "Grocery Shopping", amount: 85.5 },
        { type: "income", description: "Freelance Payment", amount: 500.0 },
      ],
    },
    {
      date: "2024-06-22",
      transactions: [
        { type: "expense", description: "Restaurant Bill", amount: 45.0 },
        { type: "income", description: "Salary", amount: 3000.0 },
        { type: "expense", description: "Utility Bill", amount: 120.75 },
      ],
    },
  ];
  return transactions.map((info) => {
    return (
      <>
        <p className="font-semibold text-gray-500">{info.date}</p>
        <div className="p-2">
          {info.transactions.map((t, i) => {
            return (
              <Transaction
                key={i}
                type={t.type}
                amount={t.amount}
                description={t.description}
              />
            );
          })}
        </div>
      </>
    );
  });
}

export function TransactionsCard() {
  return <Transactions />;
}
