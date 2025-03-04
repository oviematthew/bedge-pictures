import { ChevronDown } from "lucide-react";
import { LinkItem } from "./LinkItem";

/* ✅ Dropdown for Desktop with fly-in animation */
export const Dropdown = ({ label, items, isOpen, toggle, onclick }) => (
  <div className="relative">
    <button
      className={`flex items-center space-x-1  hover:font-bold`}
      onClick={toggle}
    >
      <span className="italic font-poppins hover:not-italic">{label}</span>
      <ChevronDown size={18} />
    </button>
    <div
      className={`absolute left-0 w-48 shadow-md mt-2 rounded-md bg-white dark:bg-black overflow-hidden transition-all duration-400 ease-in-out transform ${
        isOpen ? "opacity-100 translate-y-0" : "hidden opacity-0 translate-y-4"
      }`}
    >
      <div className="flex flex-col space-y-2 p-3">
        {items.map(({ href, label }) => (
          <LinkItem key={href} href={href} label={label} onClick={onclick} />
        ))}
      </div>
    </div>
  </div>
);
