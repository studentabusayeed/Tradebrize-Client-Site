import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Position = () => {
    return (
        <div className='h-screen'>
            <Tabs className="text-center font12">
                <TabList className="font-bold cursor-pointer py-4 pt-2 text-black grid grid-cols-3 justify-center">
                    <Tab className="border-b-2 border-transparent rounded-t-lg border-gray-300 hover:border-gray-500 " onClick={() => handleTabClick('car')}>Open Orders</Tab>
                    <Tab onClick={() => handleTabClick('truck')}>Pending Order</Tab>
                    <Tab onClick={() => handleTabClick('police')}>History</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-3 justify-center font-semibold font12'>
                        <div>
                            <p>Position profit<br /> and loss($)<br />
                                0.00</p>
                        </div>
                        <div>
                            <p>Available fun<br />ds($)<br />
                                0</p>
                        </div>
                        <div>
                            <p>Trading marg<br />in($)<br />
                                --</p>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                </TabPanel>
                <TabPanel>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Position;