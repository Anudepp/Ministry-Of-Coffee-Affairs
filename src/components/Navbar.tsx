import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  /* ================= SCROLL DETECTION ================= */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      setIsMenuOpen(false);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 150);
    } else {
      navigate(path);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* ================= SCROLL PROGRESS BAR ================= */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFD700] via-[#CFAE2D] to-[#ebe5d1] origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      <nav
        className={`fixed w-full z-50 backdrop-blur-md transition-all duration-500
          ${
            scrolled
              ? "bg-[#00162E]/95 shadow-2xl py-2"
              : "bg-[#002147]/95 shadow-xl py-4"
          }
          border-b border-[#FFD700]/10
        `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            
            {/* ================= LOGO & AUTHENTIC NAME (With Hover Scale) ================= */}
            <div
              className="flex items-center gap-4 cursor-pointer group"
              onClick={() => handleNavClick("/")}
            >
              <img
                src="/logo.avif"
                alt="Ministry Of Coffee Affairs Logo"
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1">
                <span className="text-xl md:text-2xl font-serif font-bold text-[#FFD700] leading-none tracking-widest uppercase drop-shadow-md">
                  Ministry Of
                </span>
                <span className="text-lg md:text-xl font-serif font-medium text-white/90 leading-tight tracking-[0.2em] uppercase">
                  Coffee Affairs
                </span>
              </div>
            </div>

            {/* ================= DESKTOP MENU (With Hover Underline) ================= */}
            <div className="hidden md:flex items-center gap-10">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Contact", path: "/contact" },
              ].map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    className={`group relative text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300
                      ${
                        isActive
                          ? "text-[#FFD700]"
                          : "text-white/80 hover:text-[#FFD700]"
                      }
                    `}
                  >
                    {item.name}

                    {/* Gradient Underline Effect */}
                    <span
                      className={`absolute left-0 -bottom-2 h-[3px] w-full bg-gradient-to-r from-[#FFD700] to-transparent
                        transition-transform duration-300 origin-left
                        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                      `}
                    />
                  </button>
                );
              })}
            </div>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              className="md:hidden text-[#FFD700] p-2 hover:bg-white/5 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? "x" : "menu"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>

          {/* ================= MOBILE MENU ================= */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden bg-[#00162E]"
              >
                <div className="flex flex-col items-center gap-8 py-10 border-t border-[#FFD700]/10">
                  {[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Products", path: "/products" },
                    { name: "Contact", path: "/contact" },
                  ].map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.path)}
                      className="text-lg font-bold uppercase tracking-widest text-white active:text-[#FFD700] hover:text-[#FFD700] transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}