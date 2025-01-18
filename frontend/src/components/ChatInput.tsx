import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface ChatInputProps {
  onSearch: (query: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full max-w-xl relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="ស្វែងរកព័ត៌មានដែលអ្នកចង់ដឹង"
        className="w-full px-4 py-3 rounded-full shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ease-in-out"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full shadow-lg hover:bg-darkpurple-500"
      >
        <Search className="w-6 h-6" />
      </button>
    </form>
  );
};

export default ChatInput;
