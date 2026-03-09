import { Outlet } from "react-router";

const AppLayout = () => {
    return (
    <div className="">
        
        <div className="">sidebar</div>

        <Outlet/>
        
    </div>
);
}

export default AppLayout;