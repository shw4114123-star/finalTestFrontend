import { Outlet } from "react-router";
import Heater from "./components/Header/Heater";
import Footer from "./components/Footer/Footer";
import "./index.css"

export default function Lyout() {
    return (
        <div className="all-page">
            <Heater />
            <main className="main">
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}
