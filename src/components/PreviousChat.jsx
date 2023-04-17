import React from 'react';
import { BsSend } from 'react-icons/bs';

const PreviousChat = (props) => {
    return (
        <div className='bg-dark-600 w-full text-gray-50 p-3 overflow-y-scroll relative'>
            <div className="h-full flex flex-col justify-center">
                <div className="">
                    <h1 className='text-3xl font-bold text-center'>Previous Chat</h1>
                </div>
            </div>
            <div className="search flex justify-center absolute fixed bottom-8 left-0 right-0 z-50">
                <form
                    className="relative w-6/12"
                    onSubmit={props.handleSubmit}
                >
                    <input type="text" id='msg' placeholder="Ask your question..." required disabled className='w-full bg-dark-500 text-gray-50 p-3 rounded outline-none focus:outline-none focus:shadow-lg cursor-cursor-not-allowed' />
                    <button disabled type='submit' className='absolute right-5 top-4 cursor-not-allowed'><BsSend /></button>
                </form>
            </div>
        </div>
    );
};

export default PreviousChat;