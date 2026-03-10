import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Parent from "./ParentLogo";
import InfiniteScroll from "./InfiniteScroll";
import { projectsData } from "../assets/assets";

const Projects = () => {
    const [cardsToShow, setCardsToShow] = useState(1);
    const [offset, setOffset] = useState(0);
    const offsetRef = useRef(0);
    const containerRef = useRef(null);

    const getMaxOffset = () => {
        if (!containerRef.current) return 0;
        const cardWidth = containerRef.current.offsetWidth;
        const gap = 32;
        const totalWidth = projectsData.length * cardWidth + (projectsData.length - 1) * gap;
        return totalWidth - cardWidth;
    };

    const clampOffset = (val) => Math.max(0, Math.min(val, getMaxOffset()));

    // Trackpad / mouse wheel horizontal scroll
    const handleWheel = (e) => {
        const horizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
        if (!horizontal) return;
        e.preventDefault();
        const newOffset = clampOffset(offsetRef.current + e.deltaX);
        offsetRef.current = newOffset;
        setOffset(newOffset);
    };

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        el.addEventListener("wheel", handleWheel, { passive: false });
        return () => el.removeEventListener("wheel", handleWheel);
    }, []);

    // Touch
    const startX = useRef(null);
    const isDragging = useRef(false);

    const handleTouchStart = (e) => {
        startX.current = e.targetTouches[0].clientX;
        isDragging.current = true;
    };
    const handleTouchMove = (e) => {
        if (!isDragging.current) return;
        const delta = startX.current - e.targetTouches[0].clientX;
        startX.current = e.targetTouches[0].clientX;
        const newOffset = clampOffset(offsetRef.current + delta);
        offsetRef.current = newOffset;
        setOffset(newOffset);
    };
    const handleTouchEnd = () => {
        isDragging.current = false;
    };

    // Mouse drag
    const mouseStartX = useRef(null);
    const isMouseDragging = useRef(false);

    const handleMouseDown = (e) => {
        mouseStartX.current = e.clientX;
        isMouseDragging.current = true;
    };
    const handleMouseMove = (e) => {
        if (!isMouseDragging.current) return;
        const delta = mouseStartX.current - e.clientX;
        mouseStartX.current = e.clientX;
        const newOffset = clampOffset(offsetRef.current + delta);
        offsetRef.current = newOffset;
        setOffset(newOffset);
    };
    const handleMouseUp = () => { isMouseDragging.current = false; };
    const handleMouseLeave = () => { isMouseDragging.current = false; };

    useEffect(() => {
        const updateCardsShow = () => {
            setCardsToShow(window.innerWidth >= 1024 ? projectsData.length : 1);
        };
        updateCardsShow();
        window.addEventListener("resize", updateCardsShow);
        return () => window.removeEventListener("resize", updateCardsShow);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="container mx-auto py-4 px-6 md:px-20 lg:px-32 my-10 w-full overflow-hidden scroll-mt-28"
            id="Projects"
        >
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
                Projects{" "}
                <span className="underline underline-offset-4 decoration-1 font-light">
                    Completed
                </span>
            </h1>
            <p className="text-center text-gray-500 max-w-80 mx-auto mb-4">
                A showcase of our commitment to quality, creativity, and performance
            </p>
            <div className="flex justify-center m-5">
                <Parent />
            </div>

            <div
                ref={containerRef}
                className="overflow-hidden cursor-pointer active:cursor-pointer select-none"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className="flex gap-8"
                    style={{
                        transform: `translateX(-${offset}px)`,
                        transition: "transform 0.05s linear",
                    }}
                >
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="max-w-75 border border-gray-200 shadow-lg rounded py-5 text-center relative shrink-0"
                        >
                            <img
                                className="w-20 h-20 rounded-full mx-auto mb-2"
                                src={project.image}
                                alt={project.title}
                                draggable={false}
                            />
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
    );
};

export default Projects;