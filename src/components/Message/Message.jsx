import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

const Message = () => {
    return (
        <div className='h-screen mt-10'>
            <p className='text-white text-md mx-1 text-center'>Seeking assistance, could you kindly provide guidance? I would greatly appreciate some support on this matter.</p>
            <div className='flex justify-center mt-6'>
                <textarea
                    name="msg"
                    className="form-control supportbox bg-[#242424] p-2 focus:bg-white mx-4 rounded-lg"
                    autoFocus
                    placeholder="Type a message to get support"
                    style={{ border: '1px solid #035f5f', height: '100px', width: '430px' }}
                    spellCheck={false}
                ></textarea>
            </div>
            <fieldset className="w-full text-white mx-4">
                <label for="files" className="inline text-sm font-medium">Screenshot</label>
                <div className="inline">
                    <input type="file" name="files" id="files" className="px-6 py-12 inline dark:text-gray-400 dark:bg-gray-800" />
                </div>
            </fieldset>
            <div className='bg-[#087D7B] px-2 py-1 text-white flex mx-24 rounded-lg gap-2'>
                <FaTelegramPlane className='bg-[#139BD0] text-white rounded-full text-3xl p-1' />
                <button className=''>Send Message</button>
            </div>
        </div>
    );
};

export default Message;