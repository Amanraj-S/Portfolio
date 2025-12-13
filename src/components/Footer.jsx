import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-8 py-8 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Amanraj S 
          <Heart className="inline text-red-400" size={14} />.
        </p>
      </div>
    </footer>
  );
}
