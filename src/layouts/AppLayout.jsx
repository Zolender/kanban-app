import { useState } from "react";
import { Outlet, useLocation, Link} from "react-router";
import { ChevronDown, ChevronUp, PlusCircle, Settings, Search,LayoutDashboard } from "lucide-react";

const AppLayout = () => {

    const [isCollapsed, setIsCollapsed] = useState(true)
    const location = useLocation()


    const isActive = (path)=> location.pathname == path//so that we get to change the style of active links, it's just an helper


    return (
    <div className="flex bg-stone-50 overflow-hidden h-screen">

        <aside className={`flex flex-col border-r border-stone-200 bg-slate-100 transition-all duration-300 ${isCollapsed? 'w-10': 'w-50'}`}>

        </aside>
    

        <main className="grow overflow-y-auto">
            <div className="p-8 max-w-6xl mx-auto">
                <Outlet/>
            </div>
        </main>

    </div>
);
}

export default AppLayout;