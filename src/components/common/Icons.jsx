import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlus, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Icons() {
  return (
    <div className='icon-container lg:fixed  lg:right-8 lg:bottom-8 bottom-0 mt-3 mb-3 ml-[70px]'>

        <div className="iconbox flex  gap-2">
            <span className='bg-black rounded-full flex items-center justify-center p-2 h-8 w-8'>
                <FontAwesomeIcon icon={faFacebook} className=' text-white text-sm'/>
            </span>
            <span className='bg-black rounded-full flex items-center justify-center p-2 h-8 w-8'>
                <FontAwesomeIcon icon={faTwitter} className=' text-white text-sm'/>
            </span>
            <span className='bg-black rounded-full flex items-center justify-center p-2 h-8 w-8'>
                <FontAwesomeIcon icon={faGooglePlus} className=' text-white text-sm'/>
            </span>
            <span className='bg-black rounded-full flex items-center justify-center p-2 h-8 w-8'>
                <FontAwesomeIcon icon={faLinkedin} className=' text-white text-sm'/>
            </span>
        </div>
    </div>
  )
}
