import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

const images = ["/HeroImage1.avif", "/HeroImage2.avif", "/HeroImage3.avif"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent(prev => (prev + 1) % images.length),
      5500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#002147] font-sans selection:bg-[#D4AF37] selection:text-[#002147]">
      <WhatsAppButton />

      {/* ================= HERO SECTION ================= */}
      <div id="home" className="relative w-full h-[95vh] overflow-hidden">
        <AnimatePresence mode="wait">
          {images.map(
            (img, index) =>
              index === current &&
              <motion.div
                key={img}
                initial={{ opacity: 0, x: 80, scale: 1.08 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Navy + Forest Green Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#002147]/85 via-[#0B3D2E]/60 to-transparent" />

                {/* Muted Gold Accent */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/12 via-transparent to-transparent" />
              </motion.div>
          )}
        </AnimatePresence>

        {/* ================= HERO CONTENT ================= */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center max-w-4xl"
          >
            <span className="text-[#D4AF37] uppercase tracking-[0.35em] font-bold text-xs md:text-sm mb-6 block">
              Premium Coffee Distribution for Global Markets
            </span>

            <h1 className="text-white text-5xl md:text-7xl font-serif font-bold leading-tight drop-shadow-2xl mb-8">
              From Farm to <span className="text-[#D4AF37]">Global Ports</span>
            </h1>

            <div className="w-32 h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#0B3D2E] mx-auto" />
          </motion.div>
        </div>

        {/* ================= PROGRESS INDICATOR ================= */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-4 z-30">
          {images.map((_, index) =>
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-[3px] rounded-full transition-all duration-700 ${index ===
              current
                ? "w-16 bg-[#D4AF37]"
                : "w-8 bg-white/40 hover:bg-white/70"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          )}
        </div>
      </div>

      {/* ================= WHAT WE DO (NEW LITE SHADE) ================= */}
      <section
        id="what-we-do"
        className="relative w-full py-28 px-6 md:px-20 bg-[#F9F7F2]"
      >
        {/* Subtle top stripe */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]/30" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* LEFT COLUMN */}
            <div className="space-y-10">
              <h2 className="text-[#002147] text-4xl md:text-5xl font-bold font-serif relative inline-block">
                What We Do
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#D4AF37]/20 -z-10" />
              </h2>

              <div className="space-y-6 text-[#334155] text-lg leading-relaxed">
                <p>
                  We distribute {" "}
                  <strong className="text-[#0B3D2E]">
                    premium-grade green coffee beans
                  </strong>{" "}
                  sourced from India’s finest plantations and tailored for
                  global markets.
                </p>

                <p className="border-l-4 border-[#D4AF37] pl-6 italic text-slate-600">
                  As Green bean distributors, we focus on long-term partnerships
                  built on quality assurance, competitive pricing, and
                  integrity.
                </p>
              </div>

              {/* Mission Box */}
              <div className="bg-[#002147] p-8 rounded-2xl text-white shadow-xl">
                <h4 className="text-[#D4AF37] font-bold text-xl mb-3">
                  Our Mission
                </h4>
                <p className="leading-relaxed text-slate-200">
                  To position Indian coffee as a trusted global commodity by
                  delivering consistency, transparency, and distribution
                  excellence to buyers and beyond.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN – CARDS */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Green Coffee ",
                  desc:
                    "Arabica & Robusta varieties prepared for global buyers.",
                  icon: "🌍"
                },
                {
                  title: "Quality Assurance",
                  desc: "Sterilized, tested, and export-grade processing.",
                  icon: "🛡️"
                },
                {
                  title: "Efficient Logistics",
                  desc:
                    "On-time delivery with documentation handled end-to-end.",
                  icon: "🚢"
                },
                {
                  title: "Global Reach",
                  desc: "Supplying roasters & importers worldwide.",
                  icon: "📦"
                }
              ].map((item, i) =>
                <div
                  key={i}
                  className="group p-7 bg-white border border-slate-100 rounded-xl transition-all duration-300
                             hover:-translate-y-2 hover:shadow-xl shadow-sm"
                >
                  <div className="text-3xl mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-[#002147] font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= DIVIDER ================= */}
      <div className="h-[1px] w-full bg-slate-200" />

      <Footer />
    </div>
  );
}
