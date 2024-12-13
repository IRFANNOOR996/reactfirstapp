import React from 'react'
import img1 from "../assests/user.png"
import Header from './common/Header'
import Icons from './common/Icons'


export default function Home() {
  return (
    <div>
        <Header/>
        <div className=' flex flex-col items-center lg:flex-row  mt-10 lg:mt-0'>
        <div className="lg:left lg:w-1/3 bg-[#2fb2cc]">
            <img src={img1} alt="HeroImg" className='w-full lg:w-[85%] '/>
        </div>
        <div className="right lg:ml-24 font-bold mt-5 ml-5">
            <div className='relative '>
                <div className='w-5 h-5 lg:w-10 lg:h-10 bg-[#ffc814] rounded-full '> 
                </div>
                <h1 className='text-sm lg:text-2xl absolute top-1 left-2 '>Hello, There</h1>
            </div>
            <div className='relative mt-2 lg:mt-0'>
            <div className='h-8 w-8 lg:w-14 lg:h-14 rounded-full absolute bg-[#82d1e0] bottom-0 right-0 z-[-1]'></div>
            <h1 className='text-3xl lg:text-6xl uppercase z-10'>I'm Alexis Larten</h1>
            </div>
            <h4 className='text-neutral-500 text-lg mt-1 lg:text-2xl lg:*:mt-5'>Web Designner</h4>
            <button className='px-4 py-2  bg-[#ffc814] uppercase text-white text-sm tracking-wide mt-2 rounded-md lg:py-3 lg:px-7 lg:mt-5'> Download Cv</button>
        </div>
        </div>
        <Icons/>
    </div>
  )
}
