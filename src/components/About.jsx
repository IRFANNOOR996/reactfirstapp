import React from 'react'
import img1 from "../assests/about.jpg"
import Header from './common/Header'
import img2 from "../assests/my-pic.jpg"
import { faChartLine, faPenRuler } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About() {
  return (
    <div>
        <Header/>
    <div className=' flex flex-col items-center lg:flex-row  mt-10 lg:mt-0'>
        <div className="  hidden lg:block w-3/6 h-[100vh] relative ">
            <img src={img1} alt="HeroImg" className=' h-full  '/>
            <div className=' absolute bottom-0  border-l-2 border-b-2 border-white w-2/4 h-3/4 flex items-end mb-10 ml-10'>
            <h2 className=' text-4xl font-bold  mb-5 ml-5 text-white'>ABOUT ME</h2>
            </div>
        </div>
          
        
        

        <div className="right lg:ml-2 font-bold mt-20 lg:mt-7  w-2/3">
            <div className='bg-[#ffc814] uppercase lg:px-4 text-[12px] tracking-wider myDiv lg:w-[110px] w-[150px] text-center mt-10 lg:mt-0'>
                <span className='myDivR text-[18px] lg:text-sm'>
                who i am 
                </span>
            </div>
            <h1 className='text-4xl lg:text-5xl font-bold uppercase mt-3'>About</h1>
            <div className='flex items-center mt-3'>
                    <div className='myDiv h-2 w-10 bg-[#ffc814]'></div>
                    <span className='myDiv h-[2px] lg:w-28 w-20 bg-[#dedede] rounded-md'></span>
            </div>
            <div className="imgbox mt-7 flex flex-col lg:flex-row">
                <div className="le ">
                    <img src={img2} className="w-[230px] "alt='Null' />
                </div>
                <div className="ri lg:w-[400px] lg:ml-8 mt-4 lg:mt-0">
                    <h1 className='text-3xl lg:text-2xl'>I'm Alexis Larten</h1>
                    <p className='mt-2 text-[#9da0b0] text-sm leading-5 tracking-wide '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="containers flex mt-10 lg:mt-5 gap-10 flex-col lg:flex-row ">
                        <div className="box flex  gap-4 lg:w-[350px]">
                        <span className='h-10 w-10 rounded-full bg-[#ffe9a1] p-3 flex items-center'>
                        <FontAwesomeIcon icon={faPenRuler} />
                        </span>
                        <div>
                            <h2 className='text-xl'>Development</h2>
                            <p className='text-[#8e92a3] text-[13px] mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        </div>
                        <div className="box flex gap-4 lg:w-[350px]">
                        <span className='h-10 w-10 rounded-full bg-[#ffe9a1] p-3 flex items-center'>
                        <FontAwesomeIcon icon={faChartLine} />
                        </span>
                        <div>
                            <h2 className='text-xl'>Graphic</h2>
                            <p className='text-[#8e92a3] text-[13px] mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        </div>
                        
                    </div>
                    <div className='myDiv h-[2px] lg:w-[90%] w-[50%] m-auto bg-[#dedede] rounded-md my-5'></div>
                </div>
            </div>
            
                
            
        
        </div>
        
    </div>


    </div>
    
  )
}
