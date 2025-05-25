import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='grid lg:grid-cols-4 h-full bg-slate-950 text-white'>
        <div className=''>
            <h1 className='text-center mt-4 font-bold text-lg text-pink-400'>Quick LInks</h1>
            <ul className='flex justify-center gap-4 p-4'>
                <li className=''><Link>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link>Products</Link></li>
                <li><Link>Contact</Link></li>
            </ul>
        </div>
        <div className=' '>
            <h1 className='text-center mt-4 font-bold text-lg text-pink-400'>Email</h1>
            <h1 className='text-center'>Tebatsomoyaba@gmail.com</h1>
        </div>
        <div className=''>
            <h1 className='text-center mt-4 font-bold text-lg text-pink-400'>Socials</h1>
            <ul className='flex justify-center gap-4 mt-2 '>
                <FaInstagram size={25}/>
                <FaWhatsapp size={25}/>
                <TiSocialFacebook size={25}/>

            </ul>
        </div>
        <div className=''>
            <p className='text-center mt-10'>&copy; {new Date().getFullYear()} NthabiiDev. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer