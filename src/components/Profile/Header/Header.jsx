import React from 'react';
import { FaHeadphonesAlt, FaChevronLeft } from 'react-icons/fa';
import { FaUserGear } from "react-icons/fa6";
import navLogo from "../../../assets/nav2.png";
import { Link } from 'react-router-dom';
import forec from "../../../assets/forex.png";
const Header = () => {
    return (
        <div className="container flex justify-between px-2 py-2 items-center bg-[#000000] shadow-lg text-white">
            <div className='flex justify-center gap-8 items-center'>
                <Link to="/" className='text-lg text-black'>
                    <FaChevronLeft className='rounded-full text-white' />
                </Link>
                <div>
                    <img src={forec} alt="" style={{ height: 25, borderRadius: "5px" }} />
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <button><FaUserGear style={{ fontSize: "24px", color: "#00FFFF", }} /></button>
                <Link className='text-[#00FFFF] font-semibold font12'>Profile</Link>
            </div>
        </div>

    );
};

export default Header;