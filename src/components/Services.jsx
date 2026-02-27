import { servicesData } from "../assets/assets";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      className="container mx-auto p-15 lg:px-32 w-full overflow-hidden scroll-mt-10" id="Services">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Customer <span
        className="underline underline-offset-4 decoration-1 under font-light">Services</span></h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        We deliver innovative IT solutions tailored to your business, ensuring seamless integration and reliable support
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {servicesData.map((servicesData, index) => (
          <div key={index} className="max-w-75 border border-gray-200 shadow-lg rounded px-8 py-12 text-center">
            <img className="w-20 h-20 rounded-full mx-auto mb-4" src={servicesData.image} alt="Corporate System" />
            <h2 className="text-xl text-gray-700 font-medium">{servicesData.name}</h2>
            <p className="text-gray-600 mt-5">{servicesData.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Services;
