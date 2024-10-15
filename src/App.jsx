import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import JobsPage from './pages/JobsPage';
import UserProfilePage from './pages/UserProfilePage';
import Login from './pages/Login';  // Make sure LoginPage and Login are not duplicates
import HomeSection from './pages/ForyouPage';  // Adjust name if necessary
import AlumniSearchPage from './pages/AlumniPage';
import MessagingPage from './pages/Messaging';
import ChatRoom from './ChatRoom';
import NotificationPage from './pages/NotificationPage';
import PostUploadPage from './pages/PostUploadPage';
import HomePage from './pages/HomePage';  // Ensure this is intended

const App = () => {
  return (
    <Router>
      <div className=''>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/try-login' element={<Login />} />
          <Route path='/job-portal' element={<JobsPage />} />
          <Route path='/user-profile' element={<UserProfilePage />} />
          <Route path='/alumni-search' element={<AlumniSearchPage />} />
          <Route path='/messaging' element={<MessagingPage />} />
          <Route path="/chat/:chatId" element={<ChatRoom />} />
          <Route path='/notifications' element={<NotificationPage />} />
          <Route path='/post-upload' element={<PostUploadPage />} />
          <Route path='/home' element={<HomeSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
