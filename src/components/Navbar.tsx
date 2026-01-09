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

  /* ================= NAV HANDLER ================= */
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
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFD700] via-[#CFAE2D] to-[#0B3D2E] origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      <nav
        className={`fixed w-full z-50 backdrop-blur-md transition-all duration-500
          ${
            scrolled
              ? "bg-[#00162E]/95 shadow-2xl"
              : "bg-[#002147]/95 shadow-xl"
          }
          border-b border-[#FFD700]/20
        `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            {/* ================= LOGO ================= */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => handleNavClick("/")}
            >
              <img
                src="/logo.avif"
                alt="Georges Coffee Logo"
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-3xl md:text-4xl font-cursive text-[#FFD700] drop-shadow-lg tracking-wide">
                Ministry Of Coffee Affairs
              </span>
            </div>

            {/* ================= DESKTOP MENU ================= */}
            <div className="hidden md:flex items-center gap-12">
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
                    className={`relative text-lg font-semibold tracking-wide transition-all duration-300
                      ${
                        isActive
                          ? "text-[#FFD700]"
                          : "text-white hover:text-[#FFD700]"
                      }
                    `}
                  >
                    {item.name}

                    {/* Gold underline */}
                    <span
                      className={`absolute left-0 -bottom-2 h-[3px] w-full bg-gradient-to-r from-[#FFD700] to-[#0B3D2E]
                        transition-transform duration-300 origin-left
                        ${isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"}
                      `}
                    />
                  </button>
                );
              })}
            </div>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              className="md:hidden text-[#FFD700] p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? "x" : "menu"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X className="h-7 w-7" />
                  ) : (
                    <Menu className="h-7 w-7" />
                  )}
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
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col items-center gap-6 py-8 bg-[#002147] border-t border-[#FFD700]/20">
                  {[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Products", path: "/products" },
                    { name: "Contact", path: "/contact" },
                  ].map((item, index) => {
                    const isActive = location.pathname === item.path;

                    return (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavClick(item.path)}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.06 }}
                        className={`text-xl font-semibold tracking-wide transition-colors
                          ${
                            isActive
                              ? "text-[#FFD700]"
                              : "text-white hover:text-[#FFD700]"
                          }
                        `}
                      >
                        {item.name}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}