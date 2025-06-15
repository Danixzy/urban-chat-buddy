
import React from 'react';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: string;
}

const ChatMessage = ({ message, isBot, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex w-full mb-3",
      isBot ? "justify-start" : "justify-end"
    )}>
      <div className={cn(
        "max-w-[80%] px-4 py-2 rounded-lg shadow-sm",
        isBot 
          ? "bg-white text-gray-800 rounded-bl-none" 
          : "bg-green-500 text-white rounded-br-none"
      )}>
        {isBot && (
          <div className="text-xs font-semibold text-green-600 mb-1">
            UrbanBot 🏛️
          </div>
        )}
        <div className="text-sm whitespace-pre-wrap">{message}</div>
        <div className={cn(
          "text-xs mt-1",
          isBot ? "text-gray-500" : "text-green-100"
        )}>
          {timestamp}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
