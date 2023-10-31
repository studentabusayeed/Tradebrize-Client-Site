import React from 'react';
import Marquee from "react-fast-marquee";
import { FaBullhorn } from 'react-icons/fa';
import "./marque.css";
const marque = () => {
    return (
        <div className='text-white w-[98%] mx-1 mt-4 mb-8 mar rounded-xl py-1 flex justify-center items-center gap-2'>
            <FaBullhorn className='pl-1 text-xl'/>
            <Marquee>
                <div className='annoucement-test test1'>
                    <span>
                        Welcome To Tradebrize AI Smart Trade, We are Open 5 Days in a week.
                    </span>
                </div>
            </Marquee>
        </div>
    );
};

export default marque;