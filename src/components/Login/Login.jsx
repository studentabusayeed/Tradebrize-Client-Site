import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import SocialLogin from '../../shared/Social/SocialLogin';
import secure from '../../assets/secure.png';

const Login = () => {
    return (
        <div className='h-screen'>
            <div className="shadow-2xl rounded-xl px-7 mx-4 mt-14">
                <div className="flex justify-center py-4">
                    <img src={secure} alt="" style={{width: "60px"}} />
                </div>
                <SocialLogin />
                <div className="max-w-[150px] flex justify-center border-2 border-[#0fcda1] rounded mx-auto my-6"></div>
                <form>
                    <div className="flex flex-col items-start gap-3">
                        <div className="w-full flex items-center gap-2 rounded-lg bg-white cursor-pointer">
                            <FaRegEnvelope className="w-5 h-5 text-black bg-white pl-2" />
                            <input
                                className="flex-1 bg-white outline-none py-2 text-black"
                                type="email"
                                autoComplete="off"
                                name="email"
                                placeholder="Email"
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
                    <div className="flex justify-end mt-1">
                        <span
                            className="text-right cursor-pointer hover:link text-black hover:text-blue-500 text-sm"
                        >
                            Forgot your password?
                        </span>
                    </div>
                    <button
                        type="submit"
                        className=" px-6 py-[6px] text-black border-2 border-teal-300 cursor-pointer mt-3 mb-6 bg-white"
                    >
                        Sign In
                    </button>
                </form>
                <div className="text-center pb-7 text-sm text-black">
                    <Link
                        to="/signup"
                        className="cursor-pointer link hover:text-blue-500 mr-1"
                    >
                        Sign Up
                    </Link>
                    if you don't have an account yet.
                </div>
            </div>
        </div>
    );
};

export default Login;