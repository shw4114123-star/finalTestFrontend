import { useState } from "react"
import "../css/RegisterPage.css"
import { useNavigate } from "react-router"

const url = "http://localhost:3000/api/auth/register"

export default function RegisterPage() {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("arena_user")
    const [assignedArena, setAssignedArena] = useState("All")
    const body = { userName, email, password, role, assignedArena }
    const handel = async () => {
        if (userName.length === 0) return (alert("enter userName"))
        if (email.length === 0) return (alert("enter email"))
        if (password.length === 0) return (alert("enter password"))
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body)
        })
        const data = await response.json()
        if (!data) { return alert("no data available") }
        if (data.success === false) { alert(data.message) }
        if (data.success === true) {
            navigate("/login")
        }
    }
    return (
        <div className="register">
            <label htmlFor="userName">userName:</label>
            <input id="userName" type="text" placeholder="enter yor name" value={userName} onChange={e => setUserName(e.target.value)} />
            <label className="email" htmlFor="email">email:</label>
            <input id="email" type="text" placeholder="enter your email" value={email} onChange={e => setEmail(e.target.value)} />
            <label className="password" htmlFor="password">password:</label>
            <input id="password" type="text" placeholder="enter a password" value={password} onChange={e => setPassword(e.target.value)} />
            <label className="role" htmlFor="role">role:</label>
            <form>
                <select id="role" value={role} onChange={e => setRole(e.target.value)}>
                    <option value={"admin"}>admin</option>
                    <option value={"arena_user"}>arena_user</option>
                    <option value={"general_user"}>general_user</option>
                </select>
            </form>
            <label className="assignedArena" htmlFor="assignedArena">assignedArena:</label>
            <form>
                <select id="assignedArena" value={assignedArena} onChange={e => setAssignedArena(e.target.value)}>
                    <option value={"All"}>All</option>
                    <option value={"North"}>North</option>
                    <option value={"South"}>South</option>
                    <option value={"Center"}>Center</option>
                </select>
            </form>
            <button type="submit" className="button-register" onClick={handel}>submit</button>
        </div>
    )
}
