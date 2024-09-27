import React, { useEffect } from 'react'
import { DarkModeProvider ,useDarkMode} from '../Componets/DarkModeContext'
import aboutimg from "../assets/images/about.webp"
import AOS from 'aos';
import 'aos/dist/aos.css'
// import GoogleMap from "/src/Section/GoogleMap.jsx"

const Contact = () => {

  useEffect(()=>{
    AOS.init({
       offset : 200,
       duration:800,
       easing:'ease-in-sine',
       delay:100,
    });
  },[])
  const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <div className={`${darkMode? 'dark bg-black':'light bg-transparent'}`}>
      <section className={`${darkMode? 'dark bg-gray-800':'light bg-purple-100'} w-[90%] h-screen m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10 rounded-xl`}>
      <div className='flex flex-col items-start justify-center gap-8'>
        <h1 className='font-semibold text-xl text-blue-900'>GET IN CONNECT</h1>
       
{/*        
        <div className="grid grid-cols-4">
        <label htmlFor="email">YOUR EMAIL </label>
        
        <div className="mt-2">
          <input id = "email"
           name="email"
                  type="email"
                  autoComplete="email"

                  placeholder=' email here..'
 />
 </div>
        </div> */}
{/* 
        <div className="grid grid-cols-4">
     <label htmlFor="first-name">FIRST NAME</label>
     <div className="sm:col-span-3">
      <input type="text" placeholder='First Name'
     
      /> 
     </div>
      </div>
    */}
    
      {/* <div className="grid grid-cols-4">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  placeholder='last-name'
                  autoComplete="family-name"
                 
                />
              </div>
            </div>
         */}



{/* for resume upload */}


{/* <div className=" grid grid-cols-4">
  <label htmlFor="resume-file">UPLOAD YOUR RESUME</label>
  <div className='mt-2'>
    <input type="file"
    id = "resume-file" 
    placeholder='updload file'
   
     />
  </div>
</div> */}
{/* // mobile no  */}
{/* <div>
  <label htmlFor="phone-no">YOUR PHONE NO</label>
  <div>
    <input type="phoneno" id = "phone-no" placeholder='enter your number' 
    />
  </div>
</div> */}

 {/* about yourself */}
{/* 
 <div className="grid grid-cols-4">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                 
                  defaultValue={''}
                />
              </div>
              <p >Write a few sentences about yourself.</p>
            </div> */}


{/*   
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58882.02683757931!2d75.84073738200752!3d22.723532493238114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1727438488282!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">LOCATION</iframe> */}




      </div>
      </section>
    
    </div>
  )
}

export default Contact
