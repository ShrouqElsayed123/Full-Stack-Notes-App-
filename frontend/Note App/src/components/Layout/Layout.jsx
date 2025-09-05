import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
export default function Layout() {
    return (
        <>
            <Navbar />
            <main className="pt-16"> 
                <Outlet />
            </main>
        </>
    );
}
