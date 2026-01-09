import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const dealerNumber = "61468301261"; // remove +
  const message = "Hello, I am interested in your coffee beans";
  const whatsappLink = `https://wa.me/${dealerNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        right-5
        bottom-5
        md:bottom-6
        z-[9999]

        flex items-center gap-2
        px-4 py-3

        bg-[#25D366]
        text-white
        rounded-full
        shadow-2xl

        hover:bg-[#1EBE5D]
        hover:scale-105
        active:scale-95

        transition-all duration-300
      "
      style={{
        // iOS safe-area support
        bottom: "calc(env(safe-area-inset-bottom) + 16px)"
      }}
    >
      <FaWhatsapp size={26} />
      <span className="text-sm font-semibold whitespace-nowrap">Chat Now</span>
    </a>
  );
}
