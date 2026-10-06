import { Route, Routes } from "react-router";
import AlertsMapPage from "./pages/AlertsMapPage";
import AddAlerts from "./components/AddAlerts/AddAlerts";


export default function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<AlertsMapPage />} />
          <Route path="/addAlert" element={<AddAlerts />} />
        </Route>
      </Routes>
    </div>
  )
}
