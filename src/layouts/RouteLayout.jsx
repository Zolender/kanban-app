import { Outlet, ScrollRestoration } from "react-router";

const RouteLayout = () => {
    return (
        <div className="antialiased font-sans text-stone-900 bg-[#e9ba0d4b] ">
            <ScrollRestoration/>

            <Outlet/>
    
        </div>
    );
}

export default RouteLayout;