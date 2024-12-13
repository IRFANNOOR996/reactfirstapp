import React from 'react'
import img1 from "../assests/contact.jpg"
import Header from './common/Header'

export default function Contactme() {
    return (
        <>
            <Header />
            <div className='flex items-center     Zindex'>
                <div className=" hidden lg:block left w-[38%] h-[100vh] relative">
                    <img src={img1} alt="Your Internet IS Slow" className=' h-full' />
                    <div className='absolute  bottom-0 left-0 ml-10 mb-16 border-l-2 border-b-2 w-1/2 h-4/5 flex items-end'>
                        <h2 className='text-white font-bold text-3xl ml-5 mb-5 uppercase'>Contact Me</h2>
                    </div>
                </div>
                
                <div className="right  flex flex-col items-start gap-3 mt-20 ml-5 lg:w-1/2 w-[93%]">
<div className='relative flex items-center justify-center Zindex '>
            <div className=' bg-[#ffc814] px-20 py-3  myDiv h-4 w-28  Zindex'>
            </div>
            <div className='absolute   font-bold Zindex'>
            <h2 className='ordClas uppercase'>Get in Touch
            </h2> 
            </div>
            </div>
            <h1 className='font-bold text-4xl uppercase tracking-wider'>contact me</h1>
            <div className='flex items-center lg:mb-2 mb-4 Zindex'>
                <div className='myDiv h-2 w-16 bg-[#ffc814]'></div>
                <div className='bg-[#dedede] w-40 h-[1px]'></div>
            </div>
            <div className="form border rounded-md w-full mb-5 shadow-md">
                <div className='p-5'>
                    <h2 className='text-xl uppercase font-bold mb-5'>Say Something</h2>
                    <div className='w-full flex gap-3 flex-col lg:flex-row'>
                        <input type="text" placeholder='Name' className='border border-[#d4d4d4]  lg:w-1/2 bg-[#f7fafc] p-3 outline-none'/ >
                        <input type="email" placeholder='Email' className='border border-[#d4d4d4]  lg:w-1/2 bg-[#f7fafc] p-3 outline-none'/ >
                    </div>
                    <textarea name="" id=""  rows="4" cols="50" className='mt-5 border border-[#d4d4d4]  w-full resize-none bg-[#f7fafc] p-3 outline-none'></textarea>
                    <button className='bg-[#ffc814] px-6  my-3 py-3 font-bold text-sm text-white tracking-widest uppercase rounded-lg'>Send Message</button>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}
