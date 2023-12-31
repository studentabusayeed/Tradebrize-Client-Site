import React from 'react';
import { FaHome, FaChartBar, FaTextHeight, FaListUl, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className=''>
            <ul class="flex footer max-w-sm mx-auto flex-wrap font12 bg-[#000000] py-3 font-medium text-center justify-center items-center gap-8">
                <Link class="flex flex-col items-center">
                    <FaHome className='text-white font12' />
                    <a href="#" class="inline-block text-white">
                        Home
                    </a>
                </Link>
                <Link to="/markets" class="flex flex-col items-center">
                    <FaChartBar className='text-white font12' />
                    <a href="#" class="inline-block text-white">
                        Markets
                    </a>
                </Link>
                <Link to="/trade" class="flex flex-col items-center">
                    <FaTextHeight className='text-white font12' />
                    <a href="#" class="inline-block text-white">
                        Trade
                    </a>
                </Link>
                <Link to="/position" class="flex flex-col items-center">
                    <FaListUl className='text-white font12' />
                    <a href="#" class="inline-block text-white">
                        Position
                    </a>
                </Link>
                <Link to="/wallet" class="flex flex-col items-center">
                    <FaWallet className='text-white font12' />
                    <a href="#" class="inline-block text-white">
                        Wallet
                    </a>
                </Link>
            </ul>
        </div>
    );
};

export default Footer;