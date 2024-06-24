'use client'

import Image from "next/image";
import { FaSearch as SearchIcon, FaBars as MenuIcon } from "react-icons/fa";
import { IoNotifications as NotificationIcon } from "react-icons/io5";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { BiToggleRight } from "react-icons/bi";
import { EventHandler, MouseEventHandler } from "react";
export function TopNavBar() {
  return (
    <section className="min-h-[60px] border-b border-gray-300 px-4 py-2  flex items-center justify-end space-x-4">
      <Button size="icon" variant="ghost" type="button">
        <MenuIcon size={20} />
      </Button>
      <form className="flex w-full max-w-sm items-center space-x-2">
        <Input type="search" placeholder="Buscar transacción..." />
        <Button size="icon" type="submit">
          <SearchIcon size={15} />
        </Button>
      </form>

      <button className="text-gray-400 hover:text-purple-500">
        <NotificationIcon size={30} />
      </button>

      <span className="border border-gray-300 h-7"></span>

      <button className="border-3 border-gray-500 h-5 w-5  lg:h-10 lg:w-10 rounded-full  overflow-hidden border-2 hover:border-3 hover:border-purple-500 transition-all">
        <Image
          alt="Profile picture"
          src="https://ui-avatars.com/api/?name=Axel+Espinosa"
          width={40}
          height={40}
          className="w-full rounded-full"
        />
      </button>
    </section>
  );
}
