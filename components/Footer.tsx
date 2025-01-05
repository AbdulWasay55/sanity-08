import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        
        <div className=" flex flex-col justify-center gap-2.5 border-slate-900/10 border-t-2 relative shadow-lg mt-10" >
        <div className='flex flex-row justify-center gap-2.5 mt-16'>
        
        <a href="https://www.instagram.com/abdul_wasay54" target="_blank" rel="noopener noreferrer" className=' text-pink-700 hover:text-pink-950  self-center'>
        <FaInstagram size={50}  />
      </a>
      <a href="https://www.linkedin.com/in/abdul-wasay-a022422ba" target="_blank" rel="noopener noreferrer"  className=' text-blue-700 hover:text-blue-900  self-center'>
        <FaLinkedin size={50} />
      </a>
      <a href="https://web.facebook.com/wasay.rafay.71" target="_blank" rel="noopener noreferrer"  className=' text-blue-600 hover:text-blue-800  self-center'>
        <FaFacebook size={50} />
      </a>
      <a href="https://github.com/AbdulWasay55" target="_blank" rel="noopener noreferrer"  className=' text-black hover:text-gray-800 self-center'>
        <FaGithub size={50} />
      </a>
      </div>
      <p className="text-center  mt-4">&copy; 2024 Abdul Wasay. All rights reserved.</p>
        </div>
       
    </div>

  )
}

export default Footer