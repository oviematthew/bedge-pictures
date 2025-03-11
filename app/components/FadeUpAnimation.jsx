"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function FadeUpAnimation({ children }) {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".fade-up",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.2 }
    );
  }, []);

  return <div className="relative z-[10]">{children}</div>;
}
