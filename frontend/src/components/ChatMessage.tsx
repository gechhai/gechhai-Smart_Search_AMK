import React from 'react';

interface ChatMessageProps {
  message: string;
  isBot: boolean; // To distinguish between user and bot messages
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot }) => {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} items-center space-x-2`}>
      {isBot ? (
        <img src="https://via.placeholder.com/40" alt="Bot" className="rounded-full w-10 h-10" />
      ) : (
        <img src="https://via.placeholder.com/40" alt="User" className="rounded-full w-10 h-10" />
      )}
      <div
        className={`max-w-xs p-3 rounded-lg ${
          isBot ? 'bg-gray-700 text-white' : 'bg-blue-500 text-white'
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
