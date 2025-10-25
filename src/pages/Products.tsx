import { useState, useEffect } from 'react';
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
      staggerChildren: 0.1
    }
  }
};

// Product data
const productSeries = [
  {
    id: 'snap-in',
    name: 'Snap-in Capacitors',
    description: 'High-performance snap-in aluminum electrolytic capacitors with excellent temperature stability and long service life, suitable for various industrial applications.',
    image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Snap-in%20Aluminum%20Electrolytic%20Capacitors&sign=d803deb7d48fc91f04899fa1802ff6ba',
    models: [
      { 
        name: 'CD292', 
        tempRange: '-40°C to +105°C', 
        lifespan: '2000 hours at 105°C', 
        capacitanceRange: '10μF to 15000μF', 
        voltageRange: '6.3V to 450V' 
      },
      { 
        name: 'CD293', 
        tempRange: '-40°C to +105°C', 
        lifespan: '3000 hours at 105°C', 
        capacitanceRange: '10μF to 22000μF', 
        voltageRange: '6.3V to 450V' 
      },
      { 
        name: 'CD294', 
        tempRange: '-40°C to +105°C', 
        lifespan: '5000 hours at 105°C', 
        capacitanceRange: '10μF to 33000μF', 
        voltageRange: '6.3V to 450V' 
      },
      { 
        name: 'CD295', 
        tempRange: '-40°C to +105°C', 
        lifespan: '8000 hours at 105°C', 
        capacitanceRange: '10μF to 47000μF', 
        voltageRange: '6.3V to 450V' 
      },
      { 
        name: 'CD296', 
        tempRange: '-40°C to +125°C', 
        lifespan: '2000 hours at 125°C', 
        capacitanceRange: '10μF to 15000μF', 
        voltageRange: '6.3V to 350V' 
      },
      { 
        name: 'CD297', 
        tempRange: '-40°C to +125°C', 
        lifespan: '3000 hours at 125°C', 
        capacitanceRange: '10μF to 22000μF', 
        voltageRange: '6.3V to 350V' 
      },
      { 
        name: 'CD298', 
        tempRange: '-40°C to +125°C', 
        lifespan: '5000 hours at 125°C', 
        capacitanceRange: '10μF to 33000μF', 
        voltageRange: '6.3V to 350V' 
      }
    ]
  },
  {
    id: 'screw',
    name: 'Screw Terminal Capacitors',
    description: 'Heavy-duty screw terminal aluminum electrolytic capacitors designed for high voltage and high ripple current applications in industrial equipment and power supplies.',
    image: 'https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Screw%20Terminal%20Aluminum%20Electrolytic%20Capacitors&sign=49bb3521b24440ce93b356da0901df40',
    models: [
      { 
        name: 'CD135', 
        tempRange: '-40°C to +85°C', 
        lifespan: '2000 hours at 85°C', 
        capacitanceRange: '470μF to 220000μF', 
        voltageRange: '10V to 500V' 
      },
      { 
        name: 'CD136', 
        tempRange: '-40°C to +105°C', 
        lifespan: '2000 hours at 105°C', 
        capacitanceRange: '470μF to 220000μF', 
        voltageRange: '10V to 500V' 
      },
      { 
        name: 'CD13L', 
        tempRange: '-40°C to +105°C', 
        lifespan: '3000 hours at 105°C', 
        capacitanceRange: '470μF to 220000μF', 
        voltageRange: '10V to 500V' 
      },
      { 
        name: 'CD92', 
        tempRange: '-40°C to +85°C', 
        lifespan: '2000 hours at 85°C', 
        capacitanceRange: '1000μF to 680000μF', 
        voltageRange: '10V to 500V' 
      },
      { 
        name: 'CD92H', 
        tempRange: '-40°C to +105°C', 
        lifespan: '2000 hours at 105°C', 
        capacitanceRange: '1000μF to 680000μF', 
        voltageRange: '10V to 500V' 
      },
      { 
        name: 'CD92L', 
        tempRange: '-40°C to +105°C', 
        lifespan: '3000 hours at 105°C', 
        capacitanceRange: '1000μF to 680000μF', 
        voltageRange: '10V to 500V' 
      },
      { 
        name: 'CD13N', 
        tempRange: '-40°C to +85°C', 
        lifespan: '2000 hours at 85°C', 
        capacitanceRange: '470μF to 330000μF', 
        voltageRange: '10V to 500V' 
      },
      { 
        name: 'CD13NH', 
        tempRange: '-40°C to +105°C', 
        lifespan: '2000 hours at 105°C', 
        capacitanceRange: '470μF to 330000μF', 
        voltageRange: '10V to 500V' 
      },
      { 
        name: 'CD13HL', 
        tempRange: '-40°C to +105°C', 
        lifespan: '3000 hours at 105°C', 
        capacitanceRange: '470μF to 330000μF', 
        voltageRange: '10V to 500V' 
      }
    ]
  }
];

export default function Products() {
  const [selectedSeries, setSelectedSeries] = useState(productSeries[0].id);
  const currentSeries = productSeries.find(series => series.id === selectedSeries);
  


  // Handle PDF download
  const handleDownloadPDF = (modelName: string) => {
    // In a real application, this would link to an actual PDF file
    console.log(`PDF specification for ${modelName} downloaded.`);
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
              Aluminum Electrolytic Capacitors
            </motion.h1>
            <motion.div variants={fadeInUp} className="w-20 h-1 bg-blue-600 mx-auto mb-6"></motion.div>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality capacitors designed for reliability and performance in various electronic applications.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Series Selection */}
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {productSeries.map((series) => (
              <motion.button
                key={series.id}
                className={`px-6 py-3 rounded-lg text-lg font-medium transition-all ${
                  selectedSeries === series.id 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedSeries(series.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {series.name}
              </motion.button>
            ))}
          </div>

          {/* Series Details */}
          <motion.div
            key={selectedSeries}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          >
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{currentSeries?.name}</h2>
              <p className="text-lg text-gray-600 mb-6">{currentSeries?.description}</p>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-green-500 text-lg"></i>
                    <span className="text-gray-700">High ripple current capability</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-green-500 text-lg"></i>
                    <span className="text-gray-700">Wide operating temperature range</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-green-500 text-lg"></i>
                    <span className="text-gray-700">Long service life</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-green-500 text-lg"></i>
                    <span className="text-gray-700">RoHS compliant</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-green-500 text-lg"></i>
                    <span className="text-gray-700">Various capacitance and voltage ratings</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
                   <img 
                     src={currentSeries?.image} 
                     alt={`HUAYU ${currentSeries?.name} for Industrial Applications`} 
                     className="rounded-xl shadow-xl w-full h-auto"
                     loading="lazy"
                   />
            </div>
          </motion.div>

            {/* Models Table */}
             <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="px-6 py-4 font-bold text-gray-800 border-b-2 border-gray-200">Series</th>
                      <th className="px-6 py-4 font-bold text-gray-800 border-b-2 border-gray-200">Features</th>
                      <th className="px-6 py-4 font-bold text-gray-800 border-b-2 border-gray-200">Temperature Range</th>
                      <th className="px-6 py-4 font-bold text-gray-800 border-b-2 border-gray-200">Lifespan</th>
                      <th className="px-6 py-4 font-bold text-gray-800 border-b-2 border-gray-200">Capacitance Range</th>
                      <th className="px-6 py-4 font-bold text-gray-800 border-b-2 border-gray-200">Voltage Range</th>
                      <th className="px-6 py-4 font-bold text-gray-800 border-b-2 border-gray-200">PDF Spec</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentSeries?.models.map((model, index) => (
                      <motion.tr 
                        key={model.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                        whileHover={{ backgroundColor: '#f0f9ff' }}
                      >
                        <td className="px-6 py-4 font-medium text-blue-700 border-b border-gray-200">{model.name}</td>
                        <td className="px-6 py-4 text-gray-700 border-b border-gray-200">
                          {model.name.includes('CD29') ? (
                            selectedSeries === 'snap-in' ? (
                              <ul className="list-disc list-inside text-sm space-y-1">
                                <li>High ripple current</li>
                                <li>Compact design</li>
                                <li>PCB mounting</li>
                                <li>{parseInt(model.lifespan) > 5000 ? 'Ultra long life' : 'Long life'}</li>
                              </ul>
                            ) : (
                              <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Screw terminal connection</li>
                                <li>High voltage capability</li>
                                <li>Large capacitance</li>
                                <li>Industrial grade</li>
                              </ul>
                            )
                          ) : (
                            <ul className="list-disc list-inside text-sm space-y-1">
                              <li>Screw terminal connection</li>
                              <li>High voltage capability</li>
                              <li>Large capacitance</li>
                              <li>Industrial grade</li>
                            </ul>
                          )}
                        </td>
                        <td className="px-6 py-4 text-gray-700 border-b border-gray-200">{model.tempRange}</td>
                        <td className="px-6 py-4 text-gray-700 border-b border-gray-200">{model.lifespan}</td>
                        <td className="px-6 py-4 text-gray-700 border-b border-gray-200">{model.capacitanceRange}</td>
                        <td className="px-6 py-4 text-gray-700 border-b border-gray-200">{model.voltageRange}</td>
                        <td className="px-6 py-4 border-b border-gray-200">
                          <motion.button
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleDownloadPDF(model.name)}
                          >
                            <i className="fa-solid fa-download"></i>
                            <span>Download</span>
                          </motion.button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Typical Applications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our aluminum electrolytic capacitors are used in a wide range of electronic equipment and systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fa-plug",
                title: "Power Supplies",
                description: "Switch mode power supplies, AC/DC converters"
              },
              {
                icon: "fa-industry",
                title: "Industrial Equipment",
                description: "Motor drives, control systems, automation"
              },
              {
                icon: "fa-lightbulb",
                title: "Lighting",
                description: "LED drivers, ballasts, lighting control systems"
              },
              {
                icon: "fa-tv",
                title: "Consumer Electronics",
                description: "Home appliances, audio equipment, HVAC systems"
              },
              {
                icon: "fa-car",
                title: "Automotive",
                description: "Vehicle electronics, charging systems"
              },
              {
                icon: "fa-server",
                title: "Telecommunications",
                description: "Base stations, network equipment, data centers"
              },
              {
                icon: "fa-heartbeat",
                title: "Medical Devices",
                description: "Diagnostic equipment, patient monitoring systems"
              },
              {
                icon: "fa-solar-system",
                title: "Renewable Energy",
                description: "Solar inverters, wind power systems"
              }
            ].map((app, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl text-blue-600 mb-4">
                  <i className={`fa-solid ${app.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Need Technical Support?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of experienced engineers is ready to assist you with product selection, technical specifications, and application support.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Contact Our Technical Team
            </a>
          </motion.div>
        </div>
      </section>
       {/* Technical Knowledge Section for SEO */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Aluminum Electrolytic Capacitor Technical Guide</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn more about aluminum electrolytic capacitors, their applications, and how to select the right capacitor for your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">How to Select the Right Aluminum Electrolytic Capacitor</h3>
              <p className="text-gray-600 mb-4">
                Selecting the appropriate aluminum electrolytic capacitor is crucial for ensuring optimal performance and reliability in your electronic circuits. As a professional capacitor manufacturer, we recommend considering the following key factors:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                  <span className="text-gray-700"><strong>Voltage Rating:</strong> Always choose a capacitor with a voltage rating higher than the maximum voltage in your circuit to prevent breakdown.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                  <span className="text-gray-700"><strong>Capacitance Value:</strong> Select the capacitance based on the required energy storage and filtering characteristics of your application.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                  <span className="text-gray-700"><strong>Temperature Range:</strong> Ensure the capacitor can operate reliably within the temperature range of your application environment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                  <span className="text-gray-700"><strong>Lifespan Requirements:</strong> Consider the expected operational lifetime and choose a capacitor with a suitable rated lifespan.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                  <span className="text-gray-700"><strong>Ripple Current Handling:</strong> For power supply applications, ensure the capacitor can handle the expected ripple current without overheating.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Common Applications of Aluminum Electrolytic Capacitors</h3>
                <p className="text-gray-600 mb-4">
                  Aluminum electrolytic capacitors are widely used in various electronic applications due to their high capacitance-to-volume ratio and relatively low cost.
                </p>
                <p className="text-gray-600 mb-4">
                  As a leading capacitor manufacturer, our products are commonly found in:
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-bolt text-blue-500"></i>
                    <span className="text-gray-700">Power supplies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-microchip text-blue-500"></i>
                    <span className="text-gray-700">Audio equipment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-industry text-blue-500"></i>
                    <span className="text-gray-700">Industrial controls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-lightbulb text-blue-500"></i>
                    <span className="text-gray-700">LED drivers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-car text-blue-500"></i>
                    <span className="text-gray-700">Automotive electronics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-server text-blue-500"></i>
                    <span className="text-gray-700">Telecommunications</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Capacitor Storage and Handling Tips</h3>
                <p className="text-gray-600 mb-4">
                  Proper storage and handling of aluminum electrolytic capacitors can significantly extend their shelf life and ensure optimal performance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-info-circle text-blue-500 mt-1"></i>
                    <span className="text-gray-700">Store capacitors in a cool, dry environment with temperature between 5°C and 35°C and humidity below 70%.</span>
                  </li><li className="flex items-start gap-3">
                    <i className="fa-solid fa-info-circle text-blue-500 mt-1"></i>
                    <span className="text-gray-700">Avoid prolonged storage (more than 12 months). If stored for a long time, reform capacitors before use.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fa-solid fa-info-circle text-blue-500 mt-1"></i>
                    <span className="text-gray-700">Handle capacitors with care to avoid mechanical damage to the case or terminals.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}