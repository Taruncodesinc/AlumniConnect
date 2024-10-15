import React, { useState } from 'react';
import { FaStar, FaCalendarAlt, FaNewspaper } from 'react-icons/fa';
import { MdVideoLibrary } from 'react-icons/md';
import Calendar from 'react-calendar'; // Install using `npm install react-calendar`
import 'react-calendar/dist/Calendar.css';
import MobileNav from '../MobileNav';
import Navbar from '../navbar';
import HomePage from './HomePage';
import { FaMap,FaFileDownload } from "react-icons/fa";
import images from '../assets/images';
const HomeSection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('ForYou');

  const renderContent = () => {
    <Navbar/>
    switch (activeTab) {
      case 'ForYou':
          return (
            <div className="bg-[#2b2e3b] p-2 rounded-lg shadow-md transform transition-all duration-500 ease-in-out">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-2">
                <FaStar className="text-yellow-400" /> Content For You
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Article Section */}
                <div className="bg-[#333646] p-5 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                  <h3 className="text-xl font-montserrat flex items-center gap-2 mb-4 text-[#64ffda]">
                    <FaNewspaper className="text-[#64ffda]" /> Recommended Articles
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="border-b border-gray-600 pb-2 hover:text-white transition duration-200 ease-in-out cursor-pointer">
                      Understanding JavaScript Closures
                    </li>
                    <li className="border-b border-gray-600 pb-2 hover:text-white transition duration-200 ease-in-out cursor-pointer">
                      How to Use React Hooks Effectively
                    </li>
                    <li className="border-b border-gray-600 pb-2 hover:text-white transition duration-200 ease-in-out cursor-pointer">
                      Mastering CSS Grid Layout
                    </li>
                  </ul>
                  
                  {/* Recommended Roadmaps Section */}
                  <h3 className="text-xl font-montserrat flex items-center gap-2 mb-4 mt-2 text-[#64ffda]">
                    <FaMap className="text-[#64ffda]" /> Recommended Roadmaps
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="border-b border-gray-600 pb-2 flex justify-between hover:text-white transition duration-200 ease-in-out cursor-pointer">
                      Frontend Development Roadmap <a href={images.frontend} download> <FaFileDownload/></a>
                    </li>
                    <li className="border-b border-gray-600 pb-2 flex justify-between  hover:text-white transition duration-200 ease-in-out cursor-pointer">
                      Backend Development Roadmap<a href={images.backend} download> <FaFileDownload/></a>
                    </li>
                    <li className="border-b border-gray-600 pb-2 flex justify-between hover:text-white transition duration-200 ease-in-out cursor-pointer">
                      Full Stack<a href={images.fullSatck} download> <FaFileDownload/></a>
                    </li>
                    <li className="border-b border-gray-600 pb-2 flex justify-between hover:text-white transition duration-200 ease-in-out cursor-pointer">
                      Game Developer <a href={images.gameDev} download> <FaFileDownload/></a>
                    </li>
                    <li className="border-b border-gray-600 pb-2 flex justify-between hover:text-white transition duration-200 ease-in-out cursor-pointer">
                    Ai and data scientist<a href={images.aiDs} download> <FaFileDownload/></a>
                    </li>
                    <div className='flex justify-center items-center'>
                      <h1 className='font-poppins text-gray-300'>More coming soon....</h1>
                    </div>
                  </ul>
                </div>

                {/* Video Section */}
                <div className="bg-[#333646] p-5 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                  <h3 className="text-xl font-montserrat flex items-center gap-2 mb-4 text-[#64ffda]">
                    <MdVideoLibrary className="text-[#64ffda]" /> Recommended Videos
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="border-b border-gray-600 pb-2 hover:text-white transition duration-200 ease-in-out cursor-pointer">
                      React State Management with Redux
                    </li>
                    <li className="border-b border-gray-600 pb-2 hover:text-white transition duration-200 ease-in-out cursor-pointer">
                      Building a Full Stack App with Node.js
                    </li>
                    <li className="border-b border-gray-600 pb-2 hover:text-white transition duration-200 ease-in-out cursor-pointer">
                      Tailwind CSS Best Practices
                    </li>
                  </ul>
                </div>

                {/* Suggestions Section */}
                <div className="bg-[#333646] p-5 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                  <h3 className="text-xl font-montserrat flex items-center gap-2 mb-4 text-[#64ffda]">
                    <FaStar className="text-[#64ffda]" /> Suggested for You
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="border-b border-gray-600 pb-2 hover:text-white transition duration-200 ease-in-out cursor-pointer">
                      Participate in the upcoming Hackathon
                    </li>
                    <li className="border-b border-gray-600 pb-2 hover:text-white transition duration-200 ease-in-out cursor-pointer">
                      Learn GraphQL with free resources
                    </li>
                    <li className="border-b border-gray-600 pb-2 hover:text-white transition duration-200 ease-in-out cursor-pointer">
                      Join our Web Development Bootcamp
                    </li>
                  </ul>
                </div>
              </div>
              <HomePage />
            </div>
          );
      case 'Calendar':
        return (
          <div className="bg-[#2b2e3b] p-6 rounded-lg shadow-md transform transition-all duration-500 ease-in-out">
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-2">
              <FaCalendarAlt className="text-[#64ffda]" /> Upcoming Events
            </h2>
            <Calendar
              className="bg-[#1a1b22] text-white border-none shadow-lg rounded-lg"
              onChange={setSelectedDate}
              value={selectedDate}
            />
            <div className="mt-6">
              <h3 className="font-semibold text-[#64ffda] text-lg">Selected Date: {selectedDate.toDateString()}</h3>
              <ul className="list-disc list-inside mt-4 text-gray-400 space-y-2">
                <li>Event 1: Workshop at 10 AM</li>
                <li>Event 2: Team Meeting at 2 PM</li>
                <li>Event 3: Networking Event at 5 PM</li>
              </ul>
            </div>
           
          </div>
        );

      case 'RecentUpdates':
        return (
          <div className="bg-[#2b2e3b] p-6 rounded-lg shadow-md transform transition-all duration-500 ease-in-out ">
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-2">
              <FaNewspaper className="text-[#64ffda]" /> Recent Updates
            </h2>
            <div className="space-y-5 text-gray-300">
              <div className="border-b border-gray-600 pb-2 hover:text-white transition duration-200 ease-in-out">
                <h3 className="font-semibold text-[#64ffda] text-xl">Project Launch</h3>
                <p className="text-sm mt-2">Our new project was successfully launched!</p>
              </div>
              <div className="border-b border-gray-600 pb-2 hover:text-white transition duration-200 ease-in-out">
                <h3 className="font-semibold text-[#64ffda] text-xl">UI Design Updates</h3>
                <p className="text-sm mt-2">We've made some UI improvements to enhance user experience.</p>
              </div>
              <div className="border-b border-gray-600 pb-2 hover:text-white transition duration-200 ease-in-out">
                <h3 className="font-semibold text-[#64ffda] text-xl">New Blog Posts</h3>
                <p className="text-sm mt-2">Check out our latest blog posts on tech and development!</p>
              </div>
            </div>
           
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-5 bg-[#1a1b22] text-white min-h-screen font-poppins">
      {/* Tabs Navigation */}
      <div className="flex justify-center space-x-6 bg-[#2c2f3f] p-4 rounded-lg shadow-md mb-8">
        <button
          className={`${
            activeTab === 'ForYou' ? 'text-[#64ffda] font-semibold border-b-2 border-[#64ffda]' : 'text-gray-400'
          } transition-all duration-300 ease-in-out pb-2`}
          onClick={() => setActiveTab('ForYou')}
        >
          For You
        </button>
        <button
          className={`${
            activeTab === 'Calendar' ? 'text-[#64ffda] font-semibold border-b-2 border-[#64ffda]' : 'text-gray-400'
          } transition-all duration-300 ease-in-out pb-2`}
          onClick={() => setActiveTab('Calendar')}
        >
          Calendar
        </button>
        <button
          className={`${
            activeTab === 'RecentUpdates' ? 'text-[#64ffda] font-semibold border-b-2 border-[#64ffda]' : 'text-gray-400'
          } transition-all duration-300 ease-in-out pb-2`}
          onClick={() => setActiveTab('RecentUpdates')}
        >
          Recent Updates
        </button>
      </div>

      {/* Tab Content */}
      <div>{renderContent()}</div>
      <MobileNav/>
    
    </div>
  );
};

export default HomeSection;
