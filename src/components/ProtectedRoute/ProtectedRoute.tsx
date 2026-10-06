import { Navigate, Outlet } from "react-router"

export default function ProtectedRoute() {
    const token = localStorage.getItem("TOKEN")
    if (!token) return <Navigate to={"/login"} />
    return (
        <div>
            <Outlet />
        </div>
    )
}
