import { Navigate } from "react-router-dom"
import { isAdmin } from "./auth.js"

const ProtectedRoute = ({ children }) => {
    if (!isAdmin()) {
        return <Navigate to="/login" replace />
    }
    return children
}

export default ProtectedRoute;