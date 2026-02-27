import Logo from "../assets/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  const navLinks = [
    { label: "Home", href: "#Header" },
    { label: "About", href: "#About" },
    { label: "Projects", href: "#Projects" },
    { label: "Services", href: "#Services" },
    { label: "Announcement", href: "/announcement" },
  ];
  const navLinksMob = [
    { label: "Home", href: "#Header" },
    { label: "About", href: "#About" },
    { label: "Projects", href: "#Projects" },
    { label: "Services", href: "#Services" },
    { label: "Announcement", href: "/announcement" },
    { label: "Contact Us", href: "#Contact" },
  ];

  return (
    <header>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
          }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 md:px-10 lg:px-32">

          {/* Logo */}
          <div className="flex items-center shrink-0 gap-1">
            <img src={Logo} alt="Logo" className="w-12 object-contain" />
            <span
              className={`font-bold text-lg tracking-widest transition-colors duration-300 ${scrolled ? "text-black" : "text-white"
                }`}
            >
              ANTS
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex flex-1 justify-center gap-6 text-sm xl:text-base xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Announcement" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                // {...(link.newTab && { target: "_blank", rel: "noreferrer" })}
                className={`cursor-pointer transition-colors duration-300 hover:text-cyan-500 whitespace-nowrap ${scrolled ? "text-gray-700" : "text-white"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </ul>

          {/* Desktop Contact Button */}
          <a href="#Contact" className="hidden lg:block shrink-0">
            <button
              className={`px-6 py-2 rounded-full text-sm xl:px-8 xl:text-base transition-all duration-300 ${scrolled
                ? "bg-cyan-600 text-white hover:bg-cyan-700"
                : "bg-white/20 border border-white text-white hover:bg-white hover:text-black"
                }`}
            >
              Contact Us
            </button>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setShowMobileMenu(true)}
            className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
          >
            <span
              className={`block w-6 h-0.5 ${scrolled ? "bg-black" : "bg-white"
                }`}
            />
            <span
              className={`block w-6 h-0.5 ${scrolled ? "bg-black" : "bg-white"
                }`}
            />
            <span
              className={`block w-6 h-0.5 ${scrolled ? "bg-black" : "bg-white"
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${showMobileMenu
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setShowMobileMenu(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 ${showMobileMenu ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-5 border-b">
            <div className="flex items-center gap-1">
              <img src={Logo} alt="Logo" className="w-10 object-contain" />
              <span className="font-bold text-lg tracking-widest">ANTS</span>
            </div>
            <button
              onClick={() => setShowMobileMenu(false)}
              className="text-gray-500 hover:text-black text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col px-6 py-6 gap-2 text-base font-medium text-gray-700">
            {navLinksMob.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setShowMobileMenu(false)}
                target={link.label === "Announcement" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                // {...(link.newTab && { target: "_blank", rel: "noreferrer" })}
                className="px-4 py-3 rounded-lg hover:bg-cyan-50 hover:text-cyan-600 transition"
              >
                {link.label}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;