import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import SocialLogin from '../../shared/Social/SocialLogin';

const Login = () => {
    return (
        <div className="shadow-2xl rounded-xl px-7 mx-4 my-4">
            <div className="flex justify-center py-4">
                <img className="w-44 md:w-48" src="/src/assets/nav2.png" alt="logo" />
            </div>
            <SocialLogin />
            <div className="max-w-[150px] flex justify-center border-2 border-[#0fcda1] rounded mx-auto my-6"></div>
            <form>
                <div className="flex flex-col items-start gap-3">
                    <div className="w-full flex items-center gap-2 border border-slate-500 hover:border-[#0fcda18c] px-2 rounded-lg bg-[#17181B] cursor-pointer">
                        <FaRegEnvelope className="w-5 h-5 text-[#0fcda156]" />
                        <input
                            className="flex-1 bg-transparent text-base outline-none py-2 text-white"
                            type="email"
                            autoComplete="off"
                            name="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="w-full flex items-center gap-2 border border-slate-500 hover:border-[#0fcda18c] px-2 rounded-lg bg-[#17181B] cursor-pointer">
                        <MdLockOutline className="w-5 h-5 text-[#0fcda156]" />
                        <input
                            className="flex-1 bg-transparent text-base outline-none py-2 text-white"
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
                    className=" px-6 py-[6px] trade-button border-0 cursor-pointer mt-3 mb-6 bg-[#17181B]"
                >
                    Sign In
                </button>
            </form>
            <div className="text-center pb-7 text-sm text-black">
                <Link
                    to="/signup"
                    className="cursor-pointer link hover:text-blue-500 mr-1"
                >
                    Sign up
                </Link>
                if you don't have an account yet.
            </div>
        </div>
    );
};

export default Login;