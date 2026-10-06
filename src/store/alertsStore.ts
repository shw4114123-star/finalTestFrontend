import { create } from "zustand"


interface Alert {
    _id: string,
    displayName: string,
    description: string,
    priority: string
    arena: string,
    status: string,
    lon: number,
    lat: number
}


interface AlertsStore {
    alerts: Alert[],
    setAlerts: (alerts: Alert[]) => void
    addAlerts: (alert: Alert) => void
}

export const useAlertsStore = create<AlertsStore>((set) => ({
    alerts: [],
    setAlerts: (alerts: Alert[]) => set(() => ({alerts})),
    addAlerts: (alert: Alert) => set((s) => ({alerts: [alert, ...s.alerts]}))
}))
