import { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {

    const [showModal, setShowModal] = useState(false)

    const AntsInfo = () => {
        return (

            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="w-200 rounded-lg bg-white p-6 shadow-lg">
                    <h1 className="mb-4 text-xl font-semibold text-black">More about   <span className="text-cyan-600 underline">ANTS</span></h1>

                    <p className="mb-6 text-gray-600">
                        Founded in 2015, ANTS has grown into a trusted IT company delivering innovative solutions across industries. 
                        With a focus on teamwork, discipline, and persistence, we create secure, high-performance web, mobile, and 
                        desktop applications tailored to our clients’ needs. Our collaborative approach, combined with modern technologies, 
                        ensures seamless integration, reliable support, and measurable results that help businesses succeed.
                    </p>

                    <button
                        onClick={() => setShowModal(false)}
                        className="ml-auto block rounded bg-red-500 px-4 py-2  text-white hover:bg-red-600"
                    >
                        Close
                    </button>
                </div>
            </div>
        )
    };


    return (
        <motion.div
            initial={{ opacity: 0, x:200 }}
            transition={{ duration: 1}}
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
                            <p className="text-4xl font-medium text-gray-800">12+</p>
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
