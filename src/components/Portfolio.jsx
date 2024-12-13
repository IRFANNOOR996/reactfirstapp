import React from 'react'
import Header from './common/Header'
import img1 from "../assests/portfolio.jpg"
import img2 from "../assests/portfolio-1.jpg"
import img3 from "../assests/portfolio-2.jpg"
import img4 from "../assests/portfolio-3.jpg"

export default function Portfolio() {
  return (
<>
<Header/>
    <div className='flex items-center     Zindex'>
        <div className=" hidden lg:block left w-[38%] h-[100vh] relative">
        <img src={img1} alt="Your Internet IS Slow"   className=' h-full'/>
        <div className='absolute  bottom-0 left-0 ml-10 mb-16 border-l-2 border-b-2 w-1/2 h-4/5 flex items-end'>
            <h2 className='text-white font-bold text-3xl ml-5 mb-5'>MY PROJECTS</h2>
        </div>
        </div>
        <div className="right  flex flex-col items-start gap-3 mt-20 ml-5
        ">
<div className='relative flex items-center justify-center Zindex '>
            <div className=' bg-[#ffc814] px-20 py-3  myDiv h-4 w-28  Zindex'>
            </div>
            <div className='absolute   font-bold Zindex'>
            <h2 className='ordClas '>Latest Work
            </h2> 
            </div>
            </div>
            <h1 className='font-bold text-4xl uppercase'>My Projects</h1>
            <div className='flex items-center lg:mb-10 mb-4 Zindex'>
                <div className='myDiv h-2 w-16 bg-[#ffc814]'></div>
                <div className='bg-[#dedede] w-40 h-[1px]'></div>
            </div>

            <div className='flex items-center justify-center  lg:w-[100vh] m-auto lg:gap-3 gap-2 Zindex'>
                <div className='lg:px-5 ;g:py-1 bg-black font-bold text-white myDiv text-sm px-2 py-1'>ALL</div>
                <div className='lg:px-5 ;g:py-1 bg-black font-bold text-white myDiv text-sm px-2 py-1'>PHOTOSHOP </div>
                <div className='lg:px-5 ;g:py-1 bg-black font-bold text-white myDiv text-sm px-2 py-1'>WEBSITE</div>
                <div className='lg:px-5 ;g:py-1 bg-black font-bold text-white myDiv text-sm px-2 py-1'>APPS</div>
            </div>

            <div className="container flex gap-4 flex-col lg:flex-row mt-5 w-full "> 
                <div className="box w-[95%] lg:w-60 border flex   flex-col p-2">
                    <img src={img2} alt="imag2" className='w-full ' />
                    <div className='mt-2'>
                        <h1 className='font-bold'>Portpolio Template</h1>
                        <p className='text-[#3d3c3c] text-sm'>Resent Work</p>
                    </div>
                </div>
                <div className="box w-[95%] lg:w-60 border flex   flex-col p-2">
                    <img src={img3} alt="imag2" className='w-full ' />
                    <div className='mt-2'>
                        <h1 className='font-bold'>Portpolio Template</h1>
                        <p className='text-[#3d3c3c] text-sm'>Resent Work</p>
                    </div>
                </div>
                <div className="box w-[95%] lg:w-60 border flex   flex-col p-2">
                    <img src={img4} alt="imag2" className='w-full ' />
                    <div className='mt-2'>
                        <h1 className='font-bold'>Portpolio Template</h1>
                        <p className='text-[#3d3c3c] text-sm'>Resent Work</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</>
  )
}
