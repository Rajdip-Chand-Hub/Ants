import { useSelector } from "react-redux";

const Announcement = () => {
  const announcements = useSelector((state) => state.announcement.value);
  const visibleAnnouncements = announcements.filter((item) => item.toShow);

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-10 py-10">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-bold text-2xl sm:text-4xl mb-2">
          Announcements
        </h1>
        <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto py-5">
          Stay updated with the latest job openings and internship opportunities at ANTS.
        </p>
        <div className="mt-3 flex justify-center gap-3">
          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
            {visibleAnnouncements.filter(a => a.position === "Job").length} Jobs
          </span>
          <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
            {visibleAnnouncements.filter(a => a.position === "Intern").length} Internships
          </span>
        </div>
      </div>

      {/* Empty State */}
      {visibleAnnouncements.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-28 text-center">
          <div className="text-6xl mb-4">📭</div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">No Announcements Yet</h2>
          <p className="text-gray-400 text-sm max-w-sm">
            There are no open positions at the moment. Please check back later.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {visibleAnnouncements.map((item, index) => (
            <section
              key={index}
              className="bg-white flex flex-col w-full p-5 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Top Row — Badge + Position */}
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full
                  ${item.position === "Job"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-purple-100 text-purple-700"}`}>
                  {item.position}
                </span>
                <span className="text-xs text-gray-400">#{index + 1}</span>
              </div>

              {/* Title */}
              <h1 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                {item.title}
              </h1>

              {/* Dates */}
              <div className="flex flex-col gap-0.5 mb-3">
                <p className="text-xs text-gray-400">
                  📅 Announced: <span className="text-gray-600 font-medium">{item.announcementDate}</span>
                </p>
                <p className="text-xs text-gray-400">
                  ⏳ Valid Until: <span className="text-gray-600 font-medium">{item.validDate}</span>
                </p>
              </div>

              {/* Divider */}
              <hr className="border-gray-100 mb-3" />

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                {item.discription}
              </p>

              {/* Apply Button */}
              {/* <a
                href="#Contact"
                className="mt-4 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg transition"
              >
                Apply Now →
              </a> */}
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

export default Announcement;