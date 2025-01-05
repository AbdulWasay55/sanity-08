"use client"
import React from 'react'
import { useState } from 'react'
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {

    const [openMenu , setOpenMenu] = useState(false)

    const toggleMenu = () =>{
        setOpenMenu (!openMenu);
    };
  return (
    <div>
       <div className='w-full h-[72px] p-[20px] flex justify-between'>
        <p className=' font-semibold text-[18px] leading-6 '>ABDUL WASAY</p>
        <button
        className="block sm:hidden"
        onClick={toggleMenu}
      >
        {openMenu ? (
          <HiX className="w-6 h-6" />
        ) : (
          <HiMenu className="w-6 h-6" />
        )}
     </button>

     <div className=" hidden sm:flex font-semibold">
        <ul className="flex gap-3.5">
          <li className="hover:text-slate-950 cursor-pointer animate-item delay-1">
           <a href="/">Home</a> 
          </li>
          <li className="hover:text-slate-950 cursor-pointer animate-item delay-2">
            <a href="/About">About us</a>
          </li>
          <li className="hover:text-slate-950 cursor-pointer animate-item delay-3">
            {" "}
            <a href="/Contact">Contact</a>
          </li>
          
        </ul>
      </div>
      {/* mobile menu */}
      <div
        className={`${
          openMenu ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-10`}
      >
        <ul className="flex flex-col items-center gap-3 py-4 text-slate-500">
          <li className="hover:text-slate-950 cursor-pointer"><a href="/">Home</a></li>
          <li className="hover:text-slate-950 cursor-pointer">
            <a href="/About">About us</a>
          </li>
          <li className="hover:text-slate-950 cursor-pointer">
            <a href="/Contact">Contact</a>
          </li>
         
        </ul>
      </div>

       </div>

       <div className='w-full h-[87px] border-y-2 border-black border-opacity-30 flex items-center justify-center md:h-[160px] '>
        <h1 className='font-bold text-[72px] sm:text-[100px] md:text-[150px]'> THE BLOG</h1>
       </div>
    </div>
  )
}

export default Nav