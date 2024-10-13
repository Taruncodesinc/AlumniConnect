import { createSlice } from "@reduxjs/toolkit";

const recentChatsSlice = createSlice({
  name: "recentChats",
  initialState: {
    chats: [
      { id: 1, name: "Alice Johnson", lastMessage: "See you tomorrow!", time: "10:30 AM" },
      { id: 2, name: "Bob Smith", lastMessage: "Let's catch up later.", time: "9:45 AM" },
      { id: 3, name: "Charlie Brown", lastMessage: "Can you send me the files?", time: "Yesterday" },
      // Add more dummy chat data as needed
    ],
  },
  reducers: {
    addChat: (state, action) => {
      
      state.chats.push(action.payload);
    },
    updateChat: (state, action) => {
      // Update an existing chat's last message and time
      const { id, lastMessage, time } = action.payload;
      const chat = state.chats.find((chat) => chat.id === id);
      if (chat) {
        chat.lastMessage = lastMessage;
        chat.time = time;
      }
    },
    deleteChat: (state, action) => {
      // Remove a chat from the list by id
      state.chats = state.chats.filter((chat) => chat.id !== action.payload);
    },
  },
});

// Export the actions generated from the slice
export const { addChat, updateChat, deleteChat } = recentChatsSlice.actions;

// Export the reducer to be used in the store
export default recentChatsSlice.reducer;
