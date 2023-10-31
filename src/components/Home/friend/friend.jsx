import React from 'react';
import { FaRegEye } from 'react-icons/fa';

const friend = () => {
    return (
        <div className='text-white flex justify-between px-2 items-center'>
            <div>
                <div className='flex justify-center items-center gap-1 text-[#AAAAAA]'>
                    <p className='font-semibold'>USDT Overview</p><FaRegEye className='font-bold' />
                </div>
                <p className='font-bold text-1xl'>0.00000000</p>
            </div>
            <button class="bg-[#00BDC6] hover:bg-[#569194] text-white font-bold py-2 px-4 rounded-full">
                Add Funds
            </button>
        </div>
    );
};

export default friend;