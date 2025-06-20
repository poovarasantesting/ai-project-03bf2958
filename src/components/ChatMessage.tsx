import { Message } from "@/types/message";
import { formatDate } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const { user } = useAuth();
  const isCurrentUser = user?.username === message.sender;
  const isSystem = message.sender === "system";

  if (isSystem) {
    return (
      <div className="flex justify-center my-2">
        <div className="bg-muted px-4 py-2 rounded-lg text-sm text-muted-foreground max-w-[80%]">
          {message.text}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${isCurrentUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`flex flex-col max-w-[80%] ${
          isCurrentUser 
            ? "items-end bg-primary text-primary-foreground" 
            : "items-start bg-secondary text-secondary-foreground"
        } px-4 py-2 rounded-lg`}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium text-sm">{message.sender}</span>
          <span className="text-xs opacity-70">{formatDate(message.timestamp)}</span>
        </div>
        <p className="text-sm">{message.text}</p>
      </div>
    </div>
  );
}