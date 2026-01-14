"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // get current path
  const [menuOpen, setMenuOpen] = useState(false);
  const [classOpen, setClassOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  /* Shadow on scroll */
  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Firebase auth listener */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  /* Lock body scroll on mobile menu */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out successfully");
  };

  // helper to check if path is active
  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`fixed top-0 z-50 w-full bg-white transition-shadow ${shadow ? "shadow-xl" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/app_icon.png"
            alt="Khmer Learning Logo"
            width={50}
            height={50}
            className="rounded-full"
            priority
          />
          <span className="text-2xl font-bold text-gray-800 hover:text-red-600 transition-colors">
            Khmer Learning
          </span>
        </Link>

        {/* Hamburger */}
        <button className="md:hidden text-3xl text-gray-800" onClick={() => setMenuOpen(true)}>
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`hover:text-red-600 ${isActive("/") ? "text-red-600 font-bold" : ""}`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`hover:text-red-600 ${isActive("/about") ? "text-red-600 font-bold" : ""}`}
          >
            About
          </Link>

          <div className="relative">
            <button
              onClick={() => setClassOpen(!classOpen)}
              className={`hover:text-red-600 ${pathname.startsWith("/class") ? "text-red-600 font-bold" : ""}`}
            >
          <Link
            href="/class/current"
            className={`hover:text-red-600 ${isActive("/class") ? "text-red-600 font-bold" : ""}`}
          >
            Class
          </Link>
            </button>
          </div>

          <Link
            href="/message"
            className={`hover:text-red-600 ${isActive("/message") ? "text-red-600 font-bold" : ""}`}
          >
            Message
          </Link>

          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-800">
                {user.displayName || user.email}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link href="/auth/login">Login</Link>
              <Link
                href="/auth/signup"
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 p-4 transform transition-transform md:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold">Menu</span>
          <button className="text-3xl" onClick={() => setMenuOpen(false)}>
            ×
          </button>
        </div>
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className={`block py-3 ${isActive("/") ? "text-red-600 font-bold" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          onClick={() => setMenuOpen(false)}
          className={`block py-3 ${isActive("/about") ? "text-red-600 font-bold" : ""}`}
        >
          About
        </Link>
        <Link
          href="/class/current"
          onClick={() => setMenuOpen(false)}
          className={`block py-3 ${isActive("/class/current") ? "text-red-600 font-bold" : ""}`}
        >
          Class
        </Link>

        <Link
          href="/message"
          onClick={() => setMenuOpen(false)}
          className={`block py-3 ${isActive("/message") ? "text-red-600 font-bold" : ""}`}
        >
          Message
        </Link>

        {user ? (
          <div className="mt-6 space-y-3">
            <div className="text-center font-semibold text-gray-800">
              {user.displayName || user.email}
            </div>

            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="w-full bg-red-600 text-white py-2 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link
              href="/auth/login"
              onClick={() => setMenuOpen(false)}
              className="block py-3"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              onClick={() => setMenuOpen(false)}
              className="block bg-red-600 text-white text-center py-2 rounded"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
