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

  function closeMobileMenu() {
    toggleMenu();
    setDropdownOpen(null);
  }

  return (
    <nav className="sticky top-0 left-0 w-full shadow-md z-[100] bg-white dark:bg-black">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            className="dark:hidden"
            src="/logo-black.png"
            width={60}
            height={40}
            alt="Logo - Light Mode"
          />

          <Image
            className="hidden dark:flex"
            src="/logo-white.png"
            width={60}
            height={40}
            alt="Logo - Dark Mode"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavItem href="/" label="home" active={pathname === "/"} />

          <Dropdown
            label="information"
            active={
              pathname.includes("/about") ||
              pathname.includes("/faq") ||
              pathname.includes("/our-approach")
            }
            items={[
              { href: "/about", label: "about" },
              { href: "/faqs", label: "faqs" },
              { href: "/blog", label: "blog" },
              { href: "/wedding-stories", label: "wedding stories" },
              { href: "/our-approach", label: "our approach" },
            ]}
            isOpen={dropdownOpen === "info"}
            toggle={() => toggleDropdown("info")}
            onclick={toggleDropdown}
          />
          <Dropdown
            label="portfolio"
            active={pathname.includes("/portfolio")}
            items={[
              { href: "/portfolio/wedding", label: "wedding" },
              { href: "/portfolio/engagement", label: "engagement" },
            ]}
            isOpen={dropdownOpen === "portfolio"}
            toggle={() => toggleDropdown("portfolio")}
            onclick={toggleDropdown}
          />
          <NavItem
            href="/contact"
            label="contact"
            active={pathname === "/contact"}
          />
          <NavItem href="https://shop.bedgepictures.com" label="shop" />

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="right-mobile flex justify-center items-center gap-3 md:hidden ">
          <ThemeToggle />
          <button
            className="md:hidden text-black dark:text-white"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X className="dark:bg-white" size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white dark:bg-black z-100 transform ${
          isOpen ? "translate-x-0" : "translate-x-[100%]"
        } transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 text-xl font-medium`}
      >
        {/* Close Button (Top-Right) */}
        <button
          className="absolute top-6 right-6 text-black dark:text-white"
          onClick={toggleMenu}
        >
          <X size={35} />
        </button>

        <LinkItem
          href="/"
          label="Home"
          active={pathname === "/"}
          onClick={toggleMenu}
        />
        <DropdownMobile
          label="Information"
          items={[
            { href: "/about", label: "about" },
            { href: "/faqs", label: "faqs" },
            { href: "/blog", label: "blog" },
            { href: "/wedding-stories", label: "wedding stories" },
            { href: "/our-approach", label: "our approach" },
          ]}
          isOpen={dropdownOpen === "info"}
          toggle={() => toggleDropdown("info")}
          onclick={closeMobileMenu}
        />
        <DropdownMobile
          label="Portfolio"
          items={[
            { href: "/portfolio/wedding", label: "wedding" },
            { href: "/portfolio/engagement", label: "engagement" },
          ]}
          isOpen={dropdownOpen === "portfolio"}
          toggle={() => toggleDropdown("portfolio")}
          onclick={closeMobileMenu}
        />

        <LinkItem
          href="/contact"
          active={pathname === "/contact"}
          label="contact"
          onClick={toggleMenu}
        />
        <LinkItem href="https://shop.bedgepictures.com" label="shop" />
      </div>
    </nav>
  );
}
