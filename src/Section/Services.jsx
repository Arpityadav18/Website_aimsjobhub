import React, { useEffect } from 'react'
import { DarkModeProvider ,useDarkMode} from '../Componets/DarkModeContext'
import aboutimg from "../assets/images/about.webp"
import AOS from 'aos';
import 'aos/dist/aos.css'


const Services = () => {
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
    <section className={`${darkMode? 'dark bg-gray-800':'light bg-red-100'} lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex flex-col justify-center items-center lg:px-20 px-6 py-20 gap-20 grid lg:grid-cols-3 grid-cols-1`}>
 {/* first card */}
    <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg lg:w-80 w-full">
  <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="card-image" />
  </div>
  <div class="p-4">
    <h6 class="mb-2 text-slate-800 text-xl font-semibold">
      Well Managed Staffing
    </h6>
    <p  data-aos = 'zoom-in'className="text-blue-600 leading-normal font-light">
    Effective staffing is the backbone of any successful organization. A well-managed staffing system ensures that the right people are in the right positions, with the right skills and expertise, to drive business growth and success. In today's fast-paced and competitive business environment, companies that prioritize staffing management are better equipped to adapt to changing.
    </p>
  </div>
  <div class="px-4 pb-4 pt-0 mt-2">
    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Read more
    </button>
  </div>
</div>  
  {/* second card  */}

  <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg lg:w-80 w-full">
  <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="card-image" />
  </div>
  <div class="p-4">
    <h6 class="mb-2 text-slate-800 text-xl font-semibold">
      Permanent Placement
    </h6>
    <p   data-aos = 'zoom-in'class="text-blue-600 leading-normal font-light">
    Permanent placement is a critical component of a consultancy company's services, offering numerous benefits to both clients and candidates. By providing permanent placement solutions, consultancy companies can help clients find the right talent to drive business growth and success, while also supporting candidates in their career development and job search.


    </p>
  </div>
  <div class="px-4 pb-4 pt-0 mt-2">
    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Read more
    </button>
  </div>
</div>  


{/* third card */}

<div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg lg:w-80 w-full">
  <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="card-image" />
  </div>
  <div class="p-4">
    <h6 class="mb-2 text-slate-800 text-xl font-semibold">
      Hand To Hand Hiring
    </h6>
    <p   data-aos = 'zoom-in' class="text-blue-600 leading-normal font-light">
    Hand-to-hand hiring, also known as personal recruitment or direct hiring, is a recruitment strategy where a company hires candidates directly, without the use of recruitment agencies or job boards. This approach allows companies to take a more personalized and targeted approach to hiring, which can lead to better candidate quality, reduced recruitment costs, and improved employee retention.
    
    </p>
  </div>
  <div class="px-4 pb-4 pt-0 mt-2">
    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Read more
    </button>
  </div>
</div>  


    </section>
    </div>
  )
}

export default Services
