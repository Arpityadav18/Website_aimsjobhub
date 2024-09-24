import React, { useEffect } from 'react'
import { DarkModeProvider, useDarkMode } from '../Componets/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'
import homeimg from "../assets/images/home1.jpg"

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
    <div className={`${darkMode? 'dark bg-black':'light bg-whte'}`}>
        <section id = "home" className='w-[95%] h-600px m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20' style={{backgroundImage:`url(${homeimg})`}}>

        </section>
    
    </div>
  )
}

export default Home
