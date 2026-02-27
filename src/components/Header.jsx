import officeImg from "../assets/office-img-4.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative"
      style={{ backgroundImage: `url(${officeImg})` }}
      id="Header"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="relative z-10 mt-30 container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        {/* Tag line */}
        <motion.span
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="inline-block bg-blue-500/30 border border-blue-400 text-blue-200 text-xs sm:text-sm px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase"
        >
          Trusted IT Partner Since 2015
        </motion.span>

        {/* Main Heading */}
        <h2 className="text-5xl sm:text-6xl md:text-[72px] font-bold max-w-3xl mx-auto leading-tight">
          We Deliver <span className="text-blue-400">High Quality</span> IT Solutions
        </h2>

        {/* Sub Heading */}
        <h3 className="text-lg sm:text-2xl pt-4 text-gray-300 max-w-xl mx-auto">
          Empowering Businesses Through Technology — from Web to Mobile to Desktop.
        </h3>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex justify-center gap-8 sm:gap-16 mt-10 text-center"
        >
          <div>
            <p className="text-3xl font-bold text-blue-400">10+</p>
            <p className="text-xs sm:text-sm text-gray-300">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-400">12+</p>
            <p className="text-xs sm:text-sm text-gray-300">Projects Done</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-400">15+</p>
            <p className="text-xs sm:text-sm text-gray-300">Services</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 mt-12">
          <a
            href="#Projects"
            className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            View Projects
          </a>
          <a
            href="#Contact"
            className="bg-cyan-600 hover:bg-cyan-700 px-8 py-3 rounded-lg transition duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-16 flex flex-col items-center text-gray-300 text-xs gap-1"
        >
          <span>Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Header;