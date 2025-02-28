import Link from "next/link";

/* ✅ Mobile & Dropdown Links */
export const LinkItem = ({ href, label, onClick }) => (
  <Link
    href={href}
    className="text-gray-600 hover:text-gray-900"
    onClick={onClick}
  >
    {label}
  </Link>
);
