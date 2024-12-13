import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { Link } from 'react-router-dom';



export default function Header() {
  let [iconcahn,seticoncahn]=useState(true)
  
  
  return (
    <div>
      <div className='' >
      <ul className={`bg-[#ffc814] uldiv flex justify-center gap-3 lg:gap-8 text-1xl font-bold text-white py-5 px-2 lg:px-5 w-full lg:w-2/5 fixed top-20 lg:top-0 ${iconcahn ? "left-[-600px] ":"left-0" } z-50`}>
        <li className='hover:transform hover:scale-110   cursor-pointer ' > <Link to={"/reactfirstapp"}>Home </Link></li>
        <li className='hover:transform hover:scale-110   cursor-pointer ' ><Link to={"/about-us"}>About </Link></li>
        <li className='hover:transform hover:scale-110   cursor-pointer ' ><Link to={"/resume"}>Resume </Link></li>
        <li className='hover:transform hover:scale-110   cursor-pointer ' ><Link to={"/portfolio"}>Portfolio </Link></li>
        <li className='hover:transform hover:scale-110   cursor-pointer ' ><Link to={"/contactme"}>Contact Me  </Link> </li>
      </ul>
      </div>
      <div className='flex items-center justify-end w-full lg:w-3/12 fixed top-0 right-0 h-16 no-scrollbar '>
        <div className="left bg-[#ffc814] w-full lg:w-2/3 h-full flex items-center pl-8 text-1xl text-white font-bold">
            <h2 className='uppercase float-left '>Alexio</h2>
        </div>
        <div className="right  bg-black h-full ">
            <span className='cursor-pointer ' onClick={()=>seticoncahn(!iconcahn)} >
                {
                  (iconcahn)?
                  <FontAwesomeIcon icon={faBars} className='text-white w-12 h-12 p-2 ' />
                  :
                  <FontAwesomeIcon icon={faXmark} className='text-white w-12 h-12 p-2 ' />
                }
            </span>
        </div>
    </div>
    </div>
  )
}
