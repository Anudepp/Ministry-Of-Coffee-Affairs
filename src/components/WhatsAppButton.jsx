import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const dealerNumber = "+61468301261";
  const message = "Hello, I am interested in your coffee beans";
  const whatsappLink = `https://wa.me/${dealerNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition z-50 flex items-center space-x-2 animate-pulse"
    >
      <FaWhatsapp size={28} />
      <span className="text-sm font-semibold pr-2">Chat Now</span>
    </a>
  );
}
