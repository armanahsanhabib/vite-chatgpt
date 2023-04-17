import React from 'react';
import { BsLightning, BsSend, BsSun } from 'react-icons/bs';
import { IoWarningOutline } from 'react-icons/io5';

const Homepage = (props) => {
    return (
        <div className='bg-dark-600 w-full text-gray-50 p-3 overflow-y-scroll relative'>
            <div className="h-full flex flex-col justify-center">
                <div className="">
                    <h1 className='text-3xl font-bold text-center'>ChatGPT Clone</h1>
                </div>
                <div className='flex justify-center'>
                    <div className="w-64">
                        <div className='text-xl font-medium mx-auto text-center mb-5 mt-10'>
                            <BsSun className='mx-auto mb-2 text-2xl' />
                            Examples
                        </div>
                        <div className="px-3 py-4 bg-dark-500 rounded-md text-center text-sm">
                            Explain quantum computing in simple terms
                        </div>
                        <div className="px-3 py-4 bg-dark-500 rounded-md text-center text-sm my-5">
                            Got any creative ideas for a 10 year old's birthday?
                        </div>
                        <div className="px-3 py-4 bg-dark-500 rounded-md text-center text-sm">
                            How do I make an HTTP request in Javascript?
                        </div>
                    </div>
                    <div className="w-64 mx-5">
                        <div className='text-xl font-medium mx-auto text-center mb-5 mt-10'>
                            <BsLightning className='mx-auto mb-2 text-2xl' />
                            Capabilities
                        </div>
                        <div className="px-3 py-4 bg-dark-500 rounded-md text-center text-sm">
                            Remembers what user said earlier in the conversation
                        </div>
                        <div className="px-3 py-4 bg-dark-500 rounded-md text-center text-sm my-5">
                            Allows user to provide follow-up corrections
                        </div>
                        <div className="px-3 py-4 bg-dark-500 rounded-md text-center text-sm">
                            Trained to decline inappropriate requests
                        </div>
                    </div>
                    <div className="w-64">
                        <div className='text-xl font-medium mx-auto text-center mb-5 mt-10'>
                            <IoWarningOutline className='mx-auto mb-2 text-2xl' />
                            Limitations
                        </div>
                        <div className="px-3 py-4 bg-dark-500 rounded-md text-center text-sm">
                            May occasionally generate incorrect information
                        </div>
                        <div className="px-3 py-4 bg-dark-500 rounded-md text-center text-sm my-5">
                            May occasionally produce harmful instructions or biased content
                        </div>
                        <div className="px-3 py-4 bg-dark-500 rounded-md text-center text-sm">
                            Limited knowledge of world and events after 2021
                        </div>
                    </div>
                </div>
            </div>
            <div className="search flex justify-center absolute fixed bottom-8 left-0 right-0 z-50">
                <form
                    className="relative w-6/12"
                    onSubmit={props.handleQuestion}
                >
                    <input type="text" id='msg' placeholder="Ask your question..." required className='w-full bg-dark-500 text-gray-50 p-3 rounded outline-none focus:outline-none focus:shadow-lg' />
                    <button type='submit' className='absolute right-5 top-4 cursor-pointer'><BsSend /></button>
                </form>
            </div>
        </div>
    );
};

export default Homepage;
