"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Route_Links } from "@/utils/constant";

const Navbar = () => {
  return (
    <header className= 'py-4 sm:px-10 px-6 font-[sans-serif] min-h-[70px]'>
    <div className='flex flex-wrap items-center justify-center lg:gap-y-2 gap-y-4 gap-x-5'>
      <Link href={'/'}><img src={"/logo.webp"} alt="logo" className='w-36' />
      </Link>
      <div className='flex items-center ml-auto lg:order-1'>
        <div className="flex items-center gap-3">
          <input type="text" placeholder="What you looking for?"
            className="bg-gray-50 focus:bg-white w-full px-6 h-10 border-solid border-2 rounded-full text-sm"></input>
            <span className="relative mr-8">
            <Link href={"/cart"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
            </Link>
          </span>
        </div>
        <button id="toggle" className='lg:hidden ml-7'>
          <svg className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div className="">
      <label tabIndex={0} role="button" className="p-0 text-2xl lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu text-black w-7 h-7 mt-1"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </label>
      <ul id="collapseMenu"
        className='lg:!flex lg:ml-8 max-lg:hidden max-lg:w-full lg:space-x-4 max-lg:space-y-2 max-lg:my-4'>
        {Route_Links.map((link)=>(
          <li className='max-lg:border-b max-lg:py-2 px-3'>
            <Link href={link.href}>
              <p className='text-black hover:text-gray-200 text-[15px] block font-semibold'>{link.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
  </header>
  );
};
export default Navbar;
