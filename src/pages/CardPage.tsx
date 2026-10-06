import { useAlertsStore, type Alert } from '../store/alertsStore'
import "../css/CardPage.css"

export default function CardPage() {
    const oneAlert : Alert = useAlertsStore(s => s.alert)
    const alerts: Alert = oneAlert
    return (
        <div className='card-page'>
            <h1 className="alert">Alert</h1>
            <h4 className="displayName-h4">displayName: {alerts.displayName}</h4>
            <h6 className="description">description: {alerts.description}</h6>
            <h5 className="arena">arena:{alerts.arena}</h5>
            <h5 className="priority">priority: {alerts.priority}</h5>
            <h5 className="status-h5">status: {alerts.status}</h5>
            <button className='button-update'>update</button>
        </div>
    )
}
