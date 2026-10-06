import { useAlertsStore, type Alert } from "../../store/alertsStore";
import AlertsCard from "../AlertsCard/AlertsCard";
import "./AlertsDetails.css"

export default function AlertsDetails() {
    const alerts = useAlertsStore(s => s.alerts)
    console.log(alerts);
    
    return (
        <div className="all-details">
            {alerts.map((alert: Alert) => (
                <AlertsCard key={alert._id} {...alert} />
            ))}
        </div>
    )
}
