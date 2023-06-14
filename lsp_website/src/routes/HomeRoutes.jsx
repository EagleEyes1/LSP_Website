import { Auth } from "../utils/Auth"
import { Outlet, Navigate } from "react-router-dom"
import Logins from "../pages/Logins"

export default function HomeRoutes() {
    const { display_name, token } = Auth.isAuthorization()

    if (token) {
        return <Navigate to="/" replace />
    }

    return <Logins />
}