// App.tsx
import React from "react";
import { Gallery } from "./components/Gallery";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="bg-black text-black min-h-screen flex flex-col">
      <Header />
      <main className="bg-white text-black px-8 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">RECENT WORK</h1>
        <Gallery />
      </main>
    </div>
  );
}