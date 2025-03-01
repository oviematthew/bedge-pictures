import Link from "next/link";

/* ✅ Mobile & Dropdown Links */
export const LinkItem = ({ href, label, onClick }) => (
  <Link className="italic font-poppins hover:not-italic" href={href} onClick={onClick}>
    {label}
  </Link>
);
