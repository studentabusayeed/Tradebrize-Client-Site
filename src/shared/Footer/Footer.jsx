import React from 'react';
import { FaHome, FaChartBar, FaTextHeight, FaListUl, FaWallet} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='pb-2'>

            <ul class="flex flex-wrap text-sm font-medium text-center justify-center items-center gap-10">
                <Link class="flex flex-col items-center">
                    <FaHome className='text-white text-2xl' />
                    <a href="#" class="inline-block text-white">
                        Home
                    </a>
                </Link>
                <Link class="flex flex-col items-center">
                    <FaChartBar className='text-white text-2xl' />
                    <a href="#" class="inline-block text-white">
                        Markets
                    </a>
                </Link>
                <Link class="flex flex-col items-center">
                    <FaTextHeight className='text-white text-2xl' />
                    <a href="#" class="inline-block text-white">
                        Trade
                    </a>
                </Link>
                <Link class="flex flex-col items-center">
                    <FaListUl className='text-white text-2xl' />
                    <a href="#" class="inline-block text-white">
                        Position
                    </a>
                </Link>
                <Link class="flex flex-col items-center">
                    <FaWallet className='text-white text-2xl' />
                    <a href="#" class="inline-block text-white">
                        Wallet
                    </a>
                </Link>
            </ul>

        </div>
    );
};

export default Footer;