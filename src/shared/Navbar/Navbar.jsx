import React from 'react';
import { FaUserCircle, FaHeadphonesAlt } from 'react-icons/fa';
import navLogo from "../../assets/navlogo.png"
import noty from "../../assets/noty.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="container flex justify-between px-2 py-2 mb-4 items-center bg-[#000000] shadow-lg rounded-2xl text-white">
            <Link to="/profile" className='text-4xl text-black'>
                <FaUserCircle className='bg-[#00BDC6] rounded-full' />
            </Link>
            <div>
                <img src={navLogo} alt="" style={{ height: 25 }} />
            </div>
            <div className='flex items-center gap-4'>
                <Link to="/message"><button><FaHeadphonesAlt style={{ fontSize: "20px", color: "white" }} /></button></Link>
                <Link to="/notification"><button><img src={noty} alt="" style={{ height: 30, color: "white" }} /></button></Link>
            </div>
        </div>

    );
};

export default Navbar;