import "./App.css";
import Header from "./components/header";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/home";
import Login from "./components/login";
import User from "./components/user";


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
