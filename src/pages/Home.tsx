import React from 'react';
import { AuthStatus } from '@/components/AuthStatus';
import { useAuthStore } from '@/lib/auth';

export default function Home() {
  const { user, isAuthenticated } = useAuthStore();

  return (
    <div className="min-h-screen p-8">
      <header className="container mx-auto flex items-center justify-between py-6">
        <div className="text-2xl font-bold">MyApp</div>
        <AuthStatus />
      </header>
      
      <main className="container mx-auto mt-12 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Welcome to MyApp
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {isAuthenticated 
              ? `Hello, ${user?.name}! You are now logged in.`
              : 'Please log in or register to get started.'}
          </p>
          
          <div className="mt-10">
            {isAuthenticated ? (
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <h2 className="text-xl font-semibold">Your Account Information</h2>
                <div className="mt-4 text-left">
                  <p><span className="font-medium">Name:</span> {user?.name}</p>
                  <p><span className="font-medium">Email:</span> {user?.email}</p>
                  <p><span className="font-medium">Account ID:</span> {user?.id}</p>
                </div>
              </div>
            ) : (
              <div className="text-muted-foreground">
                Sign in to see your account details
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}