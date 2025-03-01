import { Menu, X, ChevronDown } from "lucide-react";
import { LinkItem } from "./LinkItem";

/* ✅ Dropdown for Mobile */
export const DropdownMobile = ({ label, items, isOpen, toggle, active }) => (
  <div className="flex flex-col items-center">
    <button
      className={`flex items-center space-x-1 ${
        active ? "font-bold" : "font-thin"
      } hover:font-bold`}
      onClick={toggle}
    >
      <span className="italic font-poppins hover:not-italic">{label}</span>
      <ChevronDown size={18} />
    </button>
    <div
      className={`transition-all duration-300 ease-in-out transform ${
        isOpen ? "opacity-100 translate-y-0" : "hidden opacity-0 translate-y-4"
      }`}
    >
      <div className="flex flex-col mt-2 space-y-2">
        {items.map(({ href, label }) => (
          <LinkItem key={href} href={href} label={label} />
        ))}
      </div>
    </div>
  </div>
);
