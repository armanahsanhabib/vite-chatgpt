/* import React from 'react';
import { BsSend } from 'react-icons/bs';
import Responses from './Responses';

const MyChat = (props) => {
    return (
        <div className='bg-dark-600 w-full text-gray-50 p-3 overflow-y-scroll relative'>
            <div className="h-5/6 overflow-y-auto flex flex-col justify-start">
                {
                    props.chatList.map((chat, index) => {
                        return (
                            <Responses key={index} question={chat.question} answer={chat.answer} />
                        );
                    })
                }
            </div>
            <div className="search flex justify-center absolute fixed bottom-8 left-0 right-0 z-50">
                <form
                    className="relative w-6/12"
                    onSubmit={props.handleSubmit}
                >
                    <input type="text" id='msg' placeholder="Ask your question..." required className='w-full bg-dark-500 text-gray-50 p-3 rounded outline-none focus:outline-none focus:shadow-lg' onChange={props.handleChange} />
                    <button type='submit' className='absolute right-5 top-4 cursor-pointer'><BsSend /></button>
                </form>
            </div>
        </div>
    );
};

export default MyChat; */

import React, { useEffect, useRef } from 'react';
import { BsSend } from 'react-icons/bs';
import Responses from './Responses';

const MyChat = (props) => {
    const chatContainerRef = useRef(null);

    useEffect(() => {
        // Scroll to the bottom of the chat container when component updates
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, [props.chatList]);

    return (
        <div className='bg-dark-600 w-full text-gray-50 p-3 overflow-y-scroll relative'>
            <div
                ref={chatContainerRef}
                className="h-5/6 overflow-y-auto flex flex-col justify-start"
            >
                {props.chatList.map((chat, index) => {
                    return (
                        <Responses key={index} question={chat.question} answer={chat.answer} />
                    );
                })}
            </div>
            <div className="search flex justify-center absolute fixed bottom-8 left-0 right-0 z-50">
                <form
                    className="relative w-6/12"
                    onSubmit={props.handleSubmit}
                >
                    <input
                        type="text"
                        id='msg'
                        placeholder="Ask your question..."
                        required
                        className='w-full bg-dark-500 text-gray-50 p-3 rounded outline-none focus:outline-none focus:shadow-lg'
                        onChange={props.handleChange}
                    />
                    <button type='submit' className='absolute right-5 top-4 cursor-pointer'><BsSend /></button>
                </form>
            </div>
        </div>
    );
};

export default MyChat;
