import { useState, useEffect, useRef } from 'react';
import { SearchBar } from '../components/Searchbar';
import botLogo from '../Assets/Images/bot.png';
import { ChatResponse } from '../components/ChatResponse';
import axios from 'axios';
import { Loading } from '../components/Loading/Loading';
import { Loading2 } from '../components/Loading/Loading2';

interface ChatbotProps {
  setShowFooter: React.Dispatch<React.SetStateAction<boolean>>;
}

export function   Chatbot({ setShowFooter }: ChatbotProps) {
  const fullText = "សួស្តី! តើមានអ្វីអាចអោយខុំជួយអ្នកបានដែរឬទេ?";
  const [typedText, setTypedText] = useState('');
  const [query, setQuery] = useState('');
  const [botResponse, setBotResponse] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (question: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://127.0.0.1:5000/agent?question=${question}`);
      console.log(response);
      setAnswers((prev) => [...prev, response.data.answers]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    setLoading(true)
    await fetchData(query);
    setQuestions((prev) => [...prev, query]);
    setShowChat(true);
    setLoading(false);
  };

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypedText((prev) => {
        const nextText = prev + fullText[prev.length];
        if (nextText === fullText) clearInterval(typingInterval);
        return nextText;
      });
    }, 60);

    return () => clearInterval(typingInterval);
  }, []);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [questions, answers]);

  return (
    <div className="h-full flex flex-col items-center bg-primary pt-10">
      {!showChat ? (
        <div className="text-center flex flex-col items-center w-full flex-grow">
          <img
            src={botLogo}
            alt="Bot Logo"
            className="mb-4 w-48 h-48 transition-transform transform hover:scale-110 hover:rotate-6"
          />
          <p className="text-white text-b1 mb-4 font-sans" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {typedText}
          </p>
          {loading && <Loading2 />}
          <div className="w-full max-w-xl">
            <SearchBar onSearch={handleSearch} />
          </div>
          
        </div>
      ) : (
        <div className="flex flex-col items-center w-full h-full flex-grow overflow-hidden px-4 pb-10">
          <div className="flex flex-col w-full h-full bg-transparent p-6 rounded-lg">
            <div className="flex flex-col items-center mb-0 top-0 bg-primary">
              <img src={botLogo} alt="Bot Logo" className="w-24 h-24" />
              <p className="text-white text-lg">ចម្លើយដែលអ្នកស្វែងរក</p>
            </div>
            <div className="flex flex-col space-y-4 w-full flex-grow mb-6 pt-14" ref={chatContainerRef}>
              {questions.map((question, index) => (
                <ChatResponse key={index} query={question} botResponse={answers[index]} />
              ))}
              {loading && <Loading/>}
            </div>
            <div className="flex justify-center w-full px-4 sticky bg-primary z-10">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}