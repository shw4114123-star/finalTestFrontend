import { useState } from "react"
import Users from "../components/Users/Users"

const url = "http://localhost:3000/api/auth"
export default function UsersPage() {
    const [data , setData] =useState()
    const token = localStorage.getItem("TOKEN")
    const load = async() => {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": token
            }
        })
        const data = await response.json()
        setData(data)
        console.log(data);
    }
    load()
    return (
        <div>
            {data.map((user) => (
                <Users key={user._id} {...user}/>
            ))}
        </div>
    )
}
