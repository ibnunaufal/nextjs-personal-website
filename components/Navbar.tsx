// components/Navbar.tsx
'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import Image from "next/image";
import ProfilePicture from "./ProfilePicture";

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className=" w-full h-16 flex justify-between">
        <ul className="flex flex-row ">
            <li className={`mr-4 flex h-10 ${pathname == '/' ? 'border-b-2' : ' text-gray-400 hover:text-white'}`}> <a href="/">home</a></li>
            <li className={`mr-4 flex h-10 ${pathname == '/blog' || pathname.includes('/blog') ? 'border-b-2' : ' text-gray-400 hover:text-white'}`}> <a href="/blog">blog</a></li>
            <li className={`mr-4 flex h-10 ${pathname == '/about' ? 'border-b-2' : ' text-gray-400 hover:text-white'}`}> <a href="/about">about</a></li>
        </ul>
        <div className={`h-16 ${pathname == '/about' ? 'hidden':''}`}>
          <ProfilePicture width="50px" height="50px" />
          {/* <Image src={"/profile.webp"} alt="pp" width={50} height={50} className="rounded-full transition ease-in-out delay-150 hover:scale-150" /> */}
        </div>
    </div>
  );
};
export default Navbar;
