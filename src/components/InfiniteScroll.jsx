import { projectsImg } from "../assets/assets.js";

const duplicated = [...projectsImg, ...projectsImg, ...projectsImg];

const InfiniteScroll = () => {
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-4 w-max"
        style={{ animation: "marquee 20s linear infinite" }}
        onMouseEnter={e => e.currentTarget.style.animationPlayState = "paused"}
        onMouseLeave={e => e.currentTarget.style.animationPlayState = "running"}
      >
        {duplicated.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`image-${index}`}
            className="h-40 w-60 object-cover rounded-lg shrink-0"
          />
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