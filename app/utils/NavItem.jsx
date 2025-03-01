/* ✅ Active Link Underline */
import Link from "next/link";

export const NavItem = ({ href, label, active }) => (
  <Link
    href={href}
    className={`relative italic font-poppins hover:font-bold hover:not-italic ${
      active ? "font-bold" : "font-regular"
    }`}
  >
    {label}
    {active && (
      <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-black dark:bg-white"></span>
    )}
  </Link>
);
