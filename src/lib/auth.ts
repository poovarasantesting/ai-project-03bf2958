import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// This is a simplified auth store for demo purposes
// In a real app, you would connect this to a backend API

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Mock user database
const MOCK_USERS: Record<string, { user: User; password: string }> = {};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      
      login: async (email: string, password: string) => {
        // Simulate API request delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Find user with matching email
        const userEntry = Object.values(MOCK_USERS).find(
          entry => entry.user.email === email && entry.password === password
        );
        
        if (userEntry) {
          set({ user: userEntry.user, isAuthenticated: true });
          return true;
        }
        
        return false;
      },
      
      register: async (name: string, email: string, password: string) => {
        // Simulate API request delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Check if user already exists
        const userExists = Object.values(MOCK_USERS).some(
          entry => entry.user.email === email
        );
        
        if (userExists) {
          return false;
        }
        
        // Create new user
        const newUser = {
          id: Math.random().toString(36).substring(2, 9),
          name,
          email
        };
        
        MOCK_USERS[newUser.id] = {
          user: newUser,
          password
        };
        
        set({ user: newUser, isAuthenticated: true });
        return true;
      },
      
      logout: () => {
        set({ user: null, isAuthenticated: false });
      }
    }),
    {
      name: 'auth-storage'
    }
  )
);