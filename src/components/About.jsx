import { Leaf, Coffee, Globe } from "lucide-react";
import React from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

// Reusable FeatureCard Component
const FeatureCard = ({ Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      // Tile Background: Navy Blue [#002147]
      className="p-6 bg-[#002147] border border-[#FFD700]/30 rounded-2xl shadow-xl text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="flex justify-center mb-4">
        {/* Icon: Yellow */}
        <Icon className="h-12 w-12 text-[#FFD700]" />
      </div>
      {/* Title: Yellow */}
      <h3 className="text-2xl font-playfair-display font-semibold mb-4 text-[#FFD700]">
        {title}
      </h3>
      {/* Content: White */}
      <p className="text-white text-base leading-relaxed font-poppins">
        {description}
      </p>
    </motion.div>
  );
};

const About = () => {
  return (
    // Page Background: Cream [#ebe5d1]
    <div className="bg-[#ebe5d1] min-h-screen font-poppins">
      <WhatsAppButton />

      <section id="about" className="relative pt-32 pb-20 scroll-mt-32">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Main Page Title: Navy Blue (to contrast with cream) */}
          <h2 className="text-5xl md:text-6xl font-playfair-display text-center text-[#002147] mb-16 tracking-wide drop-shadow-sm">
            Our Story 🌿
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              Icon={Leaf}
              title="Sustainable Sourcing"
              description="We partner directly with farmers to ensure ethical practices, fair trade relationships, and eco-friendly farming."
            />
            <FeatureCard
              Icon={Coffee}
              title="Exceptional Quality"
              description="From farm to your cup, the beans are handpicked, expertly harvested, and processed to the highest standards for a premium product each time."
            />
            <FeatureCard
              Icon={Globe}
              title="Global Expansion"
              description="Expanding our legacy to Australia, New Zealand, and the GCC region with a commitment to premium exports."
            />
          </div>

          <hr className="h-px w-2/3 mx-auto bg-[#002147]/20 border-0 mb-16" />

          {/* Journey Section Tile: Navy Blue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#002147] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[#FFD700]/20"
          >
            <div className="md:w-1/2">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/9/452965436/DE/NM/HW/197384915/arabica-green-coffee-beans.jpg"
                alt="Coffee plantation"
                className="w-full h-full object-cover md:aspect-square"
                loading="lazy"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              {/* Title: Yellow */}
              <h3 className="text-4xl font-playfair-display font-bold mb-4 text-[#FFD700]">
                Our Journey
              </h3>
              {/* Content: White */}
              <div className="space-y-4 text-white leading-relaxed">
                <p>
                  At Ministry Of Coffee Affairs, we proudly source coffee beans
                  – Farm to Globe. Certified by the Coffee Board of India, we
                  are trusted and specializing in sourcing the finest Arabica
                  and Robusta green coffee beans directly from Karnataka and
                  Kerala.
                </p>
                <p>
                  “Farm to Globe” reflects our dedication. We work closely with
                  growers to source beans at origin, preserve their natural
                  character through careful processing, and deliver worldwide
                  with efficient logistics and strict quality control.
                </p>
                <p>
                  More than a product, coffee is our passion. From farmers’
                  hands to cups globally, Ministry Of Coffee Affairs embodies
                  the promise of “Farm to Globe.”
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Info Tiles: Navy Blue */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-8 bg-[#002147] border border-[#FFD700]/20 rounded-2xl shadow-2xl transform transition duration-300 hover:scale-105"
            >
              <h3 className="text-3xl font-playfair-display font-bold mb-4 text-[#FFD700]">
                Our Heritage
              </h3>
              <p className="leading-relaxed text-white">
                Rooted in Southern India’s rich coffee traditions, our
                plantations cultivate the finest beans for generations. Our
                sustainable farming ensures premium harvests every season.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-8 bg-[#002147] border border-[#FFD700]/20 rounded-2xl shadow-2xl transform transition duration-300 hover:scale-105"
            >
              <h3 className="text-3xl font-playfair-display font-bold mb-4 text-[#FFD700]">
                Global Vision
              </h3>
              <p className="leading-relaxed text-white">
                As we expand to international markets, we uphold the same values
                of quality and dedication that define our brand. Our focus on
                sustainable and traceable sourcing guarantees excellence from
                farm to cup.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
