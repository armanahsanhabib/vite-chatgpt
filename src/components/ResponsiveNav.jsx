import React from 'react';
import { FaBars } from 'react-icons/fa';
import ChatGPT from '../assets/images/logo.png';


const ResponsiveNav = () => {
    return (
        <section className='flex flex-col justify-center lg:hidden fixed top-0 left-0 right-0 w-full z-50 bg-dark-900 text-gray-50'>
            <div className="relative flex items-center justify-center my-3">
                <img src={ChatGPT} alt="ChatGPT Logo" className='h-6 w-6 mr-3' />
                <h1 className='text-lg font-bold'>ChatGPT Clone</h1>
                <FaBars className='text-xl absolute left-3 top-1' onClick={() => handleMenuClick()} />
            </div>
        </section>
    );
};

export default ResponsiveNav;