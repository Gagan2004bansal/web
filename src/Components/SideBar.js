import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import { FaHome, FaBook } from "react-icons/fa";
import { CgCommunity } from "react-icons/cg";
import { SiGoogleclassroom } from "react-icons/si";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdQuiz } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { IoChatboxEllipses } from "react-icons/io5";

const SideBar = ({ activeBar, setActiveBar }) => {

    function onClickHandler() {
        activeBar ? setActiveBar(false) : setActiveBar(true);
    }

    return (
        <div className='flex flex-col justify-center gap-8 p-5 w-8/12 sm:w-4/12 md:w-3/12 lg:w-2/12 bg-black mvh absolute text-white cursor-pointer border-t border-white' onClick={onClickHandler}>
            <div className='flex flex-col gap-y-5 cursor-pointer text-[18px] font-semibold ' >
                <Link to='/'><div className='hover:text-gray-400 flex gap-x-2 items-center'><p><FaHome /></p><p>Home</p></div></Link>
                <Link to='/classes'><div className='hover:text-gray-400 flex gap-x-2 items-center'><p><SiGoogleclassroom /></p><p>Classes</p></div></Link>
                <Link to='/community'><div className='hover:text-gray-400 flex gap-x-2 items-center'><p><CgCommunity /></p><p>Community</p></div></Link>
                <Link to='/account'><div className='hover:text-gray-400 flex gap-x-2 items-center'><p><RiAccountCircleFill /></p><p>Account</p></div></Link>
            </div>
            <div className='w-full px-3 h-1 bg-white'></div>
            <div className='flex flex-col gap-y-5 cursor-pointer text-[18px] font-semibold'>
                <Link to='/practice'> <div className='hover:text-gray-400 flex gap-x-2 items-center'><p><MdQuiz /></p><p>Practice</p></div></Link>
                <Link to='/note'><div className='hover:text-gray-400 flex gap-x-2 items-center'><p><FaNoteSticky /></p><p>Add Note</p></div></Link>
                <Link to='/material'><div className='hover:text-gray-400 flex gap-x-2 items-center'><p><FaBook /></p><p>Material</p></div></Link>
                <Link to='/chat'><div className='hover:text-gray-400 flex gap-x-2 items-center'><p><IoChatboxEllipses /></p><p>Chat Search</p></div></Link>
                <Link to='/aboutus'><div className='hover:text-gray-400 flex gap-x-2 items-center'><p><FcAbout /></p><p>About Us</p></div></Link>
            </div >
        </div >
    )
}

export default SideBar
