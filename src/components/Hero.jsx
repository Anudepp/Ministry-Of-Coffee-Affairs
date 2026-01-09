import React from "react";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

const images = ["/HeroImage1.avif", "/HeroImage2.avif", "/HeroImage3.avif"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      2500 
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <WhatsAppButton />
      {/* HERO SECTION */}
      <div
        id="home"
        className="relative w-full h-screen bg-black pt-24 overflow-hidden"
      >
        <AnimatePresence>
          {images.map(
            (img, index) =>
              index === current && ( 
                <motion.div
                  key={img}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className={`absolute inset-0 flex items-center justify-center`}
                >
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-[6000ms] ease-linear transform-gpu"
                    style={{
                      transform: "scale(1.05)",
                    }}
                    loading="eager"
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 pointer-events-none" />

        {/* Tagline Container at the top */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 p-6 text-center">
          <p className="text-white text-3xl sm:text-4xl md:text-5xl font-dancing-script italic font-semibold drop-shadow-lg whitespace-nowrap">
            From Farm to Globe
          </p>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === current ? "bg-[#F0EAD6]" : "bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* WHAT WE DO SECTION */}
      <section
        id="what-we-do"
        className="relative w-full bg-gradient-to-b from-[#4b2e2e] to-[#f7e9d7] py-20 px-6 md:px-20"
      >
        {/* The gradient overlay is moved to the section directly */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12">
          {/* Intro Text */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              What We Do
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              We specialize in the export of premium-grade green coffee beans
              sourced from the finest plantations in the southern states of
              India—regions renowned for their fertile soil, ideal climate, and
              unique flavor profiles. Our expertise combines sustainable
              sourcing, strict quality checks, and global logistics to ensure
              our partners receive authentic coffee from India, crafted for
              world markets.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              As merchant exporters, we bridge the gap between trusted growers
              and discerning buyers worldwide. We ensure competitive pricing while
              maintaining uncompromised quality in every deal. Driven by integrity
              and a passion for excellence, we are committed to positioning Indian
              coffee as a trusted and sought-after choice in global markets.
            </p>
          </div>

          {/* Card Layout */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid gap-8 md:grid-cols-2 text-left">
              <div className="p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-[#6b4226] mb-2">
                  Green Coffee Bean Exports
                </h3>
                <p className="text-gray-600">
                  Supplying Arabica and Robusta varieties to meet the growing
                  global demand for high-quality beans.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-[#6b4226] mb-2">
                  Quality Assurance
                </h3>
                <p className="text-gray-600">
                  All products are sterilized and processed to control
                  micro-contamination, ensuring safety and consistency.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-[#6b4226] mb-2">
                  Efficient Logistics
                </h3>
                <p className="text-gray-600">
                  From careful packaging to on-time delivery, we ensure a smooth
                  export process tailored to international clients.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-[#6b4226] mb-2">
                  Global Reach
                </h3>
                <p className="text-gray-600">
                  Serving roasters, distributors, and importers across Europe,
                  North America, the Middle East, and beyond.
                </p>
              </div>
            </div>
            <p className="mt-10 text-lg italic text-gray-700">
              For us, coffee export is not just a business—it’s a passion. We
              take pride in being part of every cup brewed with our beans,
              ensuring that our partners receive nothing less than the authentic
              taste of India’s coffee heritage.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}