import React, { useEffect } from 'react'
import { DarkModeProvider, useDarkMode } from '../Componets/DarkModeContext'
import homeimg from "../assets/images/home.jpg"
// import AOS from 'aos'
// import 'aos/dist/aos.css'

import AOS from 'aos';
import 'aos/dist/aos.css'
import { Button } from '@/components/ui/button';


const Home = () => {

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

    <div className={`${darkMode? 'dark bg-black':'light bg-white'}`}>
        {/* <section id = "home" className='w-[100%] h-[600px]" m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-20 gap-7 z-20' style={{backgroundImage:`url(${homeimg})`}}> */}

        <section id = "home" className='bg-cover bg-center w-[95%] h-[600px]  m-auto rounded-xl  flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20 ' style={{backgroundImage:`url(${homeimg})`}}>
      <h1 data-aos = 'zoom-in' className='text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]'>"Unlocking Your Potential, One Solution at a Time."</h1> 
  <p data-aos = 'zoom-in' className='text-xl text-white font-semibold lg:pr-[500px] pr-0 '>At [AIMS JOB HUB], we're dedicated to delivering exceptional results for our clients, and we're always on the lookout for talented individuals to join our team of experts.  you're passionate about making a difference, driven to succeed, and committed to delivering outstanding results, we'd love to hear from you  . <Button>click me</Button></p>
        </section>
   
    </div>

    

    <div  className={`${darkMode? 'dark bg-black':'light bg-transparent'} z-10`}>
     <div  data-aos = 'zoom-in'  id='form' className={`${darkMode? 'dark bg-gray-800':'light bg-white'} lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}> 
    {/* <div className='w-full'>
      <h1 className='text-black font-semibold dark:text-white'>LOCATION</h1>
      <input type="text" placeholder='enter an address state,city or pincode' 
      className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1] ' />

    </div> */}
    <div className='w-full'>
  <h1 className='text-black font-semibold dark:text-white'>LOCATION</h1>
  <input type="text" placeholder='enter an address state,city or pincode' 
  className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]' />
</div>

<div className='w-full'>
  <h1 className='text-black font-semibold dark:text-white'>TYPE</h1>
<select name="selectOption" id="selectOption" className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1] text-gray-500 text-md'>
  <option value="disable selected">select job</option>
  <option value="option1">MIS</option>
  <option value="option2">ACCOUNTANT</option>
  <option value="option3">BDE</option>
  <option value="option4">SME</option>
</select>
</div>
 

 
<div className='w-full'>
  <h1 className='text-black font-semibold dark:text-white'>Category</h1>
<select name="selectOption" id="selectOption" className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1] text-gray-500 text-md'>
  <option value="disable selected">CATEGORY</option>
  <option value="option1">MIS</option>
  <option value="option2">ACCOUNTANT</option>
  <option value="option3">BDE</option>
  <option value="option4">SME</option>
</select>
</div>

 <div className='w-full'>
  <button className='bg-blue-500  dark:bg-blue-700 hover:bg-black dark:hover:bg-white  dark:hover:text-black text-xl p-4 w-full font-semibold rounded-xl text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>SUBMIT</button>
 </div>


 
      </div> 
    </div>
   </>
  )
}

export default Home
