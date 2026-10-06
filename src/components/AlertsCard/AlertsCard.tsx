import { useNavigate } from "react-router";
import { useAlertsStore, type Alert } from "../../store/alertsStore";
import "./AlertsCard.css"

const url = "http://localhost:3000/api/alerts"

export default function AlertsCard(alerts: Alert) {
    const token = localStorage.getItem("TOKEN")
    const deleteAlert = async () => {
        const response = await fetch(`${url}/${alerts._id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authorization": token
            }
        })
        const data = await response.json()
        if (!data) { return alert("No data available") }
        if (data.success === false) { return alert(data.message) }
        if (data.success === true) {
            window.location.reload()
        }
    }
    const setAlert = useAlertsStore(s => s.setAlert)
    const navigate = useNavigate()
    const handel = () => {
        setAlert(alerts)
        navigate("/card")
    }
    return (
        <div className="card">
            <h1 className="alert">Alert</h1>
            <h4 className="displayName-h4">displayName: {alerts.displayName}</h4>
            <h6 className="description">description: {alerts.description}</h6>
            <h5 className="arena">arena:{alerts.arena}</h5>
            <h5 className="priority">priority: {alerts.priority}</h5>
            <h5 className="status-h5">status: {alerts.status}</h5>
            <div className="buttons">
                <button className="button-details" onClick={handel}>details</button>
                <button className="button-delete" onClick={deleteAlert}>delete</button>
            </div>
        </div>

    )
}
