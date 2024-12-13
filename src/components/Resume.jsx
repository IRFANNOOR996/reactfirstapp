import React from 'react'
import img1 from "../assests/resume.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import Header from './common/Header'

export default function Resume() {
  return (
    <>
    <Header/>
    <div className='flex items-center     Zindex'>
        <div className=" hidden lg:block left w-[38%] h-[100vh] relative">
        <img src={img1} alt="Your Internet IS Slow"   className=' h-full'/>
        <div className='absolute  bottom-0 left-0 ml-10 mb-16 border-l-2 border-b-2 w-1/2 h-4/5 flex items-end'>
            <h2 className='text-white font-bold text-3xl ml-5 mb-5'>MY RESUME</h2>
        </div>
        </div>
        <div className="right  flex flex-col items-start gap-3 mt-20 ml-5
        ">
            <div className='relative flex items-center justify-center Zindex '>
            <div className=' bg-[#ffc814] px-6 py-3  myDiv h-4 w-28  '>
            </div>
            <div className='absolute  py-2  font-bold'>
            <h2 className='ordClas '>HISTORY</h2> 
            </div>
            </div>
            <h1 className='font-bold text-4xl'>MY RESUME</h1>
            <div className='flex items-center mb-10'>
                <div className='myDiv h-2 w-16 bg-[#ffc814]'></div>
                <div className='bg-[#dedede] w-40 h-[1px]'></div>
            </div>

            <div className="maincontainer flex flex-col lg:flex-row gap-5">
            <div className="anothercontainer flex gap-5">
                <div className="left"><span className='h-3 w-3 bg-[#ffc814] rounded-full inline-block'>      
                </span>
                </div>
                <div className="right">
                    <h2 className='text-xl font-bold mb-2'>Experience</h2>
                    <div className="box1 flex   flex-col h-[220px] w-[350px] border  border-[#dedede] ">
                        <div className="uppersection gap-2 flex border-b items-center p-3">
                            <span className='h-8 w-8 rounded-full  bg-[#ffc814] flex items-center justify-center  gap-2'>
                                <FontAwesomeIcon icon={faBriefcase} className='p-2'/>
                            </span>
                            <div className=' '>
                                <h2>Google</h2>
                                <p className='text-sm text-[#9094a6]'>OCT 2015 - JUNE 2016</p>
                            </div>
                           
                        </div>
                        <div>
                        <p className='text-sm text-[#9094a6] p-3 mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                        </div>
                    </div>
                </div>
                    
                    
                    
                    
                        
                    
                    
                    
            </div>
            <div className="anothercontainer flex gap-5">
                <div className="left"><span className='h-3 w-3 bg-[#ffc814] rounded-full inline-block'>      
                </span>
                </div>
                <div className="right">
                    <h2 className='text-xl font-bold mb-2'>Education</h2>
                    <div className="box1 flex   flex-col h-[220px] w-[350px] border  border-[#dedede] ">
                        <div className="uppersection gap-2 flex border-b items-center p-3">
                            <span className='h-8 w-8 rounded-full  bg-[#ffc814] flex items-center justify-center  gap-2'>
                                <FontAwesomeIcon icon={faBriefcase} className='p-2'/>
                            </span>
                            <div className=' '>
                                <h2>University</h2>
                                <p className='text-sm text-[#9094a6]'>OCT 2015 - JUNE 2016</p>
                            </div>
                           
                        </div>
                        <div>
                        <p className='text-sm text-[#9094a6] p-3 mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                        </div>
                    </div>
                </div>
                    
                    
                    
                    
                        
                    
                    
                    
            </div>
            </div>
            
                
                

            </div>
            
        
    </div>
    </>
  )
}
