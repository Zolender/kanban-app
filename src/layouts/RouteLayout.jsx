import { Outlet, ScrollRestoration } from "react-router";

const RouteLayout = () => {
    return (
        <div className="antialiased font-sans text-stone-900 bg-[#f1dc8d39] ">
            <ScrollRestoration/>

            <Outlet/>
    
        </div>
    );
}

export default RouteLayout;