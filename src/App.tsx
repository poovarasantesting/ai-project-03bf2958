import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<div className="p-8">Home Page</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<div className="p-8">Register Page (Coming Soon)</div>} />
        <Route path="/forgot-password" element={<div className="p-8">Forgot Password Page (Coming Soon)</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;