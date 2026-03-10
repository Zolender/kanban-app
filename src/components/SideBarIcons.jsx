import { Link } from "react-router";

const SideBarIcons = ({to, icon, label, collapsed, active}) => {
    return (
        <Link to={to} className={`flex items-center ${collapsed? '':"gap-4"} px-3 py-2 rounded-sm transition-all ${active? 'bg-stone-800 text-stone-50 shadow-md shadow-stone-200' : "text-stone-500 hover:bg-stone-100 hover:text-stone-900"}`}>
            <span className="shrink-0">{icon}</span>
            {!collapsed && <span className="font-medium text-sm whitespace-nowrap">{label}</span>}
        </Link>
    );
}

export default SideBarIcons;