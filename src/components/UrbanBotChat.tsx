
import React, { useEffect, useRef } from 'react';
import { Phone, Video, MoreVertical } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { useUrbanBot } from '../hooks/useUrbanBot';

const UrbanBotChat = () => {
  const { messages, isTyping, sendMessage } = useUrbanBot();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="max-w-md mx-auto bg-white shadow-2xl rounded-lg overflow-hidden h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-lg font-bold">
            🏛️
          </div>
          <div>
            <h3 className="font-semibold">UrbanBot</h3>
            <p className="text-xs text-green-100">
              {isTyping ? 'digitando...' : 'online'}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Phone className="w-5 h-5 cursor-pointer hover:bg-green-700 p-1 rounded" />
          <Video className="w-5 h-5 cursor-pointer hover:bg-green-700 p-1 rounded" />
          <MoreVertical className="w-5 h-5 cursor-pointer hover:bg-green-700 p-1 rounded" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg.message}
            isBot={msg.isBot}
            timestamp={msg.timestamp}
          />
        ))}
        
        {isTyping && (
          <div className="flex justify-start mb-3">
            <div className="bg-white px-4 py-2 rounded-lg rounded-bl-none shadow-sm">
              <div className="text-xs font-semibold text-green-600 mb-1">
                UrbanBot 🏛️
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput onSendMessage={sendMessage} disabled={isTyping} />
    </div>
  );
};

export default UrbanBotChat;
