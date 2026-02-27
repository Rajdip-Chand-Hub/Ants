import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ComponenetRoutesRoutes from "./components/ComponentRoutes";
import Announcement from "./components/Announcement.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Admin from "./page/Admin";
import ProtectedRoute from "./store/protectedRoute.jsx"

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<ComponenetRoutesRoutes />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App