import React from 'react'
import { Link } from 'react-router-dom';
import './custom.css';
import { FaSearch } from "react-icons/fa";

const Home = () => {

    const name = "Gagan Bansal";
    return (
        <div className='w-full sm:w-9/12 mx-auto p-5 h-90b overflow-x-scroll'>
            <div className='flex flex-col h-90b'>
                <div className=''>
                    <p className='font-extrabold text-3xl'>Welcome, <span className='text-indigo-700'>{name}</span></p>
                    <div className='w-full bg-gray-300 h-1 mt-2'></div>
                </div>
                <p className='font-extrabold text-2xl mt-5'>A Platform For All Resources</p>

                <div className='flex justify-center mt-5 mb-2 w-full items-center'>
                    <form className='flex gap-x-3 w-full justify-center' onSubmit>
                        <input type='text' placeholder='Search...' required className='px-4 py-2 rounded-md shadow-lg sm:w-6/12 bg-gray-200 text-black' />
                        <button><FaSearch /></button>
                    </form>
                </div>

                <div className='my-3'>
                    <p className='font-medium my-3 border px-5 py-2 w-fit border-gray-500 rounded-md'> -- Company Wise Question  -- </p>
                    <div className='flex flex-wrap gap-x-3 gap-y-2'>
                        <Link to='/microsoft'><div className='px-4 py-1 bg-gray-400 text-white w-fit rounded-md hover:bg-gray-500'>Microsoft</div></Link>
                        <Link to='/microsoft'><div className='px-4 py-1 bg-gray-400 text-white w-fit rounded-md hover:bg-gray-500'>Adobe</div></Link>
                        <Link to='/microsoft'><div className='px-4 py-1 bg-gray-400 text-white w-fit rounded-md hover:bg-gray-500'>Google</div></Link>
                        <Link to='/microsoft'><div className='px-4 py-1 bg-gray-400 text-white w-fit rounded-md hover:bg-gray-500'>Atlassian</div></Link>
                        <Link to='/microsoft'><div className='px-4 py-1 bg-gray-400 text-white w-fit rounded-md hover:bg-gray-500'>Amazon</div></Link>
                        <Link to='/microsoft'><div className='px-4 py-1 bg-gray-400 text-white w-fit rounded-md hover:bg-gray-500'>Netflix</div></Link>
                    </div>
                </div>

                <div className='my-3'>
                    <p className='font-medium my-3 border px-5 py-2 w-fit border-gray-500 rounded-md'> --  Roadmaps  -- </p>
                    <div className='flex flex-wrap gap-x-3 gap-y-2'>
                        <Link to='/fullstack'><div className='px-4 py-1 bg-gray-500 text-white w-fit rounded-md hover:bg-gray-400'>Full Stack Development</div></Link>
                        <Link to='/android'><div className='px-4 py-1 bg-gray-500 text-white w-fit rounded-md hover:bg-gray-400'>App Development</div></Link>
                        <Link to='/microsoft'><div className='px-4 py-1 bg-gray-500 text-white w-fit rounded-md hover:bg-gray-400'>Machine Learning</div></Link>
                        <Link to='/microsoft'><div className='px-4 py-1 bg-gray-500 text-white w-fit rounded-md hover:bg-gray-400'>Artificial Intelligence</div></Link>
                    </div>
                </div>

                <div className='my-3'>
                    <p className='font-medium my-3 border px-5 py-2 w-fit border-gray-500 rounded-md'> --  Top DSA Sheet  -- </p>
                    <div className='flex flex-wrap gap-x-3 gap-y-2'>
                        <Link to='/microsoft'><div className='px-4 py-1 bg-gray-400 text-white w-fit rounded-md hover:bg-gray-500'>Love Babbar</div></Link>
                        <Link to='/microsoft'><div className='px-4 py-1 bg-gray-400 text-white w-fit rounded-md hover:bg-gray-500'>Striver's</div></Link>
                        <Link to='/microsoft'><div className='px-4 py-1 bg-gray-400 text-white w-fit rounded-md hover:bg-gray-500'>Nishant Chahar</div></Link>
                        <Link to='/microsoft'><div className='px-4 py-1 bg-gray-400 text-white w-fit rounded-md hover:bg-gray-500'>Leetcode 75</div></Link>
                        <Link to='/microsoft'><div className='px-4 py-1 bg-gray-400 text-white w-fit rounded-md hover:bg-gray-500'>DSA Sheet by Arsh</div></Link>
                    </div>
                </div>

                <div className='my-3'>
                    <p className='font-medium my-3 border px-5 py-2 w-fit border-gray-500 rounded-md'> --  Recommended Course's  -- </p>
                    <div className='flex flex-wrap gap-x-3 gap-y-2'>
                        <Link to='/fullstack'><div className='px-4 py-1 bg-gray-500 text-white w-fit rounded-md hover:bg-gray-400'>Full Stack Development</div></Link>
                        <Link to='/microsoft'><div className='px-4 py-1 bg-gray-500 text-white w-fit rounded-md hover:bg-gray-400'>App Development</div></Link>
                        <Link to='/microsoft'><div className='px-4 py-1 bg-gray-500 text-white w-fit rounded-md hover:bg-gray-400'>Machine Learning</div></Link>
                        <Link to='/microsoft'><div className='px-4 py-1 bg-gray-500 text-white w-fit rounded-md hover:bg-gray-400'>Artificial Intelligence</div></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
