"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navigationLinks = [
  {
    name: "How It Works",
    href: "#how-it-works",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
] as any[]

// @component: PortfolioNavbar
export const PortfolioNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }
  const handleLinkClick = (href: string) => {
    closeMobileMenu()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  // @return
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-black text-foreground hover:text-primary transition-colors duration-200"
            >
              Right of Access
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationLinks.map((link) =>
                link.isPage ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-foreground hover:text-primary px-3 py-2 text-base font-bold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.href)}
                    className="text-foreground hover:text-primary px-3 py-2 text-base font-bold transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="hidden md:flex md:gap-3">
            <a
              href="https://calendly.com/mosaxton-s/free-demo-call"
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-button bg-primary text-primary-foreground px-6 py-3 text-base font-bold whitespace-nowrap"
              style={{ borderRadius: '2rem' }}
            >
              Book a Demo
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-primary p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="md:hidden bg-background border-t-2 border-black"
          >
            <div className="px-6 py-6 space-y-4">
              {navigationLinks.map((link) =>
                link.isPage ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block w-full text-left text-foreground hover:text-primary py-3 text-lg font-bold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.href)}
                    className="block w-full text-left text-foreground hover:text-primary py-3 text-lg font-bold transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                )
              )}
              <div className="pt-4 border-t-2 border-black">
                <a
                  href="https://calendly.com/mosaxton-s/free-demo-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="brutalist-button block w-full bg-primary text-primary-foreground px-6 py-3 text-base font-bold text-center"
                  style={{ borderRadius: '2rem' }}
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
