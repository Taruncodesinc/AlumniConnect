import React from 'react';
import { IoSchoolSharp } from "react-icons/io5";
import { FaBuilding, FaUserEdit } from "react-icons/fa"; // Added icons for more styling
import MobileNav from './MobileNav';

const UserProfile = ({ id, name, education, workExperience, role }) => {
  return (
    <>
     <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 font-montserrat h-[100vh] w-[100vw] ">
      
      {/* Top Section: Profile Picture and Name */}
      <div className="flex flex-col items-center mb-6">
        {/* Profile Picture */}
        <div className="profile-img h-[120px] w-[120px] bg-blue-500 border-4 border-gray-700 rounded-full flex items-center justify-center">
          {/* Profile Picture Placeholder */}
          <FaUserEdit className="text-4xl text-white" />
        </div>

        {/* User Name */}
        <h1 className="text-3xl font-bold mt-4 font-poppins">{name}</h1>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>

      {/* Follower and Following Stats */}
      <div className="flex justify-around text-center mb-6">
        <div>
          <h1 className="text-xl font-semibold font-poppins">Followers</h1>
          <p className="text-lg">0</p>
        </div>
        <div>
          <h1 className="text-xl font-semibold font-poppins">Following</h1>
          <p className="text-lg">0</p>
        </div>
      </div>

      {/* Edit Profile Button */}
      <div className="flex justify-center mb-6">
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-montserrat shadow-lg"
        >
          Edit Profile
        </button>
      </div>

      {/* Education and Work Experience Section */}
      <div className="mb-6">
        <div className="bg-[#2F2F2F] flex items-center gap-4 p-4 rounded-lg mb-4 shadow">
          <IoSchoolSharp className="text-2xl text-white" />
          <div className="font-semibold text-white font-montserrat">
            {education ? education : 'Education not provided'}
          </div>
        </div>

        {workExperience && (
          <div className="bg-[#2F2F2F] flex items-center gap-4 p-4 rounded-lg shadow">
            <FaBuilding className="text-2xl text-white" />
            <div className="font-semibold text-white font-montserrat">
              {workExperience ? workExperience : 'Work experience not provided'}
            </div>
          </div>
        )}
      </div>

      {/* Achievements Section */}
      <div className="mb-6">
        <div className="bg-[#2F2F2F] p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-3 font-poppins">Achievements</h2>
          <ul className="list-disc list-inside space-y-2 font-montserrat text-sm">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      
    </div>
    <MobileNav/>
    </>
   
  );
};

export default UserProfile;
