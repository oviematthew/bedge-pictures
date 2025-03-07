import Link from "next/link";

/* ✅ Mobile & Dropdown Links */
export const LinkItem = ({ href, label, onClick, active }) => (
  <Link
    className={`relative italic font-poppins hover:font-bold hover:not-italic ${
      active ? "font-bold" : "font-regular"
    }`}
    href={href}
    onClick={onClick}
  >
    {label}
  </Link>
);
