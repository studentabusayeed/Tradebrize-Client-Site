import React from 'react';

const ProfileDetails = () => {
    return (
        <div>
            <div className='p-4 font12 font-semibold'>
                <p className='mb-3'>Phone number<br />
                    1875772978</p>
                <p className='mb-3'>Email<br />
                    studentabusayeed2@gmail.com</p>
                <p className='mb-3'>USDTRC20 Address</p>
            </div>
            <div className="p-4">
                <div className="mb-4">
                    <label className="block text-gray-700 font12 font-bold mb-2">
                        Real Name
                    </label>
                    <input
                        className="w-full border rounded-md font12 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Abu Sayeed"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font12 font-bold mb-2">
                        Gender
                    </label>
                    <input
                        className="w-full border font12 rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="gender"
                        type="text"
                        placeholder="Male"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font12 font-bold mb-2">
                        City
                    </label>
                    <input
                        className="w-full border font12 rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="city"
                        type="text"
                        placeholder="City"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font12 font-bold mb-2">
                        Address
                    </label>
                    <input
                        className="w-full border font12 rounded-md py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="address"
                        type="text"
                        placeholder="Address"
                    />
                </div>
            </div>

            <div className='p-4 ml-1 font12 font-semibold'>
                <p className='mb-3'>Country<br />
                    Bangladesh
                </p>
            </div>
            <div className='flex justify-center mb-4'>
                <button type="button" className="px-20 text-center font12 py-3 font-semibold rounded-full bg-white dark:text-gray-800">Rounded</button>
            </div>
        </div>
    );
};

export default ProfileDetails;