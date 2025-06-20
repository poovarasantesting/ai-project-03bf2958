import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { ChatPage } from "@/components/ChatPage";
import { ThemeProvider } from "@/components/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <ChatPage />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;