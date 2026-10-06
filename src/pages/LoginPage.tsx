import { useState } from "react"
import "../css/LoginPage.css"
import { Link, useNavigate } from "react-router"

const url = "http://localhost:3000/api/auth/login"

export default function LoginPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const body = { email, password }
    const handel = async () => {
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
            localStorage.setItem("TOKEN", data.data.token)
            localStorage.setItem("USERNAME", data.data.userName)
            localStorage.setItem("ROLE", data.data.role)
            navigate("/map")
        }
    }
    return (
        <div className="login">
            <label htmlFor="email">email:</label>
            <input className="email" id="email " type="text" placeholder="" value={email} onChange={e => setEmail(e.target.value)} />
            <label htmlFor="password">password:</label>
            <input className="password" id="password" type="text" placeholder="" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit" onClick={handel}>login</button>
            <Link to={"/"}>Sign-up</Link>
        </div>
    )
}
