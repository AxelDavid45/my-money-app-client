import {
  BiSolidCard,
  BiSolidDashboard,
  BiSolidLogOut,
  BiSolidWallet,
  BiTransfer,
} from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { NavLink } from "./nav-link";

const iconLinkSize = 25;

const links = [
  {
    name: "Dashboard",
    to: "/dashboard",
    icon: <BiSolidDashboard size={iconLinkSize} />,
  },
  {
    name: "Budgets",
    to: "/budgets",
    icon: <BiSolidWallet size={iconLinkSize} />,
  },
  {
    name: "Transactions",
    to: "/transactions",
    icon: <BiTransfer size={iconLinkSize} />,
  },
  {
    name: "Cards",
    to: "/cards",
    icon: <BiSolidCard size={iconLinkSize} />,
  },
  {
    name: "Visualization",
    to: "/visualization",
    icon: <BsGraphUp size={iconLinkSize} />,
  },
];
const subLinks = [
  {
    name: "Settings",
    to: "/settings",
    icon: <CiSettings size={iconLinkSize} />,
  },
  {
    name: "Logout",
    to: "/",
    icon: <BiSolidLogOut size={iconLinkSize} />,
  },
];
export function Links() {
  return (
    <>
      <ul className="h-full flex-1 w-full">
        {links.map((link) => (
          <NavLink link={link} key={link.to} />
        ))}
      </ul>

      <div className="border-t w-full">
        <ul className="w-full mt-3">
          {subLinks.map((link) => (
            <NavLink key={link.to} link={link} />
          ))}
        </ul>
      </div>
    </>
  );
}
