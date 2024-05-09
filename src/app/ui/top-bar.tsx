import Image from "next/image";
import { FaSearch as SearchIcon } from "react-icons/fa";
import { IoNotifications as NotificationIcon } from "react-icons/io5";
export function TopNavBar() {
  return (
    <section className="min-h-[60px] border-b border-gray-300 px-4 py-2  flex items-center justify-end space-x-4">
      <form className="relative">
        <div className="flex items-center start-0 absolute inset-y-0 p-2 text-gray-300 pointer-events-none">
          <SearchIcon size={15} />
        </div>
        <input
          type="search"
          placeholder="Search..."
          className="outline-none rounded-full px-4 bg-transparent text-sm py-2 min-w-[300px] w-full ps-10 text-gray-900 border border-gray-300  focus:ring focus:ring-purple-500  transition-all"
        />
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
