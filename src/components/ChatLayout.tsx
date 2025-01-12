"use client";
import React, { useState } from "react";

const ChatLayout = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        { id: 1, text: "Hey there!", sender: "other", time: "09:41" },
        { id: 2, text: "Hi! How are you?", sender: "me", time: "09:42" },
        {
            id: 3,
            text: "I'm doing great, thanks for asking!",
            sender: "other",
            time: "09:43",
        },
    ]);

    const [conversations, setConversations] = useState([
        { id: 1, name: "John Doe", lastMessage: "Hey there!", unread: 2 },
        { id: 2, name: "Jane Smith", lastMessage: "See you tomorrow!", unread: 0 },
        { id: 3, name: "Mike Johnson", lastMessage: "Thanks!", unread: 1 },
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        if (message.trim()) {
            setMessages([
                ...messages,
                {
                    id: messages.length + 1,
                    text: message,
                    sender: "me",
                    time: new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                    }),
                },
            ]);
            setMessage("");
        }
    };

    return (
        <div className="flex h-full bg-gray-100 my-10 ">
            {/* Sidebar */}
            <div className="w-80 bg-white border-r border-gray-200 rounded-3xl ">
                {/* Sidebar Header */}
                <div className="p-4 border-b border-gray-200">
                    <h1 className="text-xl font-semibold">Chats</h1>
                </div>

                {/* Conversations List */}
                <div className="overflow-y-auto h-[calc(100vh-73px)]">
                    {conversations.map((conv) => (
                        <div
                            key={conv.id}
                            className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                        >
                            {/* Avatar */}
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />

                            <div className="ml-4 flex-1">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-semibold">{conv.name}</h2>
                                    {conv.unread > 0 && (
                                        <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                                            {conv.unread}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-gray-500 truncate">
                                    {conv.lastMessage}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 bg-white">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full" />
                        <h2 className="ml-4 font-semibold">John Doe</h2>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"
                                }`}
                        >
                            <div
                                className={`max-w-[70%] rounded-lg p-3 ${msg.sender === "me"
                                    ? "bg-blue-500 text-white rounded-br-none"
                                    : "bg-white text-gray-800 rounded-bl-none"
                                    }`}
                            >
                                <p>{msg.text}</p>
                                <span
                                    className={`text-xs ${msg.sender === "me" ? "text-blue-100" : "text-gray-500"
                                        }`}
                                >
                                    {msg.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <form
                    onSubmit={handleSend}
                    className="p-4 border-t border-gray-200 bg-white"
                >
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:border-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600 focus:outline-none disabled:opacity-50"
                            disabled={!message.trim()}
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatLayout;
