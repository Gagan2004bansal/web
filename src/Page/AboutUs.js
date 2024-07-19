import React from 'react';
import { FaCopyright } from "react-icons/fa6";

const AboutUs = () => {
    return (
        <div className='w-full sm:w-9/12 mx-auto p-5 h-90b overflow-x-scroll'>
            <div>
                <div className='mb-1 w-full px-2 rounded-xl h-1 bg-gray-500'></div>
                <div className='font-extrabold text-2xl'>Welcome to Intellisync, where knowledge meets innovation! 🚀</div>
                <div className='mt-1 w-full px-2 rounded-xl h-1 bg-gray-500'></div>
            </div>
            <div className='my-5'>
                <h1 className='font-bold text-xl'>About Intellisync</h1>
                <p className='font-medium mt-1'>At <span className='text-red-700 font-extrabold'>Intellisync</span>, we believe in empowering minds through seamless synchronization of knowledge and technology. Developed by Gagan Bansal, our platform is more than just a learning hub—it's your digital compass for navigating the vast landscape of tutorials, roadmaps, classes, notes, and beyond.</p>
            </div>
            <div className='my-5'>
                <h1 className='font-bold text-xl'>Why Intellisync?</h1>
                <p className='font-medium mt-1'>🎓 <span className='text-sky-700 font-bold'>Tutorials</span>: Dive into a rich library of tutorials crafted to cater to every learning style. From coding wizards to design enthusiasts, we've got you covered.</p>
                <p className='font-medium mt-1'>🚀 <span className='text-sky-700 font-bold'>Roadmaps</span>: Chart your course to success with our curated roadmaps. Whether you're a beginner or an expert, our guided paths ensure you reach your destination efficiently.</p>
                <p className='font-medium mt-1'>📚 <span className='text-sky-700 font-bold'>Classes</span>: Immerse yourself in interactive classes designed for hands-on learning. Our instructors are here to guide you through every step of your educational journey.</p>
                <p className='font-medium mt-1'>🗒️ <span className='text-sky-700 font-bold'>Notes</span>: Jot down your insights, discoveries, and aha moments with our intuitive note-taking feature. Your ideas, organized and accessible whenever inspiration strikes.</p>
                <p className='font-medium mt-1'>🌐 <span className='text-sky-700 font-bold'>And Much More</span>: <span className='text-red-700 font-extrabold'>Intellisync</span> is not just a platform; it's a dynamic ecosystem. Stay tuned for regular updates, challenges, and exciting features that keep your learning experience fresh and engaging.</p>
            </div>

            <div className='my-5'>
                <h1 className='font-bold text-xl'>Meet the Developer - Gagan Bansal</h1>
                <p className='font-medium mt-1'>Behind the scenes, <span className='text-red-700 font-extrabold'>Intellisync</span> is brought to life by Gagan Bansal, a visionary in the realm of educational technology. With a passion for making learning accessible and enjoyable, Gagan's commitment to excellence is woven into every aspect of <span className='text-red-700 font-extrabold'>Intellisync</span>.</p>
                <br />
                <p className='font-medium mt-1'>Join us at <span className='text-red-700 font-extrabold'>Intellisync</span> and embark on a journey where education meets innovation. Your path to knowledge has never been more interactive, more personalized, and more exciting. Welcome to a brighter, smarter future with <span className='text-red-700 font-extrabold'>Intellisync! </span> ✨</p>
            </div>

            <div className='flex flex-col items-center'>
                <p className='text-center font-extrabold flex items-center gap-x-1'>IntelliSync <FaCopyright /> 2024</p>
                <p className='text-center font-medium text-blue-700'>Developed by Gagan Bansal</p>
            </div>

        </div>
    )
}

export default AboutUs
