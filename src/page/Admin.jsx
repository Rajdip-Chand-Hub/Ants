import { useSelector, useDispatch } from "react-redux";
import { statusUpdate } from "../feature/keySlice.js";
import { logout } from "../store/auth.js";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const announcements = useSelector((state) => state.announcement.value);

    const handleLogout = () => {
        logout()
        navigate("/")
    }

    return (
        <div className="px-4 sm:px-6 lg:px-10 min-h-screen bg-gray-50">

            {/* Header */}
            <div className="flex items-center justify-between py-8 sm:py-10 border-b border-gray-200 mb-8">
                <h1 className="font-semibold underline underline-offset-4 decoration-1 text-2xl sm:text-3xl">
                    Admin Dashboard
                </h1>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm transition"
                >
                    Logout
                </button>
            </div>

            {/* Stats Summary */}
            <div className="flex gap-4 mb-8">
                <div className="bg-white border border-gray-200 rounded shadow p-4 text-center w-40">
                    <p className="text-2xl font-bold text-green-600">
                        {announcements.filter(a => a.toShow).length}
                    </p>
                    <p className="text-sm text-gray-500">Visible</p>
                </div>
                <div className="bg-white border border-gray-200 rounded shadow p-4 text-center w-40">
                    <p className="text-2xl font-bold text-red-500">
                        {announcements.filter(a => !a.toShow).length}
                    </p>
                    <p className="text-sm text-gray-500">Hidden</p>
                </div>
                <div className="bg-white border border-gray-200 rounded shadow p-4 text-center w-40">
                    <p className="text-2xl font-bold text-blue-600">
                        {announcements.length}
                    </p>
                    <p className="text-sm text-gray-500">Total</p>
                </div>
            </div>

            {/* Announcements Grid */}
            <div className="grid grid-cols-1 mb-8 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {announcements.map((item, index) => (
                    <section
                        key={index}
                        className={`flex flex-col w-full p-4 sm:p-5 border rounded shadow-lg tracking-wide bg-white
                            ${item.toShow ? "border-green-300" : "border-gray-200"}`}
                    >
                        {/* Badge + Toggle */}
                        <div className="flex items-center justify-between mb-3">
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full
                                ${item.position === "Job"
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-purple-100 text-purple-700"}`}>
                                {item.position}
                            </span>
                            <button
                                onClick={() => dispatch(statusUpdate(index))}
                                className={`px-4 py-1.5 rounded text-white text-sm transition
                                    ${item.toShow
                                        ? "bg-green-600 hover:bg-green-700"
                                        : "bg-red-500 hover:bg-red-600"}`}
                            >
                                {item.toShow ? "Visible ✅" : "Hidden ❌"}
                            </button>
                        </div>

                        <h1 className="text-base sm:text-lg font-semibold">
                            {item.title}
                        </h1>

                        {/* Dates */}
                        <div className="mt-2 text-xs text-gray-400 space-y-0.5">
                            <p>📅 Announced: <span className="text-gray-600">{item.announcementDate ?? "—"}</span></p>
                            <p>⏳ Valid Until: <span className="text-gray-600">{item.validDate ?? "—"}</span></p>
                        </div>

                        <h2 className="mt-3 font-semibold text-sm underline underline-offset-2">
                            Description
                        </h2>
                        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                            {item.discription}
                        </p>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Admin;