import { motion } from 'framer-motion';

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

export default function About() {
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
               About HUAYU Electronics
            </motion.h1>
            <motion.div variants={fadeInUp} className="w-20 h-1 bg-blue-600 mx-auto mb-6"></motion.div>
             <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
              HUA YU - Professional manufacturer of aluminum electrolytic capacitors with over 35 years of industry experience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our History</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 1987, Huayu Electronics has grown from a small local manufacturer to a global supplier of high-quality aluminum electrolytic capacitors.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                For over three decades, we have been committed to innovation, quality, and customer satisfaction, establishing ourselves as a trusted partner in the electronics industry.
              </p>
              <p className="text-lg text-gray-600">
                Our continuous investment in research and development has allowed us to stay at the forefront of capacitor technology, offering cutting-edge solutions to meet the evolving needs of our customers worldwide.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
                   <img 
                     src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Electronic%20components%20factory%20exterior%20modern&sign=26d6a19463dac516f2713e7a401f0f2c" 
                     alt="HUAYU Electronics Aluminum Electrolytic Capacitor Factory Exterior" 
                     className="rounded-xl shadow-lg w-full h-auto"
                     loading="lazy"
                   />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Manufacturing Base</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located in Nantong, Jiangsu Province, our state-of-the-art manufacturing facility spans over 50,000 square meters and employs advanced production technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Equipment",
                description: "Equipped with modern automated production lines for efficient and precise manufacturing",
                image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Modern%20capacitor%20manufacturing%20equipment&sign=33c34f97c45e3a1eaa0da0a39bc9a5c1"
              },
              {
                title: "Quality Control",
                description: "Stringent quality assurance processes at every stage of production",
                image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Electronic%20components%20quality%20control%20lab&sign=66ae5e4f33b23d1891e70c843dde4ab0"
              },
              {
                title: "Research & Development",
                description: "Dedicated R&D center for developing new capacitor technologies and custom solutions",
                image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Electronic%20engineering%20research%20laboratory&sign=2e2c83adc553a6010ce8e980cd59df64"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 overflow-hidden">
                   <img 
                     src={item.image} 
                     alt={`HUAYU Electronics ${item.title}`} 
                     className="w-full h-full object-cover transition-transform hover:scale-105"
                     loading="lazy"
                   />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in the research, development, and production of high-quality aluminum electrolytic capacitors for various applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {[
              {
                icon: "fa-microchip",
                title: "Custom Design",
                description: "Tailor-made capacitor solutions to meet specific customer requirements"
              },
              {
                icon: "fa-temperature-three-quarters",
                title: "Wide Temperature Range",
                description: "Capacitors designed to operate reliably in extreme temperature conditions"
              },
              {
                icon: "fa-clock",
                title: "Long Lifespan",
                description: "High-quality capacitors with extended operational life for critical applications"
              },
              {
                icon: "fa-ruler-combined",
                title: "Various Specifications",
                description: "Comprehensive range of capacitance and voltage ratings to suit diverse needs"
              },
              {
                icon: "fa-certificate",
                title: "Quality Assurance",
                description: "ISO certified manufacturing processes ensuring consistent product quality"
              },
              {
                icon: "fa-truck-fast",
                title: "Prompt Delivery",
                description: "Efficient production and logistics for on-time delivery worldwide"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-4 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-600 text-2xl mt-1 p-3 bg-blue-50 rounded-full">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Certifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We hold various international certifications that demonstrate our commitment to quality and excellence.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
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
                className="bg-white px-6 py-8 rounded-xl shadow-md text-center w-48 h-48 flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl text-blue-600 mb-3"><i className="fa-solid fa-certificate"></i></div>
                <h3 className="font-bold text-gray-800 mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}