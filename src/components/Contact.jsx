import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

  return (
    <div className="bg-[#2C1D14] text-[#F0EAD6]">
      <section id="contact" ref={ref} className="pt-32 pb-20 px-4 scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-playfair-display text-center mb-16 tracking-wide drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          >
            Get in Touch ☕
          </motion.h2>

          <div className="flex justify-center">
            <ContactForm isInView={isInView} />
          </div>

          <ContactInfo isInView={isInView} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
