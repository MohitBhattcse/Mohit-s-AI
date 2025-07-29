import React, { useEffect, useState } from "react";
import { LogOut, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";

function Sidebar({ onClose }) {
  const navigate = useNavigate();
  const [, setAuthUser] = useAuth();
  const user = JSON.parse(localStorage.getItem("user"));
  const [chatHistory, setChatHistory] = useState([]);

  // Load chat history from localStorage on first render
  useEffect(() => {
    const savedChats = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setChatHistory(savedChats);
  }, []);

  const handleNewChat = () => {
    const newChat = {
      id: Date.now().toString(),
      title: `Chat ${chatHistory.length + 1}`,
      createdAt: new Date().toISOString(),
    };

    const updatedChats = [newChat, ...chatHistory];
    setChatHistory(updatedChats);
    localStorage.setItem("chatHistory", JSON.stringify(updatedChats));

    navigate(`/chat/${newChat.id}`);
  };

  const handleLogout = async () => {
    try {
      const { data } = await axios.get("https://mohit-s-ai.onrender.com", {
        withCredentials: true,
      });

      localStorage.removeItem("user");
      localStorage.removeItem("token");
      alert(data.message);

      setAuthUser(null);
      navigate("/login");
    } catch (error) {
      alert(error?.response?.data?.errors || "Logout Failed");
    }
  };

  return (
    <div className="h-full flex flex-col justify-between p-4">
      {/* Header */}
      <div>
        <div className="flex border-b border-gray-600 p-2 justify-between items-center mb-4">
          <div className="text-2xl font-bold text-gray-200">Mohit's AI</div>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-400 md:hidden" />
          </button>
        </div>

        {/* History */}
        <div className="flex-1 overflow-y-auto px-2 py-3">
          <button
            onClick={handleNewChat}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl mb-4"
          >
            + New Chat
          </button>

          {chatHistory.length > 0 ? (
            chatHistory.map((chat) => (
              <button
                key={chat.id}
                onClick={() => navigate(`/chat/${chat.id}`)}
                className="w-full text-left bg-[#333] hover:bg-[#444] text-white px-3 py-2 rounded-lg mb-2 text-sm"
              >
                {chat.title}
              </button>
            ))
          ) : (
            <div className="text-gray-500 text-sm text-center mt-20">
              No chat history yet
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="p-1 border-t border-gray-600">
        <div className="flex items-center gap-2 cursor-pointer my-3">
          <img
            src="https://i.pravatar.cc/32"
            alt="profile"
            className="rounded-full w-8 h-8"
          />
          <span className="text-gray-300 font-bold">
            {user?.firstName || "My Profile"}
          </span>
        </div>

        {user && (
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            <LogOut />
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
