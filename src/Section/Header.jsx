import React from 'react'
import { useDarkMode } from '../Componets/DarkModeContext'
import { Link } from 'react-scroll'
// import { Link } from 'react-router-dom';
import { FaXmark ,FaBars} from 'react-icons/fa6'
import logo from "../assets/images/logo1.jpg"
import { useState } from 'react'
import { FaPhoneAlt,FaUserCircle } from 'react-icons/fa'
const Header = () => {
  const {darkMode, toggleDarkMode} = useDarkMode();
   const [isMenuOpen ,setIsMenuOpen] = useState(false)
   const toggleMenu = ()=>{
    setIsMenuOpen(isMenuOpen)
   }

   const closeMenu = ()=>{
    setIsMenuOpen(false)
   }
   const navItems =  [
    {
      link:'Home',path:'home'
    },
    {
      link:'About',path:'about'
    },
    ,
    {
      link:'Services',path:'services'
    },
     {
      link:'Contact',path:'contact'
    },

   ]

  return (
    <>
    
  
    <nav className={`${darkMode? 'dark bg-black':'light bg-gray-800'} flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}>
      <div id = 'logo'>
  
<img src={logo} alt="company logo" className='lg:w-[50px] w-[50px] h-[50px] dark:invert rounded-full' />   </div>
<ul className='lg:flex justify-center items-center gap-8 hidden'>
  {navItems.map(({link,path})=>(
  <Link key = {path} className='text-white text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
  ))}
</ul>
     {/* mobile menu icons */}
     <div className='flex justify-center items-center lg:hidden ' onClick = {toggleMenu}>
   <div>
    {isMenuOpen?<FaXmark className='text-black dark:text-white text-2xl  cursor-pointer'/>:<FaBars className = 'text-black dark:text-white text-2xl cursor-pointer'/>}
   </div>
     </div>
  <div className = {`${isMenuOpen?'flex':'hidden'} w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`} onClick = {closeMenu}>
  <ul className='flex flex-col  justify-center items-center gap-2 w-full'>
  {navItems.map(({link,path})=>(
  <Link key = {path} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
  ))}
  </ul>
  </div>
    
    <div className='flex justify-center items-center lg:gap-8 gap-2'>
      <div className='flex justify-center items-center lg:gap-3 gap-1 '>
        <FaPhoneAlt className='size-5 text-red-600'/>
        <h1 className='lg:text-xl text-sm text-white dark:text-white font-semibold'><a href="tel:+918085809797">+918085809797</a></h1>
      </div>
    </div>

    </nav>
    </>
  )
}

export default Header
