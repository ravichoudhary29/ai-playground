'use client';
import React, { useState } from 'react';

const MessageWindow: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleNewMessage = (message: string) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md h-full">
      <h2 className="text-xl font-semibold mb-4">Messages</h2>
      <div className="overflow-y-auto h-72">
        {messages.map((msg, index) => (
          <div key={index} className="p-2 border-b">{msg}</div>
        ))}
      </div>
      {/* Add UI for sending messages */}
    </div>
  );
};

export default MessageWindow;