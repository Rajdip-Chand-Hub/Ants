import { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";
import Parent from "./ParentLogo";
import InfiniteScroll from "./InfiniteScroll";

const Projects = () => {

    const [cunrrentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }

    const prevProject = () => {
        setCurrentIndex((prevIndex => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1))
    }

    useEffect(() => {
        const updateCardsShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(projectsData.length);
            } else {
                setCardsToShow(1)
            }
        };
        updateCardsShow();

        window.addEventListener('resize', updateCardsShow);
        return () => window.removeEventListener('resize', updateCardsShow);
    }, [])


    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="container mx-auto py-4 px-6 md:px-20 lg:px-32 my-10 w-full overflow-hidden scroll-mt-20" id='Projects'>
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Projects  <span className="underline underline-offset-4
            decoration-1 under font-light">Completed</span></h1>
            <p className="text-center text-gray-500 max-w-80 mx-auto mb-4">A showcase of our commitment to
                quality, creativity, and performance</p>
            <div className="flex justify-center">
                <Parent />
            </div>

            <div className="flex justify-end items-center mb-5">
                <button onClick={prevProject} className="p-3 bg-gray-200 rounded mr-2" aria-label="Previous Project">
                    <img src={assets.left_arrow} alt="Previous" />
                </button>
                <button onClick={nextProject} className="p-3 bg-gray-200 rounded mr-2" aria-label="Next Project">
                    <img src={assets.right_arrow} alt="Next" />
                </button>
            </div>

            <div className="overflow-hidden">
                <div className="flex gap-8
                    transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${(cunrrentIndex * 100) / cardsToShow}%)` }}>
                    {projectsData.map((project, index) => (
                        <div key={index} className="max-w-75 border border-gray-200 shadow-lg rounded py-5 text-center relative shrink-0">
                            <img className="w-20 h-20 rounded-full mx-auto mb-2" src={project.image} alt="Corporate System" />
                            <h2 className="text-xl text-gray-700 font-medium">{project.title}</h2>
                            <p className="text-gray-600 mt-2">{project.category}</p>
                            <p className="text-gray-600 mt-2 px-4 mb-5">{project.disc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10 w-full overflow-hidden">
                <InfiniteScroll />
            </div>
        </motion.div>
    )
}

export default Projects;
