import { Route, Routes } from "react-router";
import AlertsMapPage from "./pages/AlertsMapPage";
import Lyout from "./Lyout";
import AddAlertsPage from "./pages/AddAlertsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CardPage from "./pages/CardPage";
// import UsersPage from "./pages/UsersPage";


export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<Lyout />}>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/map" element={<AlertsMapPage />} />
          <Route path="/add" element={<AddAlertsPage />} />
          <Route path="/card" element={<CardPage/>}/>
          {/* <Route path="/users" element={<UsersPage/>}/> */}
        </Route>
      </Routes>
    </div>
  )
}
