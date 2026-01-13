import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactInfo({ isInView }) {
  return (
    <motion.div
      // UPDATED: Navy Blue background (#001F3F) and Gold border
      className="bg-[#001F3F] rounded-2xl shadow-2xl overflow-hidden border border-[#D4AF37]/30 mt-12"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
    >
      <div className="p-8">
        {/* UPDATED: Gold Heading (#D4AF37) */}
        <h3 className="text-3xl font-playfair-display text-[#D4AF37] mb-6 border-b-2 border-[#D4AF37]/40 pb-3 drop-shadow">
          Contact Information
        </h3>

        {/* UPDATED: Text color to White for readability */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-poppins text-white/90">
          {/* Phone Section */}
          <div className="flex flex-col items-center text-center space-y-2">
            <Phone className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
            <h4 className="font-semibold text-[#D4AF37]">Phone</h4>
            <div className="text-sm">
              <p>+61 468301261</p>
              <p>+91 7093126396</p>
            </div>
          </div>

          {/* WhatsApp Section - Kept green icon for brand recognition, but used gold text */}
          <div className="flex flex-col items-center text-center space-y-2">
            <MessageCircle className="w-8 h-8 text-[#25D366] flex-shrink-0" />
            <h4 className="font-semibold text-[#D4AF37]">WhatsApp</h4>
            <div className="text-sm">
              <p>+61 468301261</p>
              <p>+91 7093126396</p>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center text-center space-y-2 col-span-2 md:col-span-1">
            <Mail className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
            <h4 className="font-semibold text-[#D4AF37]">Email</h4>
            <p className="text-sm">info@ministryofcoffeeaffairs.com</p>
          </div>

          {/* Address Section */}
          <div className="flex flex-col items-center text-center space-y-2 col-span-2 md:col-span-1">
            <MapPin className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
            <h4 className="font-semibold text-[#D4AF37]">Address</h4>
            <div className="text-sm leading-relaxed">
              <p>Unit 6, 50 Waroonga Rd</p>
              <p>Waratah NSW 2298</p>
              <p>Australia</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
