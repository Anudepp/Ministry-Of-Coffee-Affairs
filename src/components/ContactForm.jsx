// src/components/ContactForm.jsx

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export default function ContactForm({ isInView }) {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState("idle");

  const validateForm = (fieldValues = formData) => {
    const tempErrors = {};
    const namePattern = /^[a-zA-Z\s'-]+$/;
    const emailPattern = /^\S+@\S+\.\S+$/;
    const phonePattern = /^[0-9\s-()]+$/;

    if (!fieldValues.firstName.trim()) tempErrors.firstName = "First name is required.";
    else if (fieldValues.firstName.trim().length < 2) tempErrors.firstName = "First name must be at least 2 characters.";
    else if (!namePattern.test(fieldValues.firstName.trim())) tempErrors.firstName = "Invalid characters in first name.";

    if (!fieldValues.lastName.trim()) tempErrors.lastName = "Last name is required.";
    else if (fieldValues.lastName.trim().length < 2) tempErrors.lastName = "Last name must be at least 2 characters.";
    else if (!namePattern.test(fieldValues.lastName.trim())) tempErrors.lastName = "Invalid characters in last name.";

    if (!fieldValues.email.trim()) tempErrors.email = "Email is required.";
    else if (!emailPattern.test(fieldValues.email.trim())) tempErrors.email = "Please enter a valid email address.";

    if (!fieldValues.phone.trim()) tempErrors.phone = "Phone number is required.";
    else if (!phonePattern.test(fieldValues.phone.trim())) tempErrors.phone = "Please enter a valid phone number.";
    else if (fieldValues.phone.trim().length < 10) tempErrors.phone = "Phone number is too short.";

    if (!fieldValues.country.trim()) tempErrors.country = "Country is required.";

    if (!fieldValues.message.trim()) tempErrors.message = "Message is required.";
    else if (fieldValues.message.trim().length < 10) tempErrors.message = "Message must be at least 10 characters.";
    else if (fieldValues.message.trim().length > 500) tempErrors.message = "Message cannot exceed 500 characters.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (Object.keys(errors).length > 0) {
      validateForm({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmissionStatus("sending");
      try {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
        setSubmissionStatus("success");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          country: '',
          message: ''
        });
        setErrors({});
      } catch (error) {
        console.error("Failed to send email:", error);
        setSubmissionStatus("error");
      }
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 border-2 rounded-xl bg-[#2C1D14] text-[#F0EAD6] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#B5843E] hover:border-[#B5843E] ${
      errors[field] ? 'border-red-500' : 'border-[#4a3728]'
    }`;

  const getStatusMessage = () => {
    switch (submissionStatus) {
      case "sending":
        return <p className="text-center text-[#B5843E] font-medium">Sending message...</p>;
      case "success":
        return <p className="text-center text-green-500 font-medium">Message sent successfully! We'll be in touch soon.</p>;
      case "error":
        return <p className="text-center text-red-500 font-medium">Something went wrong. Please try again later.</p>;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="bg-[#3D2B20] rounded-2xl shadow-2xl overflow-hidden border border-[#4a3728] max-w-2xl w-full"
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
    >
      <div className="p-8">
        <h3 className="text-3xl font-playfair-display text-[#B5843E] mb-6 border-b-2 border-[#8C5F3A] pb-3 drop-shadow">
          Send a Message
        </h3>
        <form className="space-y-6 font-poppins" onSubmit={handleSubmit} noValidate ref={form}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-[#D4C4A7] mb-2">First Name</label>
              <input type="text" id="firstName" name="from_first_name" value={formData.firstName} onChange={handleChange} onBlur={() => validateForm({ ...formData, firstName: formData.firstName })} className={inputClass('firstName')} />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-[#D4C4A7] mb-2">Last Name</label>
              <input type="text" id="lastName" name="from_last_name" value={formData.lastName} onChange={handleChange} onBlur={() => validateForm({ ...formData, lastName: formData.lastName })} className={inputClass('lastName')} />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#D4C4A7] mb-2">Email</label>
            <input type="email" id="email" name="from_email" value={formData.email} onChange={handleChange} onBlur={() => validateForm({ ...formData, email: formData.email })} className={inputClass('email')} />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#D4C4A7] mb-2">Phone Number</label>
            <input type="tel" id="phone" name="from_phone" value={formData.phone} onChange={handleChange} onBlur={() => validateForm({ ...formData, phone: formData.phone })} className={inputClass('phone')} />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-[#D4C4A7] mb-2">Country</label>
            <input type="text" id="country" name="from_country" value={formData.country} onChange={handleChange} onBlur={() => validateForm({ ...formData, country: formData.country })} className={inputClass('country')} />
            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#D4C4A7] mb-2">Message</label>
            <textarea id="message" rows={4} name="message" value={formData.message} onChange={handleChange} onBlur={() => validateForm({ ...formData, message: formData.message })} className={inputClass('message')}></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          {getStatusMessage()}
          <motion.button type="submit" className="w-full bg-[#B5843E] text-white py-3 rounded-full font-poppins font-semibold hover:bg-[#D19B53] transition-colors duration-300 shadow-lg disabled:opacity-50" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={submissionStatus === 'sending'}>
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}