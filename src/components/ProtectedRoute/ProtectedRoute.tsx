import { Navigate } from "react-router"
import Lyout from "../../Lyout"

export default function ProtectedRoute() {
    const token = localStorage.getItem("TOKEN")
    if (!token) return <Navigate to={"/login"} />
    return (
        <div>
            <Lyout />
        </div>
    )
}
