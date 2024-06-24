import Link from "next/link";
import { ReactNode } from "react";

export function NavLink({
  link,
}: {
  link: { name: string; icon: ReactNode; to: string };
}) {
  return (
    <li
      key={link.name}
      className="hover:bg-purple-100 hover:text-purple-500 hover:cursor-pointer w-full rounded-md px-2 py-3 text-gray-500 mb-3"
    >
      <Link href={link.to} className="flex items-center">
        <div className="mr-3">{link.icon}</div>
        {link.name}
      </Link>
    </li>
  );
}
