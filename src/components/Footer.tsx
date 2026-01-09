import { Coffee } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  const handleLinkClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#002147] text-white border-t border-[#FFD700]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          
          {/* Logo & Brand */}
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
            <Coffee className="h-6 w-6 text-[#FFD700]" />
            <span className="ml-2 font-serif font-semibold text-[#FFD700]">
              Ministry Of Coffee Affairs
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-10 w-full md:w-auto mt-4 md:mt-0">
            {/* Main Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className="text-gray-300 hover:text-[#FFD700] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Product Sub-links */}
            <div className="hidden md:flex gap-6 border-t border-gray-600 pt-4 md:border-t-0 md:pt-0 md:border-l md:pl-6">
              <Link
                to="/products"
                className="text-gray-300 hover:text-[#FFD700] transition-colors"
                onClick={(e) => handleLinkClick(e, "/products")}
              >
                Arabica Premium
              </Link>
              <Link
                to="/products"
                className="text-gray-300 hover:text-[#FFD700] transition-colors"
                onClick={(e) => handleLinkClick(e, "/products")}
              >
                Robusta Select
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-300 text-center md:text-right w-full md:w-auto mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Ministry Of Coffee Affairs
          </div>
        </div>
      </div>
    </footer>
  );
}