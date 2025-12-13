import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      {/* Navbar always at top */}
      <Navbar />

      {/* Main content grows and fills screen */}
      <main className="flex-1">
        <Home />
      </main>

      {/* Footer sits at bottom always */}
      <Footer />
    </div>
  );
};

export default App;
