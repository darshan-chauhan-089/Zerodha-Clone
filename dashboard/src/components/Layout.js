import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

function Layout() {
    return ( 
        <div className="position-relative"
        >
            <TopBar />
            <Outlet />
        </div>
    );
}

export default Layout;