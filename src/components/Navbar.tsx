import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  // Check if current path matches the item path
  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50 mb-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <i className="fa-solid fa-microchip text-white text-xl"></i>
              </div>
                <span className="text-xl font-bold text-gray-800 font-serif italic tracking-wider">HUAYU CAPACITORS</span>
               <span className="hidden md:inline-block text-sm font-medium text-gray-500 ml-2" aria-label="Established in 1987">SINCE 1987</span>
             </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex items-center gap-2"
            >
               {[
                 { name: "Home", path: "/" },
                 { name: "Capacitors", path: "/aluminum-electrolytic-capacitors" },
                 { name: "Contact", path: "/contact" }
               ].map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                   <Link 
                      to={item.path}
                      className={`px-4 py-2 font-medium transition-colors rounded-lg ${
                        isActivePath(item.path) 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
               <a 
                 href="mailto:info@huayuelectronics.com" 
                 className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
               >
                 Get a Quote
               </a>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <i className="fa-solid fa-times text-2xl"></i>
              ) : (
                <i className="fa-solid fa-bars text-2xl"></i>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden bg-white border-t border-gray-200 ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {[
               { name: "Home", path: "/" },
               { name: "Capacitors", path: "/aluminum-electrolytic-capacitors" },
               { name: "Contact", path: "/contact" }
             ].map((item, index) => (
               <Link
                  key={index}
                  to={item.path}
                  className={`py-3 px-4 font-medium transition-colors rounded-lg ${
                    isActivePath(item.path) 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
          ))}
           <a 
                 href="mailto:info@huayuelectronics.com" 
                 className="py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-center"
                 onClick={() => setIsMenuOpen(false)}
               >
                 Get a Quote
          </a>
        </div>
      </motion.div>
    </header>
  );
}