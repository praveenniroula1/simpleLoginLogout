import "./App.css";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
