// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import Galleries from "./pages/galleries/Galleries";
import Collections from "./pages/collections/Collections";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galleries" element={<Galleries />} />
        <Route path="/collections" element={<Collections />} />
        {/*<Route path="/portfolio" element={<Portfolio />} />
        <Route path="/gear" element={<Gear />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}