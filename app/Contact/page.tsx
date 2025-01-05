import React from 'react'
import { Poppins } from "next/font/google";
const fontPoppins = Poppins({
    subsets: ['latin'],
    weight:["400","700"]
  })
const page = () => {
  return (
    <div>
        <div className='mx-1 lg:mx-[240px] h-[1144px] flex flex-col justify-center items-center'>
            <div className={`flex flex-col gap-[20px] ${fontPoppins.className} items-center`}>
                <h1 className='text-[36px] leading-[54px] font-semibold'>Get In Touch With Us</h1>
                <p className='text-[16px] leading-[24px] text-[#9F9F9F] w-[300px] md:w-[644px] h-[48px] text-center' >For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div className=' w-[350px] lg:w-[1058px] h-[923px] flex gap-5 '>  
               

                <div className={`w-[300px] md:w-[635px] h-[923px] flex p-10 pt-20 ${fontPoppins.className}`}>
                    <div className='w-[300px] md:w-[531px] h-[741px] flex flex-col gap-10'>
                        <div className={`w-[300px] md:w-[530px] h-[121px] flex flex-col gap-5 ${fontPoppins}`}>
                            <label htmlFor="name" className={`text-[16px] leading-6 font-medium ${fontPoppins.className}`}>Your name</label>
                            <input type="text" placeholder='Enter Your Name' className='w-[300px] md:w-[528.75px] h-[75px] rounded-[10px] border border-[#9F9F9F] p-10' />
                        </div>

                        <div className={` w-[300px] md:w-[530px] h-[121px] flex flex-col gap-5 ${fontPoppins}`}>
                            <label htmlFor="name"  className={`text-[16px] leading-6 font-medium ${fontPoppins.className}`}>Email address</label>
                            <input type="text" placeholder='Abc@def.com' className='w-[300px] md:w-[528.75px] h-[75px] rounded-[10px] border border-[#9F9F9F] p-10' />
                        </div>


                        <div className={` w-[300px] md:w-[530px] h-[121px] flex flex-col gap-5 ${fontPoppins}`}> 
                            <label htmlFor="name"  className={`text-[16px] leading-6 font-medium ${fontPoppins.className}`}>Subject</label>
                            <input type="text" placeholder='This is an optional' className='w-[300px] md:w-[528.75px] h-[75px] rounded-[10px] border border-[#9F9F9F] p-10' />
                        </div>


                        <div className={`w-[300px] md:w-[530px] h-[166px] flex flex-col gap-5 ${fontPoppins}`}>
                            <label htmlFor="name"  className={`text-[16px] leading-6 font-medium ${fontPoppins.className}`}>Message</label>
                            <input type="text" placeholder='Hi! i’d like to ask about' className=' w-[300px] md:w-[528.75px] h-[120px] rounded-[10px] border border-[#9F9F9F] p-10' />
                        </div>

                        <div className='w-[237px] h-[55px] bg-[#6941C6] text-white rounded-[5px] text-[16px] leading-6   flex justify-center items-center '>Submit</div>
                    </div>
                    
                        
                </div>
            </div>

        </div>


        
    </div>
   )
}

export default page

