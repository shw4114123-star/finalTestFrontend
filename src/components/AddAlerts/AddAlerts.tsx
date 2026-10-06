import { useState } from "react"
import "./AddAlert.css";
import { useNavigate } from "react-router";
import { useAlertsStore } from "../../store/alertsStore";

const url = "http://localhost:3000/api/alerts";

export default function AddAlerts() {
    const navigate = useNavigate()
    const addAlert = useAlertsStore(s => s.addAlerts)
    const [displayName, setDisplayName] = useState("")
    const [description, setDescriptoin] = useState("")
    const [priority, setPriority] = useState("Low")
    const [arena, setArena] = useState("North")
    const [status, setStatus] = useState("Active")
    const [lon, setLon] = useState("")
    const [lat, setLat] = useState("")
    const body = { displayName, description, priority, arena, status, lat: Number(lat), lon: Number(lon) }
    const handel = async () => {
        if (displayName.length === 0) return (alert("enter displayName"))
        if (description.length === 0) return (alert("enter description"))
        if (lon.length === 0) return (alert("enter lon"))
        if (lat.length === 0) return (alert("enter lat"))
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body)
        })
        const data = await response.json()
        if (!data) { return alert("No data available") }
        if (data.success === false) { alert(data.message) }
        if (data.success === true) {
            addAlert(data.data)
            navigate("/map")
        }
    }
    return (
        <div className="add-alert">
            <h2 className="add">Add alert</h2>
            <label className="displayName">displayName:
                <input className="input" type="text" placeholder="" value={displayName} onChange={e => setDisplayName(e.target.value)} />
            </label>
            <label className="description">description:
                <input className="input" type="text" placeholder="" value={description} onChange={e => setDescriptoin(e.target.value)} />
            </label>
            <label className="priority">priority:
                <form>
                    <select value={priority} onChange={e => setPriority(e.target.value)}>
                        <option value={"Low"}>Low</option>
                        <option value={"Medium"}>Medium</option>
                        <option value={"High"}>High</option>
                        <option value={"Critical"}>Critical</option>
                    </select>
                </form>
            </label>
            <label className="arena">arena:
                <form>
                    <select value={arena} onChange={e => setArena(e.target.value)}>
                        <option value={"North"}>North</option>
                        <option value={"South"}>South</option>
                        <option value={"Center"}>Center</option>
                    </select>
                </form>
            </label>
            <label className="status">status:
                <form>
                    <select value={status} onChange={e => setStatus(e.target.value)}>
                        <option value={"Active"}>Active</option>
                        <option value={"Handled"}>Handled</option>
                    </select>
                </form>
            </label>
            <label className="lon">longitude:
                <input className="input" type="number" value={lon} onChange={e => setLon(e.target.value)} />
            </label>
            <label className="lat">latitude:
                <input className="input" type="number" value={lat} onChange={e => setLat(e.target.value)} />
            </label>
            <button type="submit" className="button" onClick={handel}>submit</button>
        </div >
    )
}
