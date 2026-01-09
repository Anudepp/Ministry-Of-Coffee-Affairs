import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import { coffeeCategories } from "../utils/coffeeData";
import WhatsAppButton from "./WhatsAppButton";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("Arabica");

  // Use useMemo to prevent re-calculating filteredCategories on every render.
  const filteredCategories = useMemo(() => {
    return coffeeCategories.filter((cat) => cat.type === activeTab);
  }, [activeTab]); // This will only re-run when activeTab changes.

  return (
    <>
      <section id="products" className="py-24 bg-[#2C1D14] text-[#F0EAD6]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-playfair-display text-center text-[#F0EAD6] mb-16 tracking-wide drop-shadow-lg mt-16">
            Our Curated Selection ☕
          </h2>

          {/* Tabs */}
          <div className="flex justify-center mb-16">
            <AnimatePresence mode="sync">
              {["Arabica", "Robusta"].map((tab) => (
                <motion.button
                  key={tab}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-8 py-3 mx-2 text-lg font-poppins font-medium rounded-full transition-all duration-300 overflow-hidden group
                    ${
                      activeTab === tab
                        ? "bg-[#B5843E] text-white shadow-lg shadow-[#B5843E]/30"
                        : "bg-transparent text-[#D4C4A7] border border-[#8C5F3A] hover:bg-[#8C5F3A] hover:bg-opacity-20 hover:text-white"
                    }`
                  }
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-1 bg-white"
                    />
                  )}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          {/* Categories */}
          <div className="space-y-24">
            <AnimatePresence mode="sync">
              {filteredCategories.map((category) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-3xl md:text-4xl font-playfair-display text-[#F0EAD6] mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-[#B5843E] drop-shadow">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
                    {category.products.map((product) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        whileHover={{
                          scale: 1.05,
                          y: -5,
                          boxShadow: "0 15px 30px rgba(0,0,0,0.4)",
                          rotate: 1,
                        }}
                        className="bg-[#3D2B20] rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 transform group border border-[#4a3728]"
                      >
                        <div className="relative overflow-hidden w-full h-56">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6 text-center flex flex-col items-center">
                          <h4 className="font-playfair-display text-2xl text-[#F0EAD6] mb-2 leading-tight drop-shadow-sm">
                            {product.name}
                          </h4>
                          <p className="text-sm text-[#D4C4A7] mb-4">
                            {product.type} - {product.process}
                          </p>
                          <button
                            onClick={() => setSelectedProduct(product)}
                            className="w-full px-6 py-3 text-white rounded-full font-poppins text-lg font-medium transition-all duration-300
                            bg-gradient-to-r from-[#B5843E] to-[#8C5F3A] hover:scale-105 hover:shadow-xl
                            "
                          >
                            View Product
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="bg-[#F0EAD6] text-[#2C1D14] p-6 sm:p-8 rounded-xl shadow-2xl max-w-full sm:max-w-2xl w-full relative flex flex-col md:flex-row border border-[#8C5F3A]"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-[#2C1D14] hover:text-[#B5843E] transition-colors z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="flex-shrink-0 w-full md:w-3/5 relative overflow-hidden rounded-lg">
                  <motion.img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    initial={{ scale: 1 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover rounded-lg aspect-square"
                  />
                </div>
                <div className="flex-1 space-y-4 md:w-2/5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-playfair-display font-bold mb-4 leading-tight drop-shadow">
                      {selectedProduct.name}
                    </h3>
                    <div className="space-y-2 text-sm text-[#2C1D14]">
                      <p className="font-playfair-display text-base">
                        <strong>Type:</strong> {selectedProduct.type}
                      </p>
                      <p className="font-playfair-display text-base">
                        <strong>Process:</strong> {selectedProduct.process}
                      </p>
                      <p className="font-playfair-display text-base">
                        <strong>Area:</strong> {selectedProduct.Area}
                      </p>
                      <p className="font-playfair-display text-base">
                        <strong>Screen Size:</strong> {selectedProduct.ScreenSize}
                      </p>
                      <p className="font-playfair-display text-base">
                        <strong>Flavor Profile:</strong>{" "}
                        {selectedProduct.FlavorProfile.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 mt-8">
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="w-full bg-[#B5843E] text-white py-3 rounded-full font-poppins font-semibold hover:bg-[#D19B53] transition-colors duration-300 shadow-lg"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <WhatsAppButton />
      <Footer />
    </>
  );
}