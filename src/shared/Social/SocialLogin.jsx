import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className="flex justify-center items-center gap-4">
            <div
                className="flex items-center justify-center gap-2 border border-slate-500 hover:border-[#0fcda18c] px-2 py-1 text-slate-300 rounded-lg bg-[#17181B] cursor-pointer"
            >
                <span>GitHub</span>
                <FaGithub className="w-5 h-5 text-slate-400" />
            </div>
            <div
                className="flex items-center justify-center gap-2 border border-slate-500 hover:border-[#0fcda18c] px-2 py-1 text-slate-300 rounded-lg bg-[#17181B] cursor-pointer"
            >
                <span>Google</span>
                <FaGoogle className="w-5 h-5 text-slate-400" />
            </div>
        </div>
    );
};

export default SocialLogin;