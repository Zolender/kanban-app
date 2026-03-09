import { Link } from "react-router";

const SideBarIcons = ({to, icon, label, collapsed, active}) => {
    return (
        <Link to={to} className={``}>
            <span className="shrink-0">{icon}</span>
            {!collapsed && <span className="font-medium text-sm whitespace-nowrap">{label}</span>}
        </Link>
    );
}

export default SideBarIcons;