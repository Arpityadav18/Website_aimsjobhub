import React, { useEffect ,useState} from 'react'
import { DarkModeProvider ,useDarkMode} from '../Componets/DarkModeContext'
import aboutimg from "../assets/images/about.webp"
import AOS from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
const[profile,setProfile]= useState("");
  const [message, setMessage] = useState("");

  

  useEffect(()=>{
    AOS.init({
       offset : 200,
       duration:800,
       easing:'ease-in-sine',
       delay:100,
    });
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to a backend
    console.log({ name, email, mobile,profile, message });
  };
  const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <div className={`${darkMode? 'dark bg-black':'light bg-transparent'}`}>
      <section id = 'contact' className={`${darkMode? 'dark bg-gray-800':'light bg-purple-100'} w-[90%] h-screen m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10 rounded-xl`}>
      <div className='flex flex-col items-start justify-center gap-8'>
        <h1 className='font-semibold text-xl text-blue-900'>GET IN CONNECT</h1>
        <form className = "" onSubmit={handleSubmit}>
        <div data-aos = 'zoom-in' className="flex flex-row">
          <div data-aos = 'zoom-in' className=" w-full">
            <label
              htmlFor="name"
              className="block my-2 text-left text-sm font-medium text-gray-900 "
            >
              Full Name
            </label>
            <input data-aos = 'zoom-in'
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder=" Your Name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          
          <div data-aos = 'zoom-in' className="w-full pl-3">
            <label
              htmlFor="email"
              className="block my-2 text-left text-sm font-medium text-gray-900"
            >
              Email Address
            </label>
            <input data-aos = 'zoom-in'
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your Email "
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>
        <div data-aos = 'zoom-in' className="flex flex-col ">
          <div   data-aos = 'zoom-in' className="w-full pr-2">
            <label
              htmlFor="phone"
              className="block my-2 text-left text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input data-aos = 'zoom-in'
              type="tel"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Phone"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div data-aos = 'zoom-in' className="w-full pr-2">
            <label 
              htmlFor="profile"
              className="block my-2 text-left text-sm font-medium text-gray-900"
            >
             profile
            </label>
            <input data-aos = 'zoom-in'
              type="text"
              id="profile"
              value={profile}
              onChange={(event) => setProfile(event.target.value)}
              placeholder="profile"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div data-aos = 'zoom-in' className="w-full ">
            <label
              htmlFor="message"
              className="block my-2 text-left text-sm font-medium text-gray-900"
            >
              Message
            </label>
            <textarea 
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>
        <button 
        type = 'Submit'
           className="mt-2 p-2 float-right text-white rounded-lg border-green-600 bg-green-600 hover:scale-105"
         
        >
          Send message
        </button>
      </form>
      

      </div>
      <div className='flex flex-col items-start justify-center gap-8'>
      <iframe data-aos = "zoom-in" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117757.61092368203!2d75.80095728906251!3d22.73101617733822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630389b87158a5%3A0xd6b3f098df4f4d64!2sAIMS%20JOB%20HUB%20Placement!5e0!3m2!1sen!2sin!4v1727774989585!5m2!1sen!2sin" width="530" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </section>
    
    </div>
  )
}

export default Contact
