import React from 'react'
import BannerCard from "../home/BannerCard"

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='lg:mx-24 flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left Side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-6xl font-bold leading-snug text-black kalnia'>Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span></h2>
                <p className='md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officiis autem, ad ea nisi, veniam ipsum asperiores quaerat reprehenderit enim ipsa dolorum dolore totam sed maxime consequatur accusamus soluta explicabo!</p>
                <div>
                    <input type="search" name="search" id="search" placeholder='search a book' className='py-2 px-2 rounded-s-sm outline-none'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>

            {/* Right Side */}
            <div className=''>
                <BannerCard />
            </div>
        </div>
    </div>
  )
}

export default Banner