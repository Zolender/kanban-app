import { useState } from "react";
import { Outlet, useLocation, Link} from "react-router";
import {PanelLeftOpen , PanelLeftClose, PlusCircle, Settings, Search,LayoutDashboard, icons } from "lucide-react";
import SideBarIcons from "../components/SideBarIcons";

const AppLayout = () => {

    const [isCollapsed, setIsCollapsed] = useState(false)
    const location = useLocation()


    const isActive = (path)=> location.pathname == path//so that we get to change the style of active links, it's just an helper


    return (
    <div className="flex bg-stone-50 overflow-hidden h-screen">

        <aside className={`flex flex-col border-r border-stone-200 bg-slate-100 transition-all duration-300 ${isCollapsed? 'w-15': 'w-40'}`}>
            <div className="h-16 flex items-center justify-between p-4 border-b border-stone-500">
                {!isCollapsed && <span className="font-mono font-bold tracking-tighter text-lg">Z_K</span>}
                <button onClick={()=>setIsCollapsed(!isCollapsed)} className="p-1 hover:bg-stone-100 rounded-md text-stone-400 hover:text-stone-900 transition-colors duration-200 hover:cursor-pointer">
                    {isCollapsed? <PanelLeftOpen size={22}/>: <PanelLeftClose size={22}/>}
                </button>
            </div>

            <nav className="">
                <SideBarIcons to={'/boards'} icon={<LayoutDashboard size={22}/>} collapsed={isCollapsed} active={isActive('/boards')} label='My boards'/>
            </nav>
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