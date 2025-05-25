import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import logo from '../assets/gora.png';

const About = () => {
  return (
    <div> 
        <NavBar /> 
       <div className='flex justify-center'>
        <div className='mt-8 p-8 rounded h-full bg-gradient-to-bl from-amber-100 to-zinc-400 '>
            <div className='flex p-8'>
          <img src={logo} className='w-10 h-10 sm:w-12 sm:h-12 bg-zinc-500/35 rounded-full' alt='Logo' />
            <h1 className='text-3xl ml-4 mt-2'>About <span className='text-2xl font-bold text-pink-500'>M-Pulse Tech</span></h1>
            </div>
        <h1 className='p-2'>
          Why choose our services<span className='text-pink-400 font-bold'>?</span>
        </h1>
        <ul className='list-disc ml-6 p-6 rounded '>
          <li className='p-2 '  >
            Tailored Web Design: Bespoke websites built to reflect your brand and engage your audience.
          </li>
          <li className='p-2 '  >
            Reliable Hosting: High-performance, secure hosting with 99.9% uptime, so your site is always accessible.
          </li>
          <li className='p-2 '  >
            Expert Database Management: Efficient, scalable database solutions to power your applications and safeguard your data.          </li>
        </ul>
        <p className='p-2'>Whether you're a:</p>
        <div className='lg:flex flex justify-center'>
        <h1 className='w-25 h-25 bg-white rounded-full text-center p-8 '>
             startup
        </h1>
        <h1 className='w-25 h-25 bg-white rounded-full text-center p-8 '>
            small business
        </h1>
        <h1 className='w-25 h-25 bg-white rounded-full text-center p-8 '>
            or enterprise
        </h1>
        </div>
        <p>I deliver solutions that blend innovation, reliability, and style.</p>
        <p>
            Let’s build something extraordinary together—contact me today to transform your digital presence!
        </p>

       </div>
      </div>
      <div class='italic flex justify-center mt-10'>
        <p  className='text-center text-xl text-pink-400 rounded-4xl p-8' >
          "Unlock the full potential of your online vision with cutting-edge web services, hosting, and database management solutions."
        </p>

      </div>
      <Footer />
</div>
  )
}

export default About