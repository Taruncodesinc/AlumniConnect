import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MobileNav from './MobileNav';

const ChatRoom = () => {
  const { chatId } = useParams(); // Get the chatId from the URL

  // Dummy chat data for demonstration
  const chatData = {
    1: { name: 'Alice Johnson' },
    2: { name: 'Bob Smith' },
    3: { name: 'Charlie Brown' },
  };

  const chatUser = chatData[chatId] || { name: 'Unknown User' };

  // Dummy messages between the current user and the chat user
  const [messages, setMessages] = useState([
    { id: 1, sender: 'You', text: 'Hey, how are you?', time: '10:30 AM' },
    { id: 2, sender: chatUser.name, text: "I'm good, how about you?", time: '10:31 AM' },
    { id: 3, sender: 'You', text: "I'm doing well. Working on a new project!", time: '10:32 AM' },
    { id: 4, sender: chatUser.name, text: "That's awesome! Tell me more about it.", time: '10:33 AM' },
  ]);

  // Dummy input handler for adding new messages
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages([...messages, { id: messages.length + 1, sender: 'You', text: newMessage, time: currentTime }]);
      setNewMessage('');
    }
  };

  return (
    <>
   
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Chat with {chatUser.name}</h2>
      <div className="p-4 bg-gray-800 rounded-lg shadow-md mb-4  h-[90vh]">
        {/* Chat Messages */}
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`p-3 rounded-lg ${message.sender === 'You' ? 'bg-blue-600 ml-auto' : 'bg-gray-700'}`} style={{ maxWidth: '75%' }}>
              <p className="text-sm font-bold">{message.sender}</p>
              <p>{message.text}</p>
              <span className="text-xs text-gray-400">{message.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="flex items-center mt-4 mb-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 bg-gray-700 text-white rounded-lg focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
        >
          Send
        </button>
      </div>
      
    </div>
    <MobileNav/>
    </>
  );
};

export default ChatRoom;
