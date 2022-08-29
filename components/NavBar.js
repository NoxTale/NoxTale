import Image from "next/image";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Layout from "./Layout";

function Header() {
  return (
    <header className="bg-black space-y-4 grid grid-cols-3">
      <div className="flex justify-start space-x-10">
        <img
          src="https://animepahe.com/app/images/apdoesnthavelogotheysaidapistooplaintheysaid.svg"
          width={200}
          height={200}
          className="cursor-pointer object-contain"
        />
      </div>

      <div class="relative text-lg bg-transparent text-white">
        <div class="flex items-center border-b-2 border-gray-500 py-2">
          <input
            class="bg-transparent  mr-3 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search"
          />
          <button type="submit" class="absolute right-0 top-0 mt-2 mr-4">
            <SearchIcon className="w-7 h-7" />
          </button>
        </div>
      </div>
      <div className="flex text-white items-center justify-end space-x-3 pr-10 text-lg font-light">
        <div className="flex space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white">
          <img
            className="rounded-full w-10 h-10"
            src="https://us.123rf.com/450wm/apoev/apoev1812/apoev181200140/114153229-person-gray-photo-placeholder-man-in-t-shirt-on-gray-background.jpg?ver=6"
            alt=""
          />
          <h2>Guest User</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
