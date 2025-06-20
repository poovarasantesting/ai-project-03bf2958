import React from 'react';
import { useAuthStore } from '@/lib/auth';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function AuthStatus() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    navigate('/login');
  };

  if (!isAuthenticated) {
    return (
      <div className="flex gap-4">
        <Button variant="outline" onClick={() => navigate('/login')}>
          Sign in
        </Button>
        <Button onClick={() => navigate('/register')}>
          Register
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="text-sm">
        <span className="text-muted-foreground">Signed in as </span>
        <span className="font-medium">{user?.name}</span>
      </div>
      <Button variant="outline" size="sm" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}