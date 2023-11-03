import React from 'react';
import { FaArrowsDownToPeople, FaTableList } from 'react-icons/fa6';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import wal from "../../assets/wallet.png"

const Wallet = () => {
    return (
        <div className=''>
            <Tabs className="text-center font12">
                <TabList className="font-bold cursor-pointer py-4 pt-2 text-black grid grid-cols-4 justify-center">
                    <Tab className="border-b-2 border-transparent rounded-t-lg border-gray-300 hover:border-gray-500 ">Spot</Tab>
                    <Tab>Funding</Tab>
                    <Tab>Earn</Tab>
                    <Tab>History</Tab>
                </TabList>

                <TabPanel>
                    <div className='text-start mb-10 font12'>
                        <p className='ml-6 font-bold text-black mb-3'>0.00 USDT</p>
                        <button type="button" className="ml-4 px-8 py-3 font-semibold rounded-xl bg-[white] text-black">Transfer</button>
                        <div className='text-white flex justify-between gap-2 p-5 mt-5 rounded-2xl items-center bg-[#1B1B1B]'>
                            <div>
                                <div className='text-[#84FFE9]'>
                                    <p className='font-bold'>P2P Trading</p>
                                </div>
                                <p className='font-bold text-1xl'>Bank Transfer, Digital Wallet Transfer
                                    Mobile Payment and more</p>
                            </div>
                            <FaArrowsDownToPeople className='text-[#00FFFF] text-8xl p-1' />
                        </div>
                        <h2 className='my-8 font-semibold text-center'>Tradebrize Roadmap</h2>
                        <img src={wal} alt="" />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='text-start mb-10 font12'>
                        <p className='ml-6 font-bold text-black mb-3'>0.00 USDT</p>
                        <div className='grid grid-cols-3 justify-center'>
                            <button type="button" className="px-3 mx-2 py-2 font-semibold rounded-xl bg-[white] text-black font12">Add Fund</button>
                            <button type="button" className="px-3 mx-2 py-2 font-semibold rounded-xl bg-[white] text-black font12">Withdraw</button>
                            <button type="button" className="mx-2 px-3 py-2 font-semibold rounded-xl bg-[white] text-black font12">Transfer</button>
                        </div>
                        <div className='text-white flex justify-between gap-2 p-5 mt-5 rounded-2xl items-center bg-[#1B1B1B]'>
                            <div>
                                <div className='text-[#84FFE9]'>
                                    <p className='font-bold'>P2P Trading</p>
                                </div>
                                <p className='font-bold text-1xl'>Bank Transfer, Digital Wallet Transfer
                                    Mobile Payment and more</p>
                            </div>
                            <FaArrowsDownToPeople className='text-[#00FFFF] text-8xl p-1' />
                        </div>
                        <h2 className='my-8 font-semibold text-center'>Tradebrize Roadmap</h2>
                        <img src={wal} alt="" />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='text-start mb-10 font12'>
                        <p className='ml-6 font-bold text-black mb-3'>0.00 USDT</p>
                        <div className='flex justify-start gap-5 items-center'>
                            <button type="button" className="ml-4 px-8 py-3 font-semibold rounded-xl bg-[white] text-black">Transfer</button>
                            <p className='bg-white px-4 py-2 rounded-lg'><FaTableList className='text-2xl bg-white text-black'></FaTableList></p>
                        </div>
                        <div className='text-white flex justify-between gap-2 p-5 mt-5 rounded-2xl items-center bg-[#1B1B1B]'>
                            <div>
                                <div className='text-[#84FFE9]'>
                                    <p className='font-bold'>P2P Trading</p>
                                </div>
                                <p className='font-bold text-1xl'>Bank Transfer, Digital Wallet Transfer
                                    Mobile Payment and more</p>
                            </div>
                            <FaArrowsDownToPeople className='text-[#00FFFF] text-8xl p-1' />
                        </div>
                        <h2 className='my-8 font-semibold text-center'>Tradebrize Roadmap</h2>
                        <img src={wal} alt="" />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='text-start h-screen font12'>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Wallet;