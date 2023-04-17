import React from 'react';
import { BiArrowFromLeft, BiChat, BiPlus, BiSun, BiTrash, BiUser } from 'react-icons/bi';
import OpenAI from '../assets/images/openai.png';
import NavList from './NavList';

const Navbar = (props) => {
    return (
        <div className='hidden lg:flex flex-col justify-between bg-dark-900 w-72 text-gray-50 p-3'>
            <section>
                <div className="flex items-center justify-between mb-4 mt-1">
                    <img src={OpenAI} alt="ChatGPT Logo" className='h-8 w-auto' />
                    <div className='px-3 py-1 rounded-md font-bold text-dark-50 bg-dark-300'>Clone</div>
                </div>
                <NavList onClick={() => props.handleNavClick("Homepage")} class="outline outline-1 outline-dark-700 hover:outline-dark-700 mt-0" icon={BiPlus} text="New Chat" />
                <NavList onClick={() => props.handleNavClick("My chat")} icon={BiChat} text="My chat" />
                <NavList onClick={() => props.handleNavClick("Previous chat")} icon={BiChat} text="Previous chat" />
            </section>
            <section>
                <hr className='border border-1 border-dark-700' />
                <NavList icon={BiTrash} text="Clear Conversation" />
                <NavList icon={BiUser} text="Upgrade to PLUS" />
                <NavList icon={BiSun} text="Light Mode" />
                <NavList icon={BiArrowFromLeft} text="Log Out" />
            </section>
        </div>
    );
};

export default Navbar;