import React from 'react';
import nav3 from '../../assets/nav2.png';
import fund from '../../assets/fund.png';
import google from '../../assets/googleplay2.png';
import app from '../../assets/applestore.png';
import { Link } from 'react-router-dom';

const LogReg = () => {
    return (
        <div className='h-screen'>
            <div className='flex justify-center items-center pt-2'>
                <img src={nav3} alt="" style={{ height: 40 }} />
            </div>
            <h2 className='text-lg font-semibold pl-3 pt-8'>Welcome to <span className='font-bold'>Tradebrize</span></h2>
            <div className="text-center pb-6 pt-14">
                <div className="">
                    <div className='flex justify-center items-center'>
                        <div className="w-28 h-28">
                            <img src={fund} alt="Protection Fund" />
                        </div>
                    </div>
                    <div className="ml-4 mt-4 mb-6">
                        <h2 className="text-black text-2xl font-bold">Protection Fund</h2>
                        <div>Our 300M USDT fund gives an extra layer of protection against security threats.</div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Link to="/signup" className='bg-white text-lg px-20 w-3/4 py-2 text-black text-center'><button>Register</button></Link>
            </div>
            <div className='flex justify-center items-center py-3'>
                <Link to="/login" className='bg-white text-lg px-20 py-2 w-3/4 text-black text-center'><button>Login</button></Link>
            </div>
            <div className='flex justify-center items-center gap-6 pt-8'>
                <img src={google} alt="" style={{ height: 40 }} />
                <img src={app} alt="" style={{ height: 40 }} />
            </div>
        </div>
    );
};

export default LogReg;