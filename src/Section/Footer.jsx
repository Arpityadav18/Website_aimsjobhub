import React from 'react'
import { useDarkMode } from '../Componets/DarkModeContext'
import { FaInstagram,FaFacebook,FaTwitter,FaFax,FaMobile } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { IoMdMail } from 'react-icons/io'
const Footer = () => {
  
  const {darkMode, toggleDarkMode} = useDarkMode();
  return (
   <>
   <footer className={`${darkMode? 'dark bg-black':'light bg-gray-400'} w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`} >
  
<div className='flex flex-col justify-center items-start gap-5'>
  <h1 className='text-white text-2xl font-semibold'>ABOUT US</h1>
  <p className='text-slate-200 text-justify'>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, similique amet 
    nostrum nisi minima autem quas libero fugit a voluptatem unde eius tenetur impedit possimus quo, totam expedita molestiae exercitationem 
    praesentium nulla tempora porro incidunt odit. Harum illum similique vel sed cum, saepe tempora tempore mollitia eveniet architecto
     voluptatum maxime.
  </p>
 <div  id = 'social-icons'className='flex justify-start items-center gap-4 mt-4'>
 <div className='p-3 rounded-xl bg-white hover:bg-red-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
  <FaFacebook className='size-5'/>

 </div>

 <div className='p-3 rounded-xl bg-white hover:bg-red-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300' >
  <FaInstagram className='size-5'/>
 </div>


 <div className='p-3 rounded-xl bg-white hover:bg-red-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300' >
  <FaTwitter  className='size-5' />
  
 </div>
 </div>
 <h1 className='text-white mt-8'>Copyright AIMS JOB HUB,All Rights Reserved</h1>
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

 </div>
   </footer>
   </>
  )
}

export default Footer
