import { Link } from "react-router"
import "./Header.css"

export default function Heater() {
    const username = localStorage.getItem("USERNAME")
    const role = localStorage.getItem("ROLE")
    return (
        <div className="header">
            <h2>tzofia</h2>
            <div className="data">
                <h3>name: {username}</h3>
                <h3>role: {role}</h3>
            </div>
            <div className="links">
                <Link to={"/add"}>add alert</Link>
                <Link to={"/map"}>map</Link>
                {/* <Link to={"/users"}>users</Link> */}
                <Link to={"/login"}>log-out</Link>
            </div>
        </div>
    )
}
