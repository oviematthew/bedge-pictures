"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { NavItem } from "../utils/NavItem";
import { Dropdown } from "../utils/Dropdown";
import { DropdownMobile } from "../utils/DropdownMobile";
import { LinkItem } from "../utils/LinkItem";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu) =>
    setDropdownOpen(dropdownOpen === menu ? null : menu);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(null);
  }, [pathname]);

  return (
    <nav className="sticky top-0 left-0 w-full shadow-md z-2">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo-black.png" width={60} height={30} alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavItem href="/" label="home" active={pathname === "/"} />
          <Dropdown
            label="Information"
            active={
              pathname.includes("/about") ||
              pathname.includes("/faq") ||
              pathname.includes("/our-approach")
            }
            items={[
              { href: "/about", label: "About" },
              { href: "/faq", label: "FAQ" },
              { href: "/our-approach", label: "Our Approach" },
            ]}
            isOpen={dropdownOpen === "info"}
            toggle={() => toggleDropdown("info")}
          />
          <Dropdown
            label="Portfolio"
            active={pathname.includes("/portfolio")}
            items={[
              { href: "/portfolio/wedding", label: "Weddings" },
              { href: "/portfolio/engagement", label: "Engagement" },
            ]}
            isOpen={dropdownOpen === "portfolio"}
            toggle={() => toggleDropdown("portfolio")}
          />
          <NavItem href="/shop" label="Shop" active={pathname === "/shop"} />
          <Link
            href="/contact"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Contact Us
          </Link>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="right-mobile items-center gap-3">
          <ThemeToggle className="sm:flex md:hidden" />
          <button className="md:hidden text-gray-900" onClick={toggleMenu}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-[100%]"
        } transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 text-xl font-medium`}
      >
        {/* Close Button (Top-Right) */}
        <button
          className="absolute top-6 right-6 text-gray-900"
          onClick={toggleMenu}
        >
          <X size={35} />
        </button>

        <LinkItem href="/" label="Home" onClick={toggleMenu} />
        <DropdownMobile
          label="Information"
          items={[
            { href: "/about", label: "About" },
            { href: "/faq", label: "FAQ" },
            { href: "/our-approach", label: "Our Approach" },
          ]}
          isOpen={dropdownOpen === "info"}
          toggle={() => toggleDropdown("info")}
        />
        <DropdownMobile
          label="Portfolio"
          items={[
            { href: "/portfolio/wedding", label: "Weddings" },
            { href: "/portfolio/engagement", label: "Engagement" },
          ]}
          isOpen={dropdownOpen === "portfolio"}
          toggle={() => toggleDropdown("portfolio")}
        />
        <LinkItem href="/shop" label="Shop" onClick={toggleMenu} />
        <Link
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          onClick={toggleMenu}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
