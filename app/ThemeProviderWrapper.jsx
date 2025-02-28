"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeProviderWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div
        className={mounted ? "" : "opacity-0 transition-opacity duration-500"}
      >
        {children}
      </div>
    </ThemeProvider>
  );
}
