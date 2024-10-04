import React, { useEffect } from 'react'

import { DarkModeProvider ,useDarkMode} from '../Componets/DarkModeContext'
import aboutimg from "../assets/images/about.webp"
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FaRegHandPointRight } from "react-icons/fa";





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
    <>
     <div className='bg-gray-800 text-xl font-semibold p-5 ml-1 mr-1 justify-center items-center text-center text-white'>ABOUT US</div>
   
    <section id = "about" className= {`${darkMode? 'dark bg-black':'light bg-gray-300'} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
   
      <div>
        <img  data-aos = 'zoom-in' src={aboutimg} alt="about us"  className = "rounded-2xl lg:w-[500px] lg:h-[600px]"/>
      </div>
  
   <div className='flex flex-col items-start justify-center gap-8'>
    <h1 data-aos = 'zoom-in' className='text-black dark:text-white font-semibold text-[40px] leading-10 '> The Best Services and Technology Solution With More Then 5 Years of Experience</h1>
      <h1 data-aos = 'zoom-in'  data-aos-delay="200" className='text-black  text-[20px] font-semibold leading-10 dark:text-white '>
      <FaRegHandPointRight />Fair Prices

      <FaRegHandPointRight />24/7 Support

      <FaRegHandPointRight /> Professional staff

      <FaRegHandPointRight /> Award Winning


      </h1>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cumque veniam minus iure esse autem saepe molestias vel unde aperiam!</p> */}
      <p data-aos = 'zoom-in 'data-aos-delay="400" className='text-xl text-gray-600 dark:text-white text-justify' >
      We are a team of dedicated professionals passionate about delivering exceptional various services to our clients. Our senior management team boasts over 10 years of experience in the industry, with an extensive network of connections and resources across various sectors.
</p>


      
  <button className='bg-blue-500  dark:bg-blue-700 hover:bg-black dark:hover:bg-white  dark:hover:text-black text-xl p-4 font-semibold rounded-xl text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>READ MORE</button>
 
   </div>
      </section>
      </>
  )
}

export default About
