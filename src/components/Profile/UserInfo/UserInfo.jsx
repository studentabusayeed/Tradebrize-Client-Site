import React from 'react';
import { FaChevronRight, FaHeadphonesAlt, FaLock, FaQuestionCircle, FaTelegram, FaTelegramPlane, FaUserAlt } from 'react-icons/fa';
import ref from "../../../assets/ref.png";
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';
import noty from "../../../assets/noty.png";

const UserInfo = () => {
    return (
        <div className='pb-3 mt-4'>
            <div className='flex w-full items-center mx-2'>
                <div className='w-[70%] text-black ml-1'>
                    <FaUserAlt className='text-8xl' />
                </div>
                <div className='w-[30%] text-black text-justify'>
                    <p className='font-semibold font12'>Abu Sayeed</p>
                    <p className='text-black font12'>UID:</p>
                    <p className='text-black font12'>256160</p>
                    <p className='text-black font12'>Unverified</p>
                </div>
            </div>
            <div>
                <div className='text-white p-5 mt-5 rounded-2xl items-center bg-[#1B1B1B]'>
                    <div>
                        <div className='text-[#84FFE9]'>
                            <p className='font-bold font12'>Verify your identity</p>
                        </div>
                    </div>
                    <p className='text-right'><button className='bg-white font12 text-black px-2 py-1'>Verify</button></p>
                </div>
            </div>
            <div className='flex justify-center bg-[#1B1B1B] mt-3 rounded-2xl'>
                <div className='text-white p-5 mt-5 rounded-2xl items-center'>
                    <div className='text-white text-center'>
                        <p className='font12 mb-1'>Refer Link</p>
                    </div>
                    <div className='flex justify-center'>
                        <img src={ref} alt="" style={{ width: "200px" }} />
                    </div>
                    <p><button className='text-white font12 font-bold mt-2 px-2 py-1'>https://tradebrize.com/r/256160</button></p>
                </div>
            </div>
            <div className="px-6 py-2 text-black mt-10">
                <ul>
                    <li className='mb-3'>
                        <div className="flex justify-between items-center gap-5">
                            <div className='flex justify-center items-center gap-3'>
                                <Link to="/message"><FaHeadphonesAlt style={{ fontSize: "20px", color: "black" }} /></Link>
                                <h3 className="font12">Support</h3>
                            </div>
                            <div className="text-right">
                                <Link to="/message" className='font12 text-black'>
                                    <FaChevronRight className='rounded-full text-black' />
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className='mb-3'>
                        <div className="flex justify-between items-center gap-5">
                            <div className='flex justify-center items-center gap-3'>
                                <Link to="/profileDetails"><FaUser style={{ fontSize: "20px", color: "black" }} /></Link>
                                <div className="space-y-1">
                                    <h3 className="font12">Profile Details</h3>
                                </div>
                            </div>
                            <div className="text-right">
                                <Link to="/profileDetails" className='font12 text-black'>
                                    <FaChevronRight className='rounded-full text-black' />
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className='mb-3'>
                        <div className="flex justify-between items-center gap-5">
                            <div className='flex justify-center items-center gap-3'>
                                <Link className='secutiry'><FaLock style={{ fontSize: "20px", color: "black" }} /></Link>
                                <div className="space-y-1">
                                    <h3 className="font12">Secutiry</h3>
                                </div>
                            </div>
                            <div className="text-right">
                                <Link to="/secutiry" className='font12 text-black'>
                                    <FaChevronRight className='rounded-full text-black' />
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className='mb-3'>
                        <div className="flex justify-between items-center gap-5">
                            <div className='flex justify-center items-center gap-3'>
                                <Link to="/notification"><img src={noty} alt="" style={{ height: 24, backgroundColor: "black" }} /></Link>
                                <div className="space-y-1">
                                    <h3 className="font12">Notifications</h3>
                                </div>
                            </div>
                            <div className="text-right">
                                <Link to="/notification" className='font12 text-black'>
                                    <FaChevronRight className='rounded-full text-black' />
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className='mb-3'>
                        <div className="flex justify-between items-center gap-5">
                            <div className='flex justify-center items-center gap-3'>
                                <Link to="/about"><FaQuestionCircle style={{ fontSize: "20px", color: "black" }} /></Link>
                                <div className="space-y-1">
                                    <h3 className="font12">About Tradebrize
                                    </h3>
                                </div>
                            </div>
                            <div className="text-right">
                                <Link to="/about" className='font12 text-black'>
                                    <FaChevronRight className='rounded-full text-black' />
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='flex justify-center mt-3'>
                <div className='text-black p-5 mt-5 rounded-2xl items-center'>
                    <div className='flex justify-center'>
                        <FaTelegramPlane className='bg-[#139BD0] text-black rounded-full text-3xl p-1' />
                    </div>
                    <div className='text-black text-center'>
                        <p className='font12'>Support</p>
                    </div>
                    <p><button className='text-black font12 px-2'>https://t.me/tbzsupport</button></p>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='text-black p-5 rounded-2xl items-center'>
                    <div className='flex justify-center'>
                        <FaTelegramPlane className='bg-[#139BD0] text-black rounded-full text-3xl p-1' />
                    </div>
                    <div className='text-black text-center'>
                        <p className='font12'>Channel</p>
                    </div>
                    <p><button className='text-black font12 px-2'>https://t.me/tbzsupport</button></p>
                </div>
            </div>
            <Link className='bg-[#15C7A7] rounded-xl font12 block text-center text-black py-2 mx-14 hover:bg-[#96bff1] mt-6 mb-2'>Logout</Link>
        </div>
    );
};

export default UserInfo;