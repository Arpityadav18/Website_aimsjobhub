

// import React from 'react'
// import { useDarkMode } from '../Componets/DarkModeContext'
// import { FaInstagram,FaFacebook,FaTwitter,FaFax,FaMobile, FaLinkedin } from 'react-icons/fa'
// import { Link } from 'react-scroll'
// import { IoMdMail } from 'react-icons/io'
// import { FaArrowUp } from 'react-icons/fa6'

// const Footer = () => {
  
//   const {darkMode, toggleDarkMode} = useDarkMode();
//   return (
//    <>
//    <footer className={`${darkMode? 'dark bg-black':'light bg-gray-700'} w-full  m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10 `} >
//    {/* w-full  m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10 */}
// <div className='flex flex-col justify-center items-start gap-5'>
//   <h1 className='text-white text-2xl font-semibold'>AIMS JOB HUB</h1>
//   <p className='text-slate-200 text-justify'>
//   114,Orbit mall vijay Nagar , Indore 452010
//   </p>
//  <div  id = 'social-icons'className='flex justify-start items-center gap-4 mt-4'>
//  <div className='p-3 rounded-xl bg-white hover:bg-red-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
//   <FaFacebook target = "https://www.facebook.com/AIMSJOBHUB/" className='size-5'/>

//  </div>

//  <div className='p-3 rounded-xl bg-white hover:bg-red-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300' >
//   <FaInstagram target = "https://www.instagram.com/aimsjobhub/"className='size-5'/>
//  </div>


//  <div className='p-3 rounded-xl bg-white hover:bg-red-500 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300' >
//   <FaLinkedin target = "https://www.linkedin.com/in/arpit-yadav-0026b7294/?originalSubdomain=in" className='size-5' />
    
// {/* 
// <FaLinkedin href="https://www.linkedin.com/in/arpit-yadav-0026b7294/?originalSubdomain=in" className="text-xl" target="_blank" rel="noopener noreferrer" /> */}
//  </div>
//  </div>
//  {/* <h1 className='text-white mt-8'>Copyright AIMS JOB HUB,All Rights Reserved</h1> */}
// </div>
//  <div className='flex flex-col justify-center items-start gap-5'>
//   <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
 
//   <div  className='flex  justify-center items-start gap-3'>
//     <IoMdMail className='text-white size-5'/>
//       <p className='text-slate-200'>
//       hr.aimsjobhub@gmail.com
//       </p>

//   </div>
//   <div  className='flex  justify-center items-start gap-3'>
//     <FaMobile className='text-white size-5'/>
//       <p className='text-slate-200'>
//       8085809797
//       </p>

//   </div>


//   <div  className='flex  justify-center items-start gap-3'>
//     <FaFax className='text-white size-5'/>
//       <p className='text-slate-200'>
//       8085809797
//       </p>

//   </div>
//   <div  className='flex  justify-center items-start gap-3'>
   
//       <p className='text-slate-200'>
//         Director - HRD ARPIT YADAV
//       </p>

//   </div>

//   <div  className='flex  justify-center items-start gap-3'>
   
//    <p className='text-slate-200'>
//      Director - HRD TANIYA YADAV
//    </p>

   

// </div>
// </div>
//  <div className='flex flex-col justify-center items-start gap-5'>
//   <h1 className='text-white text-2xl font-semibold'>OUR SERVICES</h1>
 
//   <div  className='flex  justify-center items-start gap-3'>
   
//       <p className='text-slate-200'>
//       HAND TO HAND PLACEMENT
//       </p>

//   </div>
//   <div  className='flex  justify-center items-start gap-3'>
   
//       <p className='text-slate-200'>
//     PLACEMENT GUARANTEE 100 PERCENT
//       </p>

//   </div>


//   <div  className='flex  justify-center items-start gap-3'>
   
//       <p className='text-slate-200'>
//    PERMANENT PLACEMENT
//       </p>

//   </div>
//   <div  className='flex  justify-center items-start gap-3'> 
   
//       <p className='text-slate-200'>
//      200+ CLIENTS COMPANIES
//       </p>

//   </div>

//  <div  className='flex  justify-center items-start gap-3'>
   
//    <p className='text-slate-200'>
//     HAPPY CANDIDATES
//    </p>

   

// </div> 
// </div> 
// {/* <div className='flex flex-col justify-center items-center text-white text-center gap-10'>
//   &copy; {new Date().getFullYear()} AIMS JOB HUB. All rights reserved.
// </div> */}
// <div className="fixed bottom-0 left-0 w-full h-10 bg-gray-700 p-10 flex justify-center">
//   <div className="text-center text-white text-sm p-2 mb-5">
//     &copy; {new Date().getFullYear()} AIMS JOB HUB. All rights reserved.
//   </div>
// </div>




//  {/* </div> */}
 

//    </footer>
//    {/* slide to top button */}
//    {/* <div id = 'icon-box' className='bg:red-600 rounded-full p-4 hover:bg-black cursor-pointer fixed lg:button-12 button-6 right-6'>
//   <Link to = 'hero' spy = {true} offset={-100} smooth = {true}>
//   <FaArrowUp className='size-5' text-white/>
//   </Link>
//    </div> */}
//    {/* dark mode */}
 

//    </>
//   )
// }

// export default Footer


import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from 'react-icons/io'
import { FaFax,FaMobile} from 'react-icons/fa'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Footer = () => {
  return(
    <footer className='bg-gray-800 px-4 md:px-16 lg:px-28'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
      <div>
      <h2 className='text-lg font-bold text-white mb-4'>ABOUT US</h2>
      <p className='text-white text-md:text-lg'>114,Orbit mall Vijay nagar ,Indore</p> 
     
      {/* <ul className='flex space-x-4 '>
          <li> {" "}
          <FaFacebookF className='text-blue-500 size-8' />
 {" "}
            <a href="https://www.facebook.com/AIMSJOBHUB/" className='hover:underline text-gray-300'></a></li>
          <li>
          <FaInstagram className='text-orange-500 size-8' />

            <a href="https://www.instagram.com/aimsjobhub/" className='hover:underline text-gray-300' ></a></li>
          <li>
          <FaLinkedinIn className='text-sky-500 size-8' />

            <a href="https://www.linkedin.com/in/arpit-yadav-0026b7294/?originalSubdomain=in" className='hover:underline text-gray-300'></a></li>
          
        </ul> */}

   {/* carousel */}
   {/* <Carousel
     
      className="w-full py-6 "
    >
      <CarouselContent >
      <a href="https://www.linkedin.com/in/arpit-yadav-0026b7294/?originalSubdomain=in" className=''>
          <img src="\src\assets\images\slideshow-img-1.png" />
        </a>
        <a href="https://www.youtube.com/watch?v=HiGgOKOUvkI" className='w-[720px]'>
          <img src="\src\assets\images\slideshow-img-2.png" />
        </a>
        <a href="https://www.facebook.com/AIMSJOBHUB/" className='w-[720px]'>
          <img src="\src\assets\images\slideshow-img-3.png" />
        </a>
        <a href="https://www.instagram.com/aimsjobhub/" className='w-[720px]'>
          <img src="\src\assets\images\slideshow-img-4.png" />
        </a>
        <a href="https://aims-job-hub.weeblysite.com/" className=' w-[720px]'>
          <img src="\src\assets\images\slideshow-img-5.jpg" />
        </a>            
    
      </CarouselContent>
      
    </Carousel>
carousel end here */}

      </div>
      <div>
      <h2 className='text-lg font-bold text-white mb-4'> CONTACT US</h2>
        <ul>
    
     <li> <IoMdMail className='text-white size-5'/> 
    
     <a  className = 'text-slate-200' href="mailto:aimsjobhub@gmail.com">hr.aimsjobhub@gmail.com</a>
    
     </li>
    <li> <FaMobile className='text-white size-5'/>
    <a className='text-slate-200' href="tel:+8085809797">+8085809797</a>
       
      </li>
      <li>  <FaMobile className='text-white size-5'/>
      <a className='text-slate-200' href="tel:+9131021544">+9131021544</a>
       
      </li>


      <li><p className='text-slate-200'>
         Director - HRD ARPIT YADAV
      </p></li>
     <li><p className='text-slate-200'>
         Director - HRD TANIYA YADAV
      </p></li>
      </ul>
      </div>


      <div>
      <h2 className='text-lg font-bold text-white mb-4'>SERVICES</h2>
      <p className='text-slate-200'>
      HAND TO HAND PLACEMENT
      </p>
      <p className='text-slate-200'>
     PERMANENT PLACEMENT
      </p>
      <p className='text-slate-200'>
      HUNDRED PERCENT PLACEMENR GUARANTEE
      </p>
      <p className='text-slate-200'>
      THREE MONTHS VALIDATION
      </p>
      <p className='text-slate-200'>
 LIFETIME SUPPORT
      </p>

      </div>
      </div>
      <div className=' border-t  border-gray-800 p-4 text-white text-center mt-6'> <p>&copy; 2024 AIMS JOB HUB </p>
      <Carousel
     
        
      className="w-full py-10 ml-5 "
    >
      <CarouselContent className = 'flex gap-5 sm:gap-20 items-center'>
      
      <a href="https://www.linkedin.com/in/arpit-yadav-0026b7294/?originalSubdomain=in" >
          <img src="\src\assets\images\slideshow-img-1.png" className='w-[300px] rounded-full' />
        </a>
        <a href="https://www.youtube.com/watch?v=HiGgOKOUvkI" >
          <img src="\src\assets\images\slideshow-img-2.png"className='w-[300px]'/>
        </a>
        <a href="https://www.facebook.com/AIMSJOBHUB/">
          <img src="\src\assets\images\slideshow-img-3.png"  className='w-[300px]' />
        </a>
        <a href="https://www.instagram.com/aimsjobhub/" >
          <img src="\src\assets\images\slideshow-img-4.png" className=' rounded-full w-[300px]'/>
        </a>
        <a href="https://aims-job-hub.weeblysite.com/" >
          <img src="\src\assets\images\google1.jpeg"  className='rounded-full w-[300px]'/>
        </a>            
        <a href="mailto:hr.aimsjobhub@gmail.com"> <img src="src/assets/images/mail.jpeg" className='rounded-full w-[300px] ' /></a>           
        <a href="https://twitter.com/" >
          <img src="\src\assets\images\twitter1.jpeg" className='w-[300px] rounded-full' />
        </a>            
     
      </CarouselContent>
      
    </Carousel>
{/* carousel end here */}
</div>
    
    </footer>
  )
}

export default Footer;