import { useState } from "react";
import { projectsImg } from "../assets/assets.js";

const duplicated = [...projectsImg, ...projectsImg, ...projectsImg];

const InfiniteScroll = () => {
    const [activeTitle, setActiveTitle] = useState(null);

    return (
        <div className="overflow-hidden w-full">
            <div
                className="flex gap-6 w-max"
                style={{ animation: "marquee 20s linear infinite" }}
                onMouseEnter={e => e.currentTarget.style.animationPlayState = "paused"}
                onMouseLeave={e => { e.currentTarget.style.animationPlayState = "running"; setActiveTitle(null); }}
                onTouchStart={e => e.currentTarget.style.animationPlayState = "paused"}
                onTouchEnd={e => { e.currentTarget.style.animationPlayState = "running"; setActiveTitle(null); }}
                onTouchCancel={e => { e.currentTarget.style.animationPlayState = "running"; setActiveTitle(null); }}
            >
                {duplicated.map((item, index) => (
                    <div
                        key={index}
                        className="relative shrink-0 cursor-pointer"
                        onMouseEnter={() => setActiveTitle(item.title)}
                        onMouseLeave={() => setActiveTitle(null)}
                        onTouchStart={() => setActiveTitle(item.title)}
                        onTouchEnd={() => setActiveTitle(null)}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-20 w-20 object-cover rounded-lg"
                        />

                        <div className={`absolute inset-0 rounded-lg flex items-center justify-center
                            bg-black/60 transition-opacity duration-300
                            ${activeTitle === item.title ? "opacity-100" : "opacity-0"}`}
                        >
                            <p className="text-white text-xs font-semibold text-center px-1">
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
            `}</style>
        </div>
    );
};

export default InfiniteScroll;