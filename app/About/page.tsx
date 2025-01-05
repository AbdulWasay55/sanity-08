import React from 'react'
import { FaUserPlus } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { PiArticleNyTimesBold } from "react-icons/pi";

const Page = () => {
  return (
    <div>
        <div className='flex flex-col items-center'>
            <h1 className='font-bold text-[40px] mb-20 mt-10 '>About Wasay Blog</h1>
            <div className='flex items-center'>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                <div className=' flex items-center bg-[#f2f2f3] w-[350px] h-[200px] rounded-md justify-between p-[30px]'>
                    <h1 className='font-bold text-[32px] text-[#6941C6] w-[50px] h-[50px]'>5000+ Readers</h1>
                    <FaUserPlus className='w-12 h-12 text-[#6941C6]'/>

                </div>

                <div className=' flex items-center bg-[#f2f2f3] w-[350px] h-[200px] rounded-md justify-between p-[30px]'>
                    <h1 className='font-bold text-[28px] text-[#6941C6]  h-[50px]'>24/7 Coustomer Support</h1>
                    <MdSupportAgent className='w-12 h-12 text-[#6941C6]'/>

                </div>

                <div className=' flex items-center bg-[#f2f2f3] w-[350px] h-[200px] rounded-md justify-between p-[30px]'>
                    <h1 className='font-bold text-[32px] text-[#6941C6] w-[50px] h-[50px]'>500+ Articles</h1>
                    <PiArticleNyTimesBold className='w-12 h-12 text-[#6941C6]'/>

                </div>
                </div>
            </div>

            <div className='flex w-[300px] flex-col mt-10 items-center justify-center text-[#667085] md:w-[683px]'>
                <p className=''>Welcome to Wasay blog, your gateway to exploring the incredible beauty and diversity of nature!</p>
                <p >At Wasay blog, we believe in celebrating the wonders of the natural world—its majestic mountains, serene rivers, lush forests, and vibrant ecosystems. Our mission is to inspire a deeper connection with nature and raise awareness about the importance of preserving our planet for future generations.</p>
                <h1 className='font-semibold text-[30px] text-black self-start mt-10'>What We Offer</h1>
                <p className='font-medium my-3'>Through thoughtfully crafted blogs, we take you on a journey across:</p>
                <ul className='flex flex-col gap-2 list-disc text-[black] mb-10'>
                    <li>Towering mountains that guard the Earth’s secrets</li>
                    <li>Flowing rivers, the lifeblood of ecosystems</li>
                    <li>Enchanting forests that breathe life into our planet</li>
                    <li>The vast, mysterious oceans teeming with hidden wonders</li>
                    <li>Unique landscapes like deserts, grasslands, and glaciers</li>
                </ul>

                <h1 className='font-semibold text-[30px] text-black self-start'>Our Vision</h1>
                <p>We aim to spark curiosity and encourage mindfulness about the environment. By sharing stories, insights, and conservation tips, we hope to empower readers to make a positive impact on the natural world.</p>
                 
                 <h1 className='font-semibold text-[30px] text-black self-start'>Join Our Journey</h1>
                 <p>Whether you’re a nature enthusiast, an aspiring environmentalist, or simply someone who loves the outdoors, Wasay Blog is here to inspire, educate, and celebrate the beauty of Earth’s treasures.

Together, let’s explore, appreciate, and protect the natural world.</p>
            </div>
        </div>
    </div>
  )
}

export default Page