import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactInfo({ isInView }) {
  return (
    <motion.div
      className="bg-[#3D2B20] rounded-2xl shadow-2xl overflow-hidden border border-[#4a3728] mt-12"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
    >
      <div className="p-8">
        <h3 className="text-3xl font-playfair-display text-[#B5843E] mb-6 border-b-2 border-[#8C5F3A] pb-3 drop-shadow">
          Contact Information
        </h3>
        {/*
          The grid-cols-2 class ensures that the grid has two columns on
          all screen sizes by default. On medium screens, the grid will change
          to 4 columns with md:grid-cols-4, as before.
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-poppins text-[#D4C4A7]">
          <div className="flex flex-col items-center text-center space-y-2">
            <Phone className="w-8 h-8 text-[#B5843E] flex-shrink-0" />
            <h4 className="font-semibold text-[#F0EAD6]">Phone</h4>
            <p>+61 468301261</p>
            <p>+91 7093126396</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <MessageCircle className="w-8 h-8 text-[#25D366] flex-shrink-0" />
            <h4 className="font-semibold text-[#F0EAD6]">WhatsApp</h4>
            <p>+61 468301261</p>
            <p>+91 7093126396</p>
          </div>
          {/*
            Use a grid column span of 2 (col-span-2) to make the email and address
            fields take up the full width of the two columns on mobile, forcing
            them to stack one after the other. This effect will be undone by the
            md:col-span-1 class which will reset them back to a single column for
            the md screens and up.
          */}
          <div className="flex flex-col items-center text-center space-y-2 col-span-2 md:col-span-1">
            <Mail className="w-8 h-8 text-[#B5843E] flex-shrink-0" />
            <h4 className="font-semibold text-[#F0EAD6]">Email</h4>
            <p>beansinfo@georgesexports.com</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2 col-span-2 md:col-span-1">
            <MapPin className="w-8 h-8 text-[#B5843E] flex-shrink-0" />
            <h4 className="font-semibold text-[#F0EAD6]">Address</h4>
            <p>Silver Spring Residency,</p>
            <p>HMT Colony Rd, Alwal, Secunderabad,</p>
            <p>Telangana 500010, India</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
