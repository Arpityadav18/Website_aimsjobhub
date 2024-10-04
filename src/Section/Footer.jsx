import React from 'react'
import { useDarkMode } from '../Componets/DarkModeContext'
import { FaInstagram,FaFacebook,FaTwitter,FaFax,FaMobile, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { IoMdMail } from 'react-icons/io'
import { FaArrowUp } from 'react-icons/fa6'

const Footer = () => {
  
  const {darkMode, toggleDarkMode} = useDarkMode();
  return (
   <>
   <footer className={`${darkMode? 'dark bg-black':'light bg-gray-700'} w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`} >
  
<div className='flex flex-col justify-center items-start gap-5'>
  <h1 className='text-white text-2xl font-semibold'>AIMS JOB HUB</h1>
  <p className='text-slate-200 text-justify'>
  114,Orbit mall vijay Nagar , Indore 452010
  </p>
 <div  id = 'social-icons'className='flex justify-start items-center gap-4 mt-4'>
 <div className='p-3 rounded-xl bg-white hover:bg-red-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
  <FaFacebook target = "https://www.facebook.com/AIMSJOBHUB/" className='size-5'/>

 </div>

 <div className='p-3 rounded-xl bg-white hover:bg-red-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300' >
  <FaInstagram target = "https://www.instagram.com/aimsjobhub/"className='size-5'/>
 </div>


 <div className='p-3 rounded-xl bg-white hover:bg-red-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300' >
  <FaLinkedin target = "https://www.linkedin.com/in/arpit-yadav-0026b7294/?originalSubdomain=in" className='size-5' />
    
{/* 
<FaLinkedin href="https://www.linkedin.com/in/arpit-yadav-0026b7294/?originalSubdomain=in" className="text-xl" target="_blank" rel="noopener noreferrer" /> */}
 </div>
 </div>
 {/* <h1 className='text-white mt-8'>Copyright AIMS JOB HUB,All Rights Reserved</h1> */}
</div>
 <div className='flex flex-col justify-center items-start gap-5'>
  <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
 
  <div  className='flex  justify-center items-start gap-3'>
    <IoMdMail className='text-white size-5'/>
      <p className='text-slate-200'>
      hr.aimsjobhub@gmail.com
      </p>

  </div>
  <div  className='flex  justify-center items-start gap-3'>
    <FaMobile className='text-white size-5'/>
      <p className='text-slate-200'>
      8085809797
      </p>

  </div>


  <div  className='flex  justify-center items-start gap-3'>
    <FaFax className='text-white size-5'/>
      <p className='text-slate-200'>
      8085809797
      </p>

  </div>
  <div  className='flex  justify-center items-start gap-3'>
   
      <p className='text-slate-200'>
        Director - HRD ARPIT YADAV
      </p>

  </div>

  <div  className='flex  justify-center items-start gap-3'>
   
   <p className='text-slate-200'>
     Director - HRD TANIYA YADAV
   </p>

   

</div>
</div>
 <div className='flex flex-col justify-center items-start gap-5'>
  <h1 className='text-white text-2xl font-semibold'>OUR SERVICES</h1>
 
  <div  className='flex  justify-center items-start gap-3'>
   
      <p className='text-slate-200'>
      HAND TO HAND PLACEMENT
      </p>

  </div>
  <div  className='flex  justify-center items-start gap-3'>
   
      <p className='text-slate-200'>
    PLACEMENT GUARANTEE 100 PERCENT
      </p>

  </div>


  <div  className='flex  justify-center items-start gap-3'>
   
      <p className='text-slate-200'>
   PERMANENT PLACEMENT
      </p>

  </div>
  <div  className='flex  justify-center items-start gap-3'> 
   
      <p className='text-slate-200'>
     200+ CLIENTS COMPANIES
      </p>

  </div>

 <div  className='flex  justify-center items-start gap-3'>
   
   <p className='text-slate-200'>
    HAPPY CANDIDATES
   </p>

   

</div> 

{/* <div className='flex flex-col justify-center items-center gap-5'>
<h1 className='text-white mt-8'>Copyright AIMS JOB HUB,All Rights Reserved</h1>
</div> */}
<div className="text-center text-gray-500 text-sm p-4">
  &copy; {new Date().getFullYear()} AIMS JOB HUB. All rights reserved.
</div>
 </div>
 

   </footer>
   {/* slide to top button */}
   {/* <div id = 'icon-box' className='bg:red-600 rounded-full p-4 hover:bg-black cursor-pointer fixed lg:button-12 button-6 right-6'>
  <Link to = 'hero' spy = {true} offset={-100} smooth = {true}>
  <FaArrowUp className='size-5' text-white/>
  </Link>
   </div> */}
   {/* dark mode */}
 

   </>
  )
}

export default Footer
