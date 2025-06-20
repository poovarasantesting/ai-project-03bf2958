import { Button } from "@/components/ui/button";
import { LogOut, Trash2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface ChatHeaderProps {
  onClearMessages: () => void;
}

export function ChatHeader({ onClearMessages }: ChatHeaderProps) {
  const { user, logout } = useAuth();

  return (
    <div className="flex items-center justify-between border-b p-4">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">Chat App</h1>
        {user && <span className="text-sm text-muted-foreground">Logged in as {user.username}</span>}
      </div>
      
      {user && (
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onClearMessages}
            className="flex items-center gap-1"
          >
            <Trash2 className="h-4 w-4" />
            <span className="hidden sm:inline">Clear</span>
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={logout}
            className="flex items-center gap-1"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      )}
    </div>
  );
}