import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
               <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                  <i className="fa-solid fa-microchip text-white text-lg"></i>
                </div>
               <span className="text-xl font-bold font-serif italic tracking-wider">HUAYU CAPACITORS</span>
              </motion.div>
            <motion.p variants={itemVariants} className="text-gray-400">
              Aluminum electrolytic capacitor manufacturer - Your Trusted Partner Since 1987.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants} className="text-lg font-bold mb-4 text-white">Quick Links</motion.h3>
            <motion.ul variants={containerVariants} className="space-y-2">
               {[
                 { name: "Capacitor Manufacturer", path: "/" },
                 { name: "Aluminum Electrolytic Capacitors", path: "/aluminum-electrolytic-capacitors" }
               ].map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} HUAYU ELECTRONICS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}