import { useState } from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      console.log('Form submitted successfully:', formData);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Contact Us
            </motion.h1>
            <motion.div variants={fadeInUp} className="w-20 h-1 bg-blue-600 mx-auto mb-6"></motion.div>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our products or services? We're here to help!
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                 HUAYU Electronics - Whether you need product information, technical support, or have a custom requirement, our team is ready to assist you.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "fa-map-marker-alt",
                    title: "Our Location",
                    content: "Nantong, Jiangsu Province, China"
                  },
                  {
                    icon: "fa-envelope",
                    title: "Email Us",
                    content: "info@huayuelectronics.com"
                  },
                  {
                    icon: "fa-phone",
                    title: "Call Us",
                    content: "+86-513-12345678"
                  },
                  {
                    icon: "fa-clock",
                    title: "Business Hours",
                    content: "Monday - Friday: 9:00 AM - 6:00 PM"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 text-xl mt-1 p-3 bg-blue-50 rounded-full">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="font-bold text-lg text-gray-800 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { icon: "fa-linkedin", name: "LinkedIn" },
                    { icon: "fa-twitter", name: "Twitter" },
                    { icon: "fa-facebook", name: "Facebook" },
                    { icon: "fa-youtube", name: "YouTube" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className={`fa-brands ${social.icon}`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-info">Product Information</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="quote">Request a Quote</option>
                    <option value="custom">Custom Requirements</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className={`w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-circle-notch fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Factory Location Map */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Factory Location</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located in Nantong, Jiangsu Province, our manufacturing facility is strategically positioned for efficient global logistics.
            </p>
          </motion.div>

          <div className="rounded-xl overflow-hidden shadow-xl">
             <img 
               src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Factory%20aerial%20view%20industrial%20area%20map&sign=428933c490cd67b04d9c60d1cbb1fe72" 
               alt="HUAYU Electronics Capacitor Factory Location Map in Nantong, China" 
               className="w-full h-auto"
               loading="lazy"
             />
          </div>
        </div>
      </section>
    </div>
  );
}