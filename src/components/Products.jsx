import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import { coffeeCategories } from "../utils/coffeeData";
import WhatsAppButton from "./WhatsAppButton";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("Arabica");

  const filteredCategories = useMemo(
    () => coffeeCategories.filter((cat) => cat.type === activeTab),
    [activeTab]
  );

  return (
    <>
      {/* ================= PRODUCTS SECTION ================= */}
      <section className="py-32 bg-[#002147] relative">
        <div className="max-w-7xl mx-auto px-6">

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-playfair-display text-center text-white mb-20">
            Our Curated Selection
            <span className="block mt-4 w-24 h-1 mx-auto bg-[#FFD700]" />
          </h2>

          {/* Tabs */}
          <div className="flex justify-center mb-20">
            {["Arabica", "Robusta"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-3 mx-2 rounded-full text-lg font-medium transition-all
                  ${
                    activeTab === tab
                      ? "bg-[#FFD700] text-[#002147] shadow-lg"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Categories */}
          <div className="space-y-28">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl md:text-4xl font-playfair-display text-white mb-12">
                  {category.title}
                </h3>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                  {category.products.map((product) => (
                    <motion.div
                      key={product.id}
                      whileHover={{ y: -6 }}
                      className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition"
                    >
                      <div className="h-56 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-110 transition duration-700"
                        />
                      </div>

                      <div className="p-6 text-center">
                        <h4 className="text-2xl font-playfair-display text-[#002147] mb-1">
                          {product.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-5">
                          {product.type} • {product.process}
                        </p>

                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="w-full py-3 rounded-full font-semibold text-white
                          bg-gradient-to-r from-[#FFD700] to-[#E6C15A]
                          hover:shadow-lg transition"
                        >
                          View Product
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl p-8 relative"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-[#FFD700]"
              >
                ✕
              </button>

              <div className="grid md:grid-cols-2 gap-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="rounded-xl object-cover aspect-square"
                />

                <div>
                  <h3 className="text-3xl font-playfair-display text-[#002147] mb-4">
                    {selectedProduct.name}
                  </h3>

                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li><strong>Type:</strong> {selectedProduct.type}</li>
                    <li><strong>Process:</strong> {selectedProduct.process}</li>
                    <li><strong>Area:</strong> {selectedProduct.Area}</li>
                    <li><strong>Screen Size:</strong> {selectedProduct.ScreenSize}</li>
                    <li>
                      <strong>Flavor:</strong>{" "}
                      {selectedProduct.FlavorProfile.join(", ")}
                    </li>
                  </ul>

                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="mt-8 w-full py-3 rounded-full bg-[#002147] text-white font-semibold hover:bg-[#001733]"
                  >
                    Close
                  </button>
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