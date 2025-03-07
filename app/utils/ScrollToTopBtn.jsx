"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 20);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 bg-black dark:bg-white text-white dark:text-black p-3 rounded-full shadow-lg hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-300"
      style={{ display: visible ? "block" : "none" }}
    >
      <ArrowUp size={24} />
    </button>
  );
}
