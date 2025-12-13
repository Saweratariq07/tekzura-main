'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiMenu, FiX, FiHome, FiUser, FiPhone, FiBriefcase } from "react-icons/fi";
import { FaLaptopCode, FaPenNib, FaMobileAlt, FaCloud } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 20);
    });
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? "backdrop-blur-xl bg-white/10 border-b border-white/10 shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <motion.img
          whileHover={{ scale: 1.1 }}
          src="/logo.png"
          alt="Tekzura Logo"
          className="w-12 h-auto cursor-pointer"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 cursor-pointer text-white font-medium items-center">

          {/* HOME */}
          <NavItem icon={<FiHome />} title="Home" href="#home" />

          {/* ABOUT US (Dropdown) */}
          <DropdownItem
            icon={<FiUser />}
            title="About Us"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            menuKey="about"
            items={[
              { name: "Who We Are", href: "#who" },
              { name: "Our Mission", href: "#mission" },
              { name: "Our Team", href: "#team" },
              { name: "Why Choose Us", href: "#why" },
            ]}
          />

          {/* SERVICES (MEGA DROPDOWN) */}
          <MegaDropdown
            icon={<FiBriefcase />}
            title="Services"
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            menuKey="services"
          />

          {/* PORTFOLIO */}
          <NavItem icon={<FaLaptopCode />} title="Portfolio" href="#portfolio" />

          {/* BLOG */}
          <NavItem icon={<FaPenNib />} title="Blog" href="#blog" />

          {/* CONTACT */}
          <NavItem icon={<FiPhone />} title="Contact" href="#contact" />

          {/* CTA BUTTON */}
          <motion.a
            href="#quote"
            whileHover={{ scale: 1.05 }}
            className="px-5 py-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-lg hover:shadow-blue-500/40"
          >
            Get a Quote
          </motion.a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-4xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0A0F1C] border-t border-white/20 py-6 px-6 text-white space-y-5"
          >

            <MobileItem icon={<FiHome />} title="Home" href="#home" />

            <MobileDropdown title="About Us" items={[
              "Who We Are", "Our Mission", "Our Team", "Why Choose Us"
            ]} />

            <MobileDropdown title="Services" items={[
              "Web Development", "Next.js/React", "E-commerce", "UI/UX Design",
              "App Development", "Digital Marketing", "Branding", "DevOps/Cloud"
            ]} />

            <MobileItem icon={<FaLaptopCode />} title="Portfolio" href="#portfolio" />
            <MobileItem icon={<FaPenNib />} title="Blog" href="#blog" />
            <MobileItem icon={<FiPhone />} title="Contact Us" href="#contact" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}


/* ----------------------------------------
   COMPONENTS BELOW
---------------------------------------- */

// Simple nav item with icon
function NavItem({ icon, title, href }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1 }}
      className="flex items-center gap-2 hover:text-cyan-400 transition"
    >
      {icon} {title}
    </motion.a>
  );
}

// Normal dropdown
function DropdownItem({ icon, title, items, activeDropdown, setActiveDropdown, menuKey }) {
  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setActiveDropdown(menuKey)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="flex items-center gap-2 hover:text-cyan-400">
        {icon} {title} <FiChevronDown />
      </div>

      {/* Dropdown menu */}
      <AnimatePresence>
        {activeDropdown === menuKey && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 mt-3 bg-white/10 backdrop-blur-xl p-4 rounded-md shadow-xl border border-white/10 w-48 space-y-3"
          >
            {items.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="block text-white hover:text-cyan-400"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// MEGA DROPDOWN for Services
function MegaDropdown({ icon, title, activeDropdown, setActiveDropdown, menuKey }) {
  const columns = {
    "Website Development": ["Next.js", "React.js", "E-commerce", "Shopify", "WordPress"],
    "UI/UX Design": ["UI Design", "Wireframing", "Prototyping"],
    "App Development": ["iOS Apps", "Android Apps", "Cross-Platform"],
    "Branding & Marketing": ["Logo Design", "Brand Identity", "SEO", "Social Media"],
  };

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setActiveDropdown(menuKey)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="flex items-center gap-2 hover:text-cyan-400">
        {icon} {title} <FiChevronDown />
      </div>

      <AnimatePresence>
        {activeDropdown === menuKey && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute left-0 mt-6 bg-gray-800 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 w-[700px]"
          >
            {Object.entries(columns).map(([header, items], index) => (
              <div key={index}>
                <h4 className="text-white font-semibold mb-3">{header}</h4>
                {items.map((name, i) => (
                  <a
                    key={i}
                    href="#"
                    className="block text-white/80 hover:text-cyan-400 mb-2"
                  >
                    {name}
                  </a>
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Mobile simple item
function MobileItem({ icon, title, href }) {
  return (
    <a href={href} className="flex items-center gap-3 text-lg">
      {icon} {title}
    </a>
  );
}

// Mobile dropdown
function MobileDropdown({ title, items }) {
  return (
    <div>
      <p className="text-lg mb-2">{title}</p>
      <div className="ml-4 space-y-2 text-white/80">
        {items.map((x, i) => (
          <p key={i} className="hover:text-cyan-400 cursor-pointer">{x}</p>
        ))}
      </div>
    </div>
  );
}
