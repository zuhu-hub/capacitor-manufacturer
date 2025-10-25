import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const slideIn = {
  hidden: { opacity: 0, x: 0 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-24 px-4 md:px-8 overflow-hidden">
         <div className="absolute inset-0 opacity-10" aria-hidden="true">
           <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-white" aria-hidden="true"></div>
           <div className="absolute -left-20 bottom-10 w-64 h-64 rounded-full bg-white" aria-hidden="true"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="text-left text-white"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                   The Proven Choice for Aluminum Electrolytic Capacitors
                 </h1>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <p className="text-xl text-blue-100 mb-8 max-w-xl">
                  With over 35 years of experience, HUAYU Electronics delivers high-quality, reliable and customized capacitor solutions for global markets. Our products meet the highest industry standards for performance and durability.
                </p>
              </motion.div>
               <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                 <Link to="/aluminum-electrolytic-capacitors" className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-700 font-medium rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                   Explore Aluminum Electrolytic Capacitors
                 </Link>
                 <Link to="/contact" className="px-8 py-3 bg-transparent hover:bg-blue-700 text-white border border-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
                   Contact HUAYU Electronics
                 </Link>
               </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Aluminum%20Electrolytic%20Capacitors%20manufacturing%20factory%20equipment&sign=39bb8275cc79e227e2477e58b5f8769a" 
                  alt="Aluminum Electrolytic Capacitors Manufacturing" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
              
              {/* Floating stats cards */}
              <motion.div 
                className="absolute -bottom-10 -right-10 bg-white p-4 rounded-xl shadow-xl max-w-xs hidden md:block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <i className="fa-solid fa-certificate text-2xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">ISO Certified</h3>
                    <p className="text-sm text-gray-600">Quality management system</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About HUAYU Electronics</h2>
             <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               HUAYU - A professional aluminum electrolytic capacitor manufacturer with over 35 years of experience, specializing in high-quality snap-in and screw terminal capacitors.
             </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our History & Mission</h3>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Founded in 1987, HUAYU Electronics has evolved from a small local manufacturer to a global leader in aluminum electrolytic capacitor production.
                </p>
                <p>
                  For over three decades, we have been committed to innovation, quality, and customer satisfaction. Our continuous investment in research and development has allowed us to stay at the forefront of capacitor technology.
                </p>
                <p>
                  Our mission is to provide high-quality, reliable capacitor solutions that meet the evolving needs of our customers worldwide, while maintaining the highest standards of ethical business practices.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-5 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">35+</div>
                  <p className="text-gray-700">Years of Experience</p>
                </div>
                <div className="bg-blue-50 p-5 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <p className="text-gray-700">Countries Served</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Electronic%20components%20factory%20exterior%20modern&sign=26d6a19463dac516f2713e7a401f0f2c" 
                  alt="Huayu Electronics Factory Exterior" 
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
                 <div className="absolute -top-5 -left-5 bg-white p-4 rounded-xl shadow-lg hidden md:block" aria-label="50,000+ square meters manufacturing space">
                   <div className="flex items-center gap-3">
                     <div className="text-3xl text-blue-600"><i className="fa-solid fa-industry" aria-hidden="true"></i></div>
                     <div>
                       <h4 className="font-bold text-gray-800">50,000+ m²</h4>
                       <p className="text-sm text-gray-600">Manufacturing Space</p>
                     </div>
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Aluminum Electrolytic Capacitor Product Range</h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               High-quality snap-in and screw terminal aluminum electrolytic capacitors for industrial, commercial and consumer electronics applications.
             </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-72 overflow-hidden">
                   <img 
                     src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Snap-in%20Aluminum%20Electrolytic%20Capacitors&sign=d803deb7d48fc91f04899fa1802ff6ba" 
                     alt="HUAYU Snap-in Aluminum Electrolytic Capacitors for Industrial Applications" 
                     className="w-full h-full object-cover transition-transform hover:scale-105"
                     loading="lazy"
                   />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Snap-in Capacitors</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  High-performance snap-in aluminum electrolytic capacitors with excellent temperature stability and long service life, ideal for power supplies and industrial applications.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["CD292", "CD293", "CD294", "CD295", "CD296", "CD297", "CD298"].map((model, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {model}
                    </span>
                  ))}
                </div>
                 <Link to="/aluminum-electrolytic-capacitors" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg">
                   View Snap-in Aluminum Electrolytic Capacitors Series
                 </Link>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-72 overflow-hidden">
                   <img 
                     src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Screw%20Terminal%20Aluminum%20Electrolytic%20Capacitors&sign=49bb3521b24440ce93b356da0901df40" 
                     alt="HUAYU Screw Terminal Aluminum Electrolytic Capacitors for Heavy-duty Applications" 
                     className="w-full h-full object-cover transition-transform hover:scale-105"
                     loading="lazy"
                   />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Screw Terminal Capacitors</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  Heavy-duty screw terminal aluminum electrolytic capacitors designed for high voltage and high ripple current applications in industrial equipment.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["CD135", "CD136", "CD13L", "CD92", "CD92H", "CD92L", "CD13N", "CD13NH", "CD13HL"].map((model, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {model}
                    </span>
                  ))}
                </div>
                 <Link to="/aluminum-electrolytic-capacitors" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg">
                   View Screw Terminal Aluminum Electrolytic Capacitors Series
                 </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Our Capacitors</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide high-quality aluminum electrolytic capacitors with exceptional performance and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "fa-temperature-three-quarters",
                title: "Wide Temperature Range",
                description: "Our capacitors operate reliably in extreme environmental conditions from -40°C to +125°C, making them suitable for various applications."
              },
              {
                icon: "fa-clock",
                title: "Long Lifespan",
                description: "With up to 8000 hours lifespan at maximum rated temperature, our capacitors ensure long-term reliability and performance."
              },
              {
                icon: "fa-bolt",
                title: "High Ripple Current",
                description: "Designed to handle high ripple currents, making them ideal for power supply and industrial applications."
              },
              {
                icon: "fa-ruler-combined",
                title: "Custom Solutions",
                description: "We offer specialized capacitor designs tailored to your specific requirements and application needs."
              },
              {
                icon: "fa-certificate",
                title: "Quality Assurance",
                description: "Our manufacturing processes are ISO certified, ensuring consistent quality and reliability in every product."
              },
              {
                icon: "fa-truck-fast",
                title: "Global Supply Chain",
                description: "Efficient production and logistics network for prompt delivery to customers worldwide."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <i className={`fa-solid ${feature.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Specifications */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Specifications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our aluminum electrolytic capacitors offer exceptional performance across multiple parameters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fa-temperature-high",
                title: "Temperature Range",
                value: "-40°C to +125°C"
              },
              {
                icon: "fa-clock",
                title: "Maximum Lifespan",
                value: "8000 Hours"
              },
              {
                icon: "fa-bolt",
                title: "Voltage Range",
                value: "6.3V to 500V"
              },
              {
                icon: "fa-microchip",
                title: "Capacitance Range",
                value: "10μF to 680,000μF"
              }
            ].map((spec, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl p-8 shadow-md border border-gray-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, backgroundColor: "#1f2937" }}
              >
                <div className="text-4xl text-blue-400 mb-6 mx-auto">
                  <i className={`fa-solid ${spec.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-300 mb-3">{spec.title}</h3>
                <p className="text-4xl font-bold text-blue-400">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20electronics%20manufacturing%20factory%20interior&sign=cc39d3ff6271011be088045635cd36b8" 
                alt="Huayu Electronics Manufacturing Facility" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Advanced Manufacturing</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our state-of-the-art manufacturing facility in Nantong spans over 50,000 square meters and is equipped with the latest automated production lines.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Automated Production Lines",
                    description: "Advanced machinery ensures consistent quality and high efficiency in manufacturing."
                  },
                  {
                    title: "Stringent Quality Control",
                    description: "Comprehensive testing at every stage of production guarantees reliability."
                  },
                  {
                    title: "Continuous Innovation",
                    description: "Our R&D team constantly works on developing new technologies and improving existing products."
                  },
                  {
                    title: "Sustainable Practices",
                    description: "We are committed to environmentally friendly manufacturing processes and materials."
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
                    <div className="text-blue-600 text-xl mt-1"><i className="fa-solid fa-check-circle"></i></div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We hold various international certifications that demonstrate our commitment to quality and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "ISO 9001",
                description: "Quality Management System"
              },
              {
                name: "ISO 14001",
                description: "Environmental Management System"
              },
              {
                name: "RoHS",
                description: "Restriction of Hazardous Substances"
              },
              {
                name: "REACH",
                description: "Registration, Evaluation, Authorization and Restriction of Chemicals"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-certificate text-3xl text-blue-600"></i>
                </div>
                <h3 className="font-bold text-gray-800 text-xl mb-3">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Capacitor Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our aluminum electrolytic capacitors power a wide range of industries and applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "fa-plug",
                title: "Power Supplies"
              },
              {
                icon: "fa-industry",
                title: "Industrial Equipment"
              },
              {
                icon: "fa-lightbulb",
                title: "Lighting Systems"
              },
              {
                icon: "fa-tv",
                title: "Consumer Electronics"
              },
              {
                icon: "fa-car",
                title: "Automotive Electronics"
              },
              {
                icon: "fa-server",
                title: "Telecommunications"
              },
              {
                icon: "fa-heartbeat",
                title: "Medical Devices"
              },
              {
                icon: "fa-solar-system",
                title: "Renewable Energy"
              }
            ].map((app, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-blue-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8, 
                  backgroundColor: "#3b82f6",
                  color: "white",
                  borderColor: "#3b82f6"
                }}
              >
                <div className="text-4xl text-blue-600 mb-6 mx-auto" whileHover={{ color: "white" }}>
                  <i className={`fa-solid ${app.icon}`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800" whileHover={{ color: "white" }}>{app.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from some of our satisfied clients who have been working with us for years.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Huayu Electronics has been our trusted capacitor supplier for over 10 years. Their consistent quality and on-time delivery have been crucial to our production schedule.",
                author: "Michael Johnson",
                company: "PowerTech Solutions"
              },
              {
                quote: "We appreciate the technical expertise and customized solutions provided by Huayu. Their capacitors have significantly improved the reliability of our industrial equipment.",
                author: "Sarah Chen",
                company: "Industrial Automation Inc."
              },
              {
                quote: "As a manufacturer of high-end audio equipment, we require capacitors of the highest quality. Huayu's products have consistently met our stringent requirements.",
                author: "David Rodriguez",
                company: "Premium Audio Systems"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl text-blue-100 mb-6">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <p className="text-gray-600 mb-8 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <i className="fa-solid fa-user text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Discuss Your Capacitor Needs?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Contact our team of experts to find the perfect aluminum electrolytic capacitor solution for your application.
            </p>
             <div className="flex flex-wrap justify-center gap-6">
               <a 
                 href="/contact" 
                 className="inline-block px-10 py-4 bg-white text-blue-700 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg"
               >
                 Get a Quote for Capacitors
               </a>
               <a 
                 href="/aluminum-electrolytic-capacitors" 
                 className="inline-block px-10 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all text-lg"
               >
                 View Aluminum Electrolytic Capacitors
               </a>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}