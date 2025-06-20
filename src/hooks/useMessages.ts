import { useState, useEffect } from "react";
import { Message } from "@/types/message";
import { useAuth } from "@/context/AuthContext";

export function useMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    // Load messages from localStorage
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // Add welcome message if no messages exist
      const welcomeMessage: Message = {
        id: "welcome",
        text: "Welcome to the chat app! Send a message to get started.",
        sender: "system",
        timestamp: Date.now(),
      };
      setMessages([welcomeMessage]);
      localStorage.setItem("chatMessages", JSON.stringify([welcomeMessage]));
    }
  }, []);

  const sendMessage = (text: string) => {
    if (!user) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: user.username,
      timestamp: Date.now(),
    };
    
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
    
    return newMessage;
  };

  const clearMessages = () => {
    const welcomeMessage: Message = {
      id: "welcome",
      text: "All messages have been cleared.",
      sender: "system",
      timestamp: Date.now(),
    };
    setMessages([welcomeMessage]);
    localStorage.setItem("chatMessages", JSON.stringify([welcomeMessage]));
  };

  return { messages, sendMessage, clearMessages };
}