/* ✅ Active Link Underline */
import Link from "next/link";

export const NavItem = ({ href, label, active }) => (
  <Link
    href={href}
    className={`relative hover:text-gray-900 ${
      active ? "text-gray-900" : "text-gray-600"
    }`}
  >
    {label}
    {active && (
      <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-black"></span>
    )}
  </Link>
);
