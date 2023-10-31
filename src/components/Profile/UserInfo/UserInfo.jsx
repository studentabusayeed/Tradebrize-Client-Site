import React from 'react';
import { FaChevronRight, FaHeadphonesAlt, FaLock, FaQuestionCircle, FaTelegram, FaTelegramPlane, FaUserAlt } from 'react-icons/fa';
import ref from "../../../assets/ref.png";
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';
import noty from "../../../assets/noty.png";

const UserInfo = () => {
    return (
        <div className='pb-3'>
            <div className='flex w-full items-center mx-2'>
                <div className='w-[70%] text-white ml-1'>
                    <FaUserAlt className='text-8xl' />
                </div>
                <div className='w-[30%] text-white text-justify'>
                    <p className='font-semibold'>Abu Sayeed</p>
                    <p className='text-[#AAAAAA] text-sm'>UID:</p>
                    <p className='text-[#AAAAAA] text-sm'>256160</p>
                    <p className='text-[#AAAAAA] text-sm'>Unverified</p>
                </div>
            </div>
            <div>
                <div className='text-white p-5 mt-5 rounded-2xl items-center bg-[#1B1B1B]'>
                    <div>
                        <div className='text-[#84FFE9]'>
                            <p className='font-bold'>Verify your identity</p>
                        </div>
                    </div>
                    <p className='text-right'><button className='bg-white rounded-xl text-black px-2 py-1'>Verify</button></p>
                </div>
            </div>
            <div className='flex justify-center bg-[#1B1B1B] mt-3 rounded-2xl'>
                <div className='text-white p-5 mt-5 rounded-2xl items-center'>
                    <div className='text-white text-center'>
                        <p className='text-sm mb-1'>Refer Link</p>
                    </div>
                    <div className='flex justify-center'>
                        <img src={ref} alt="" />
                    </div>
                    <p><button className='text-white font-bold mt-2 px-2 py-1'>https://tradebrize.com/r/256160</button></p>
                </div>
            </div>
            <div className="px-6 py-2 text-white mt-10">
                <ul>
                    <li className='mb-3'>
                        <div className="flex justify-between items-center gap-5">
                            <div className='flex justify-center items-center gap-3'>
                                <button><FaHeadphonesAlt style={{ fontSize: "20px", color: "white" }} /></button>
                                <div className="space-y-1">
                                    <h3 className="text-md">Support</h3>
                                </div>
                            </div>
                            <div className="text-right">
                                <Link to="/" className='text-md text-black'>
                                    <FaChevronRight className='rounded-full text-white' />
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className='mb-3'>
                        <div className="flex justify-between items-center gap-5">
                            <div className='flex justify-center items-center gap-3'>
                                <button><FaUser style={{ fontSize: "20px", color: "white" }} /></button>
                                <div className="space-y-1">
                                    <h3 className="text-md">Profile Details</h3>
                                </div>
                            </div>
                            <div className="text-right">
                                <Link to="/" className='text-md text-black'>
                                    <FaChevronRight className='rounded-full text-white' />
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className='mb-3'>
                        <div className="flex justify-between items-center gap-5">
                            <div className='flex justify-center items-center gap-3'>
                                <button><FaLock style={{ fontSize: "20px", color: "white" }} /></button>
                                <div className="space-y-1">
                                    <h3 className="text-md">Secutiry</h3>
                                </div>
                            </div>
                            <div className="text-right">
                                <Link to="/" className='text-md text-black'>
                                    <FaChevronRight className='rounded-full text-white' />
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className='mb-3'>
                        <div className="flex justify-between items-center gap-5">
                            <div className='flex justify-center items-center gap-3'>
                                <button><img src={noty} alt="" style={{ height: 24, color: "white" }} /></button>
                                <div className="space-y-1">
                                    <h3 className="text-md">Notifications</h3>
                                </div>
                            </div>
                            <div className="text-right">
                                <Link to="/" className='text-md text-black'>
                                    <FaChevronRight className='rounded-full text-white' />
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className='mb-3'>
                        <div className="flex justify-between items-center gap-5">
                            <div className='flex justify-center items-center gap-3'>
                                <button><FaQuestionCircle style={{ fontSize: "20px", color: "white" }} /></button>
                                <div className="space-y-1">
                                    <h3 className="text-md">Support</h3>
                                </div>
                            </div>
                            <div className="text-right">
                                <Link to="/" className='text-md text-black'>
                                    <FaChevronRight className='rounded-full text-white' />
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='flex justify-center mt-3'>
                <div className='text-white p-5 mt-5 rounded-2xl items-center'>
                    <div className='flex justify-center'>
                        <FaTelegramPlane className='bg-[#139BD0] text-black rounded-full text-3xl p-1'/>
                    </div>
                    <div className='text-white text-center'>
                        <p className='text-md'>Support</p>
                    </div>
                    <p><button className='text-white text-md px-2'>https://t.me/tbzsupport</button></p>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='text-white p-5 rounded-2xl items-center'>
                    <div className='flex justify-center'>
                        <FaTelegramPlane className='bg-[#139BD0] text-black rounded-full text-3xl p-1'/>
                    </div>
                    <div className='text-white text-center'>
                        <p className='text-md'>Channel</p>
                    </div>
                    <p><button className='text-white text-md px-2'>https://t.me/tbzsupport</button></p>
                </div>
            </div>
            <Link className='bg-[#15C7A7] rounded-xl block text-center text-white py-2 mx-14 hover:bg-[#96bff1] mt-6 mb-2'>Logout</Link>
        </div>
    );
};

export default UserInfo;