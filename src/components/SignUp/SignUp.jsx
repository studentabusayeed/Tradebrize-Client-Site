import React from 'react';
import { FaMobile, FaRegEnvelope, FaShare, FaUser } from 'react-icons/fa';
import { MdLockOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import SocialLogin from '../../shared/Social/SocialLogin';

const SignUp = () => {
    return (
        <div className='h-screen'>
            <div className="shadow-2xl rounded-xl px-7 mx-4 mt-4 pb-20">
                <SocialLogin />
                <div className="max-w-[150px] flex justify-center border-2 border-[#0fcda1] rounded mx-auto my-4"></div>
                <form>
                    <div className="flex flex-col items-start gap-3">
                        <div className="w-full flex items-center gap-2 rounded-lg bg-white cursor-pointer">
                            <FaUser className="w-5 h-5 text-black bg-white pl-2" />
                            <input
                                className="flex-1 bg-white outline-none py-2 text-black"
                                type="name"
                                autoComplete="off"
                                name="name"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="w-full flex items-center gap-2 rounded-lg bg-white cursor-pointer">
                            <FaUser className="w-5 h-5 pl-2 text-black bg-white" />
                            <input
                                className="flex-1 bg-white outline-none py-2 text-black"
                                type="name"
                                autoComplete="off"
                                name="name"
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="w-full flex items-center gap-2 rounded-lg bg-white cursor-pointer">
                            <FaRegEnvelope className="w-5 h-5 pl-2 text-black bg-white" />
                            <input
                                className="flex-1 bg-white outline-none py-2 text-black"
                                type="email"
                                autoComplete="off"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="w-full flex items-center gap-2 rounded-lg bg-white cursor-pointer">
                            <FaShare className="w-5 h-5 pl-2 text-black bg-white" />
                            <input
                                className="flex-1 bg-white outline-none py-2 text-black"
                                type="text"
                                autoComplete="off"
                                name="text"
                                placeholder="Refer Code"
                            />
                        </div>
                        <div className="w-full flex items-center gap-2 rounded-lg bg-white cursor-pointer">
                            <FaMobile className="w-5 h-5 text-black bg-white pl-2" />
                            <input
                                className="flex-1 bg-white outline-none py-2 text-black"
                                type="text"
                                autoComplete="off"
                                name="text"
                                placeholder="Mobile Number"
                            />
                        </div>
                        <div className="w-full flex items-center gap-2 rounded-lg bg-white cursor-pointer">
                            <MdLockOutline className="w-5 h-5 text-black bg-white pl-2" />
                            <input
                                className="flex-1 bg-white outline-none py-2 text-black"
                                type="password"
                                name="password"
                                autoComplete="off"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div className="flex justify-start gap-1 mt-2 text-black text-sm">
                        <div className="flex items-center gap-1">
                            <input
                                type="checkbox"
                                className="checkbox h-4 w-4 checkbox-accent"
                            />
                            <span>I agree to</span>
                        </div>
                        <Link className="text-right inline-block cursor-pointer hover:link text-blue-400 ">
                            Terms and conditions?
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className=" px-6 py-[6px]  border-2 border-teal-300 cursor-pointer text-black mt-3 mb-6 bg-white"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="text-start pb-7 text-sm text-black">
                    <Link
                        to="/login"
                        className="cursor-pointer link hover:text-blue-500 mr-1"
                    >
                        Sign In
                    </Link>
                    if you don't have an account yet.
                </div>
            </div>
        </div>
    );
};

export default SignUp;