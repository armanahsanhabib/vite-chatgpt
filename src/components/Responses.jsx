import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si';

const Responses = (props) => {
    return (
        <>
            <div className="bg-dark-100">
                <div className='max-w-3xl mx-auto py-8 flex'>
                    <FaRegUserCircle className='mr-5 text-3xl' />
                    <p className=''>{props.question}</p>
                </div>
            </div>
            <div className="bg-dark-500">
                <div className="max-w-3xl mx-auto py-8 flex">
                    <SiOpenai className='mr-5 text-3xl' />
                    <p className=''>{props.answer}</p>
                </div>
            </div>
        </>
    );
};

export default Responses;