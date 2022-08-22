import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ChevronDownIcon,
  HomeIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="sticky top-0 z-50 items-center flex bg-white px-4 py-1 shadow-sm">
      {/* <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm h-10"> */}

      {/* <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer -my-2"> */}
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Link href="/">
          <Image
            objectFit="contain"
            src="https://links.papareact.com/fqy"
            layout="fill"
          />
        </Link>
      </div>
      <div className="mx-7 flex items-center xl:min-w-[300px] cursor-pointer">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      <form className="flex flex-1 items-center space-x-2 border border-gray-200 rounded-lg bg-gray-100 px-3 py-1">
        <SearchIcon className="h-6 w-6 text-gray-400 cursor-pointer" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button hidden type="submit"></button>
      </form>

      <div className="space-x-2 text-gray-500 items-center mx-5 hidden lg:inline-flex">
        {/* <div className="space-x-2 text-gray-500 items-center mx-5 hidden lg:inline-flex scale-75 -mr-6"> */}
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>

      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src="https://links.papareact.com/23l"
              layout="fill"
              alt=""
            />
          </div>
          <div className="flex-1 text-sm">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">Sign out</p>
          </div>
          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src="https://links.papareact.com/23l"
              layout="fill"
              alt=""
            />
          </div>
          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </div>
  );
};

export default Header;
