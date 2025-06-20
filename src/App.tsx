// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/journal" element={<Journal />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/gear" element={<Gear />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}