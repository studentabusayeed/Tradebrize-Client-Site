import React from 'react';
import { FaGift, FaRegNewspaper, FaPersonBooth, FaPeopleArrows } from 'react-icons/fa';
import { FaPeopleRoof, FaArrowsDownToPeople } from "react-icons/fa6";
import './category.css';
import cat1 from "../../../assets/cat1.png"
import cat2 from "../../../assets/cat2.png"
const category = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-4 gap-10'>
                    <div className='flex flex-col items-center'>
                        <FaGift className='text-black category text-4xl p-1 rounded-full' />
                        <p className='text-black font12'>Rewards</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaPeopleRoof className='text-black category text-4xl p-1 rounded-full' />
                        <p className='text-black font12'>Referrals</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaRegNewspaper className='text-black category text-4xl p-1 rounded-full' />
                        <p className='text-black font12'>News</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaPersonBooth className='text-black category text-4xl p-1 rounded-full' />
                        <p className='text-black font12'>Tutorial</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center gap-20 mt-6'>
                <img src={cat1} alt="" className='h-28' />
                <img src={cat2} alt="" className='h-28' />
            </div>
            <div className='text-white flex justify-between gap-2 p-5 mt-5 rounded-2xl items-center bg-[#1B1B1B]'>
                <div>
                    <div className='text-[#84FFE9]'>
                        <p className='font-bold font12'>P2P Trading</p>
                    </div>
                    <p className='font-bold text-1xl font12'>Bank Transfer, Digital Wallet Transfer
                        Mobile Payment and more</p>
                </div>
                    <FaArrowsDownToPeople className='text-[#00FFFF] text-8xl p-1'/>
            </div>
        </div>
    );
};

export default category;