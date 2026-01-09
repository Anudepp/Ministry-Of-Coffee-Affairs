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
      className="p-6 bg-[#3D2B20] border border-[#8C5F3A] rounded-2xl shadow-xl text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="flex justify-center mb-4">
        <Icon className="h-12 w-12 text-[#B5843E]" />
      </div>
      <h3 className="text-2xl font-playfair-display font-semibold mb-4 text-[#B5843E] drop-shadow-md">
        {title}
      </h3>
      <p className="text-[#D4C4A7] text-base leading-relaxed font-poppins">
        {description}
      </p>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="bg-[#2C1D14] text-[#F0EAD6] min-h-screen">
      {/* About Section */}
      <section id="about" className="relative pt-32 pb-20 scroll-mt-32">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-5xl md:text-6xl font-playfair-display text-center text-[#F0EAD6] mb-16 tracking-wide drop-shadow-lg">
            Our Story 🌿
          </h2>

          {/* Feature Cards Grid */}
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
          <hr className="h-px w-2/3 mx-auto bg-[#8C5F3A] border-0 mb-16 opacity-50" />

          {/* Journey Section with Image & Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#3D2B20] rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-[#8C5F3A]"
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
              <h3 className="text-4xl font-playfair-display font-bold mb-4 text-[#B5843E] drop-shadow">
                Our Journey
              </h3>
              <div className="space-y-4 text-[#D4C4A7] leading-relaxed font-poppins">
                <p>
                  At Georges Imports and Exports Pvt Ltd, we proudly present
                  Georges Coffee – Farm to Globe. Certified by the Coffee Board
                  of India, we are trusted merchant exporters, we specialize in
                  sourcing the finest Arabica and Robusta green coffee beans
                  directly from the plantations of Karnataka and Kerala, regions
                  known for their fertile soil and rich coffee heritage.
                </p>
                <p>
                  Our tagline, “Farm to Globe,” reflects this journey. We work
                  closely with growers to source beans at their origin, preserve
                  their natural character through careful processing and
                  sterilization, and deliver them worldwide with efficient
                  logistics and strict quality control. From the farm to the
                  global market, we ensure authenticity at every step.
                </p>
                <p>
                  More than a product, coffee is our passion. From the hands of
                  farmers to cups worldwide, Georges Coffee truly lives the
                  promise of “Farm to Globe.”
                </p>
              </div>
            </div>
          </motion.div>

          {/* Additional Info Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-8 bg-[#3D2B20] border border-[#8C5F3A] rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-3xl font-playfair-display font-bold mb-4 text-[#B5843E]">
                Our Heritage
              </h3>
              <p className="text-[#D4C4A7] leading-relaxed font-poppins">
                Rooted in the rich traditions of Southern India, our plantations
                have cultivated the finest coffee beans for generations. Our
                passion for sustainable farming ensures the highest quality
                harvests.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-8 bg-[#3D2B20] border border-[#8C5F3A] rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-3xl font-playfair-display font-bold mb-4 text-[#B5843E]">
                Global Vision
              </h3>
              <p className="text-[#D4C4A7] leading-relaxed font-poppins">
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
      <WhatsAppButton />
    </div>
  );
};

export default About;
