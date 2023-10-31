import React from 'react';
import { FaHeadphonesAlt, FaChevronLeft } from 'react-icons/fa';
import { FaUserGear } from "react-icons/fa6";
import navLogo from "../../../assets/navlogo.png";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="container flex justify-between px-2 py-2 mb-4 items-center bg-[#000000] shadow-lg rounded-2xl text-white">
            <div className='flex justify-center gap-8 items-center'>
                <Link to="/" className='text-lg text-black'>
                    <FaChevronLeft className='rounded-full text-white' />
                </Link>
                <div>
                    <img src={navLogo} alt="" style={{ height: 25 }} />
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <button><FaUserGear style={{ fontSize: "24px", color: "#00FFFF", }} /></button>
                <Link className='text-[#00FFFF] font-semibold text-xl'>Profile</Link>
            </div>
        </div>

    );
};

export default Header;