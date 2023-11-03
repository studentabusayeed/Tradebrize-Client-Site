import React from 'react';

const Secutiry = () => {

    return (
        <section className='w-full text-white'>
            <div>
                <div className="collapse collapse-plus rounded-none shadow-2xl mb-2 bg-[#0B8F86]">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title flex justify-between" >
                        <button className='text-white font-bold font12'>Account Password</button>
                        <p className='text-white font-semibold font12'>Edit</p>
                    </div>
                        <div className="collapse-content">
                            <form className="max-w-md mx-auto p-4 text-black">
                                <div className="mb-4">
                                    <label htmlFor="oldPassword" className="block font12 font-medium text-white">
                                        Old Password
                                    </label>
                                    <input
                                        type="password"
                                        className="mt-1 p-2 w-full border border-gray-300 rounded"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="newPassword" className="block font12 font-medium text-white">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        className="mt-1 p-2 w-full border border-gray-300 rounded"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="confirmPassword" className="block font12 font-medium text-white">
                                        Confirm New Password
                                    </label>
                                    <input
                                        type="password"
                                        className="mt-1 p-2 w-full border border-gray-300 rounded"
                                    />
                                </div>
                                <div className='flex justify-center'>
                                    <button type="submit" className="bg-blue-400 font12 text-white px-20 font-semibold py-2 rounded-2xl hover:bg-blue-500">
                                        Change
                                    </button>
                                </div>
                            </form>
                        </div>
                </div>
                <div className="collapse collapse-plus rounded-none shadow-2xl mb-2 bg-[#0B8F86]">
                    <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title flex justify-between" >
                            <button className='text-white font-bold font12'>Email Address</button>
                            <p className='text-white font-semibold font12'>Edit</p>
                        </div>
                    <div className="collapse-content">
                        <div className="max-w-2xl mx-auto p-4 text-black">
                            <div className="mb-4">
                                <label htmlFor="fullName" className="block font12 font-medium text-white">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="mobileNumber" className="block font12 font-medium text-white">
                                    Mobile Number
                                </label>
                                <input
                                    type="text"
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="oldEmailAddress" className="block font12 font-medium text-white">
                                    Old Email Address
                                </label>
                                <input
                                    type="email"
                                    id="oldEmailAddress"
                                    name="oldEmailAddress"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="newEmailAddress" className="block font12 font-medium text-white">
                                    New Email Address
                                </label>
                                <input
                                    type="email"
                                    id="newEmailAddress"
                                    name="newEmailAddress"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="cardType" className="block font12 font-medium text-white">
                                    Select Card Type
                                </label>
                                <select
                                    id="cardType"
                                    name="cardType"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded font12"
                                >
                                    <option value="Passport">Passport</option>
                                    <option value="ID Card">ID Card</option>
                                    <option value="Driver's License">Driver's License</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="cardNumber" className="block font12 font-medium text-white">
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    id="cardNumber"
                                    name="cardNumber"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded font12"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="cardFrontImage" className="block font12 font-medium text-white">
                                    Card Front Image
                                </label>
                                <input
                                    type="file"
                                    id="cardFrontImage"
                                    name="cardFrontImage"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded font12"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="cardBackImage" className="block font12 font-medium text-white">
                                    Card Back Image
                                </label>
                                <input
                                    type="file"
                                    id="cardBackImage"
                                    name="cardBackImage"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded font12"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-plus rounded-none shadow-2xl mb-2 bg-[#0B8F86]">
                    <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title flex justify-between" >
                            <button className='text-white font-bold font12'>Phone Number</button>
                            <p className='text-white font-semibold font12'>Edit</p>
                        </div>
                    <div className="collapse-content">
                        <form className="max-w-md mx-auto p-4 text-black">
                            <div className="mb-4">
                                <label htmlFor="confirmNumber" className="block font12 font-medium text-white">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded"
                                />
                            </div>
                            <div className='flex justify-center'>
                                <button type="submit" className="bg-blue-400 font12 text-white px-20 font-semibold py-2 rounded-2xl hover:bg-blue-500">
                                    Change
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Secutiry;