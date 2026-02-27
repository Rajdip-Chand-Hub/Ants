import { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {

    const [showModal, setShowModal] = useState(false)

    const AntsInfo = () => {
        const [isClosing, setIsClosing] = useState(false);

        const handleClose = () => {
            setIsClosing(true);
            setTimeout(() => setShowModal(false), 300);
        };

        useEffect(() => {
            const handleScroll = () => handleClose();
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);


        return (
            <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}>
                <div className={`relative w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}>

                    {/* Top accent bar */}
                    <div className="h-1.5 w-full bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-600" />

                    {/* Background texture */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`, backgroundSize: '24px 24px' }}
                    />

                    <div className="relative p-8">
                        {/* Header */}
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50">
                                <span className="text-lg font-black text-cyan-600">A</span>
                            </div>
                            <h1 className="text-2xl font-bold text-gray-800">
                                More about <span className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent underline decoration-cyan-400">ANTS</span>
                            </h1>
                        </div>

                        {/* Divider */}
                        <div className="mb-6 h-px bg-linear-to-r from-cyan-100 via-gray-200 to-transparent" />

                        {/* Body */}
                        <p className="mb-8 leading-relaxed text-gray-500">
                            Founded in <span className="font-semibold text-gray-700">2014</span>, ANTS has grown into a trusted IT company delivering innovative solutions across industries.
                            With a focus on <span className="font-semibold text-gray-700">teamwork, discipline, and persistence</span>, we create secure, high-performance web, mobile, and
                            desktop applications tailored to our clients' needs. Our collaborative approach, combined with modern technologies,
                            ensures seamless integration, reliable support, and measurable results that help businesses succeed.
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400">Est. 2014 · Trusted IT Solutions</span>
                            <button
                                onClick={handleClose}
                                className="rounded-xl bg-linear-to-r from-red-500 to-rose-500 px-6 py-2 text-sm font-semibold text-white shadow-md shadow-red-200 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-300 active:scale-95"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="flex flex-col items-center justify-center container mx-auto p-5 mt-10 md:px-20 lg:px-32 
             w-full overflow-hidden scroll-mt-25" id='About'>
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">About   <span className="underline underline-offset-4 decoration-1 under font-light">Our Brand</span></h1>
            <p className="text-gray-500 max-w-80 text-center mb-8">
                Passionate about transforming ideas into powerful and scalable digital solutions</p>

            <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
                <img src={assets.brand_img} className="w-full sm:w-1/2 max-w-lg" alt="" />
                <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
                    <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                        <div>
                            <p className="text-4xl font-medium text-gray-800">10+</p>
                            <p>Years of Excellence</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">40+</p>
                            <p>Projects Completed</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">15+</p>
                            <p>Number of Services</p>
                        </div>
                        <div>
                            <p className="text-4xl font-medium text-gray-800">12+</p>
                            <p>On going Projects</p>
                        </div>
                    </div>
                    <h2 className="font-bold text-3xl text-black mt-15">Why <span className="text-cyan-600">"ANTS" ?</span></h2>
                    <p className="my-4 max-w-lg">
                        “ANTS” represents teamwork, discipline, and persistence. Just like ants,
                        we believe in collaboration, clear communication, and working toward a shared goal.
                        We partner closely with our clients, stay committed to excellence, and
                        never give up until meaningful results are achieved.
                    </p>
                    <button onClick={() => setShowModal(true)} className="bg-cyan-600 text-white hover:bg-cyan-700 px-5 py-2 mt-5 rounded
                    transition-all duration-300 hover:cursor-pointer">Learn More</button>
                    {showModal && <AntsInfo />}
                </div>
            </div>
        </motion.div>
    )
}

export default About;
