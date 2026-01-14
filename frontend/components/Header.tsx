"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  "ERP Solutions",
  "CRM Systems",
  "Business Management Software",
  "Custom SaaS Development",
  "E-Commerce Solutions",
  "HR & Payroll Systems",
  "Inventory & POS Systems",
  "Accounting & Finance Software",
  "Business Automation",
  "Data Analytics & Reporting",
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black backdrop-blur border-b ">
      <div className="max-w-7xl mx-auto px-6 flex h-20 items-center justify-between ">

        {/* Logo */}
        <Link
          href="/"
          className="text-4xl font-bold tracking-tight text-white"
        >
          Anixo
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12 text-base font-medium text-gray-700">

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-white hover:text-blue-600 hover:cursor-pointer">
              Services
              <span className="text-sm">▾</span>
            </button>

            <div className="absolute left-0 top-full mt-4 w-[420px] rounded-2xl bg-white shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="grid grid-cols-2 gap-1 p-3">
                {services.map((service) => (
                  <span
                    key={service}
                    className="px-4 py-3 rounded-xl text-sm text-black hover:bg-black hover:text-white cursor-pointer"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className="text-white hover:text-blue-600">
            About
          </Link>

          <Link
            href="/contact"
            className="ml-6 rounded-xl bg-white px-5 py-2.5 text-black font-semibold hover:bg-blue-600 transition hover:text-white"
          >
            Free Consultation
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl text-white"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[1000px] border-t" : "max-h-0"
          }`}
      >
        <nav className="px-6 py-6 space-y-4 text-white">

          {/* Services */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="w-full flex justify-between items-center py-3 font-medium"
          >
            Solutions
            <span>{mobileServicesOpen ? "−" : "+"}</span>
          </button>

          {mobileServicesOpen && (
            <div className="ml-4 space-y-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="py-2 text-sm text-white"
                >
                  {service}
                </div>
              ))}
            </div>
          )}

          <Link href="/about" className="block py-3">
            About
          </Link>

          <Link
            href="/contact"
            className="block mt-4 rounded-xl bg-white hover:bg-blue-600 py-3 text-center font-semibold text-black hover:text-white transition"
          >
            Free Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
