import React, { useState } from 'react';
import images from '../assets/images';
import { useDispatch } from 'react-redux';
import { addNewUser } from '../Store/userSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import MobileNav from '../MobileNav';

const Form = () => {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [education, setEducation] = useState('');
  const [work, setWorkExperience] = useState('');
  const [role, setRole] = useState('student');

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleEducation = (e) => setEducation(e.target.value);
  const handleWorkExperience = (e) => setWorkExperience(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = {
      id: nanoid(),
      name,
      email,
      password,
      education,
      work,
      role,
    };

    dispatch(addNewUser(userData)); // Save in Redux
    // Also, manually save to local storage to keep data consistent
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    localStorage.setItem('users', JSON.stringify([...existingUsers, userData])); 

    navi('/'); // Redirect after sign-up
  };

  return (
    <div className="flex flex-col items-center bg-[#1E1E2F] justify-center min-h-screen p-4">
      <img src={images.userIc} alt="user-icon" className="h-16 mb-4" />
      
      <div className="text-center text-white mb-6">
        <h2 className="text-2xl font-semibold">Set Up Your Profile</h2>
        <p className="text-sm text-gray-400">Personalize your bio and experiences</p>
      </div>
      
      <form className="flex flex-col w-full max-w-md bg-[#242837] p-6 rounded-lg shadow-md" onSubmit={handleLogin}>
        {/* Full Name Input */}
        <div className="flex flex-col mb-4">
          <label htmlFor="userName" className="text-sm text-gray-400">Full Name</label>
          <input
            className="mt-1 p-2 bg-[#2C3141] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={handleName}
            required
          />
        </div>
        
        {/* Email Input */}
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-sm text-gray-400">Email</label>
          <input
            className="mt-1 p-2 bg-[#2C3141] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={handleEmail}
            required
          />
        </div>
        
        {/* Password Input */}
        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="text-sm text-gray-400">Password</label>
          <input
            className="mt-1 p-2 bg-[#2C3141] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePassword}
            required
          />
        </div>
        
        {/* Role Selection */}
        <div className="flex flex-col mb-4">
          <label className="text-sm text-gray-400">Select Role</label>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center text-white">
              <input
                type="radio"
                name="role"
                value="student"
                checked={role === 'student'}
                onChange={handleRoleChange}
                className="mr-2"
              />
              Student
            </label>
            <label className="flex items-center text-white">
              <input
                type="radio"
                name="role"
                value="alumni"
                checked={role === 'alumni'}
                onChange={handleRoleChange}
                className="mr-2"
              />
              Alumni
            </label>
          </div>
        </div>

        {/* Education Input */}
        <div className="flex flex-col mb-4">
          <label htmlFor="userEducation" className="text-sm text-gray-400">Add Your Education</label>
          <input
            className="mt-1 p-2 bg-[#2C3141] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Add Education"
            value={education}
            onChange={handleEducation}
          />
        </div>

        {/* Work Experience Input */}
        <div className="flex flex-col mb-4">
          <label htmlFor="workExperience" className="text-sm text-gray-400">Add Work Experience</label>
          <input
            className="mt-1 p-2 bg-[#2C3141] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
            placeholder="Add Work Experience"
            value={work}
            onChange={handleWorkExperience}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Save
        </button>
      </form>

    
    </div>
  );
};

export default Form;
