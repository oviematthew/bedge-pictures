import { ChevronDown, ChevronUp } from "lucide-react";
import { LinkItem } from "./LinkItem";

/* ✅ Dropdown for Mobile */
export const DropdownMobile = ({
  label,
  items,
  isOpen,
  toggle,
  active,
  onclick,
}) => (
  <div className="flex flex-col ">
    <button
      className={`flex items-center space-x-1 ${
        active ? "font-bold" : "font-thin"
      } hover:font-bold`}
      onClick={toggle}
    >
      <span className="italic font-poppins hover:not-italic">{label}</span>
      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
    </button>
    <div
      className={`transition-all duration-300 ease-in-out transform ${
        isOpen ? "opacity-100 translate-y-0" : "hidden opacity-0 translate-y-4"
      }`}
    >
      <div className="flex flex-col mt-2 mb-5 space-y-2">
        {items.map(({ href, label }) => (
          <LinkItem key={href} href={href} label={label} onClick={onclick} />
        ))}
      </div>
    </div>
  </div>
);
