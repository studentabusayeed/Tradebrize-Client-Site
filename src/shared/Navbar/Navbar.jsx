import React from 'react';
import { FaUserCircle, FaHeadphonesAlt } from 'react-icons/fa';
// import navLogo from "../../assets/navlogo.png"
import noty from "../../assets/noty.png"
import noty1 from "../../assets/nav2.png"
import { Link } from 'react-router-dom';
import forex from '../../assets/forex.png';
const Navbar = () => {
    return (
        <div className="container flex justify-between px-2 py-2 mb-4 items-center bg-[#000000] shadow-lg text-white">
            <Link to="/profile" className='text-2xl text-black'>
                <FaUserCircle className='bg-white rounded-full' />
            </Link>
            <div>
                <img src={forex} alt="" style={{ height: 28, borderRadius: "5px" }} />
            </div>
            <div className='flex items-center gap-4'>
                <Link to="/message"><button><FaHeadphonesAlt style={{ fontSize: "18px", color: "white" }} /></button></Link>
                <Link to="/notification"><button><img src={noty} alt="" style={{ height: 24, color: "white" }} /></button></Link>
            </div>
        </div>

    );
};

export default Navbar;