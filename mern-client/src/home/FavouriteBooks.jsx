import React from 'react'
import FavBookImg from "../assets/favoritebook.jpg"
import { Link } from "react-router-dom";

const FavouriteBooks = () => {
  return (
    <div className='py-6 px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
        </div>
        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leadgin-snug kalnia'>Find your Favourite <span className='text-blue-700'>Book Here!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero temporibus iusto eligendi cupiditate repellat laborum. Commodi, eaque quidem! Quidem possimus aliquid officia, corrupti doloremque ea accusantium dolorem numquam totam? Labore.</p>
            
            {/* stats */}
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>550+</h3>
                    <p className='text-base'>Register Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1200+</h3>
                    <p className='text-base'>PDF Downloads</p>
                </div>
            </div>

            {/* button */}
            <Link to="/shop" className='pt-6 block'>
                <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore more!</button>
            </Link>
        </div>
    </div>
  )
}

export default FavouriteBooks