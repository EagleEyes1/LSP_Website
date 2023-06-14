import { Auth } from "../utils/Auth"
import { Outlet, Navigate } from "react-router-dom"

export default function ProtectedRoute() {
    const { display_name, token } = Auth.isAuthorization()

    if (!token) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}