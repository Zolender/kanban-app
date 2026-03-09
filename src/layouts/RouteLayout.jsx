import { Outlet, ScrollRestoration } from "react-router";

const RouteLayout = () => {
    return (
        <div className="antialiased font-sans text-stone-900 bg-stone-50 selection:bg-sage-200">
            <ScrollRestoration/>

            <Outlet/>
    
        </div>
    );
}

export default RouteLayout;