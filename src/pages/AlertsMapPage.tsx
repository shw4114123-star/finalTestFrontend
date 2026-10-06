import { useEffect } from "react";
import AlertsMap from "../components/AlertsMap/AlertsMap";
import useFetch from "../hooks/useFetch";
import { useAlertsStore } from "../store/alertsStore";
import AlertsDetails from "../components/AlertsDetails/AlertsDetails";
import "../css/AlertsMapPage.css"

const url = "http://localhost:3000/api/alerts";

export default function AlertsMapPage() {
    const { data } = useFetch(url);
    const alerts = useAlertsStore(s => s.alerts);
    const setAlert = useAlertsStore(s => s.setAlerts)
    const res = data
    console.log(alerts);
    console.log(data);
    
    useEffect(() => {
        if (data) {
            setAlert(res.data)
        }
    }, [data, setAlert]);
    if (!data) return (<h1>...loading</h1>)
    else {
        return (
            <div className="map-page">
                <div className="map">
                    <AlertsMap alerts={alerts} />
                </div>
                <div className="details">
                    <AlertsDetails />
                </div>
            </div>
        )
    }
}
