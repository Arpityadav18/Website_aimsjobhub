import React, { useEffect } from 'react'

import { DarkModeProvider ,useDarkMode} from '../Componets/DarkModeContext'
import aboutimg from "../assets/images/about.webp"
import AOS from 'aos';
import 'aos/dist/aos.css'




const About = () => {

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
    <section id = "about" className= {`${darkMode? 'dark bg-black':'light bg-transparent'} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
      <div>
        <img  data-aos = 'zoom-in' src={aboutimg} alt="about us"  className = "rounded-2xl lg:w-[500px] lg:h-[600px]"/>
      </div>
  
   <div className='flex flex-col items-start justify-center gap-8'>
    <h1 data-aos = 'zoom-in' className='text-red-500 dark:text-white'>WHO WE ARE .. </h1>
      <h1 data-aos = 'zoom-in'  data-aos-delay="200" className='text-black  text-[40px] font-semibold leading-10 dark:text-white '>
    We are provinding you the best candidate here. 
      </h1>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cumque veniam minus iure esse autem saepe molestias vel unde aperiam!</p> */}
      <p data-aos = 'zoom-in 'data-aos-delay="400" className='text-xl text-gray-600 dark:text-white text-justify' > [AIMS JOB HUB]..we  are providing a range of benefits to both employers and job seekers, including access to quality candidates, faster hiring processes, and cost savings.</p>
   
    

      
  <button className='bg-blue-500  dark:bg-blue-700 hover:bg-black dark:hover:bg-white  dark:hover:text-black text-xl p-4 font-semibold rounded-xl text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>READ MORE</button>
 
   </div>
      </section>
  )
}

export default About
