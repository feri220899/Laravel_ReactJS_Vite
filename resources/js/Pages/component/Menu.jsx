import { Head, Link, usePage } from "@inertiajs/react";
import { FaHome, FaFilter} from "react-icons/fa";

function Menu({ expanded, onMenuItemClick  }) {
    const { url } = usePage();
    const menuItems = [
        { to: "/", icon: <FaHome />, label: "Index" },
        { to: "/home", icon: <FaFilter />, label: "Home" },
    ];
    const isActive = (menuItem) => {
        return menuItem.to === url;
    };
    return (
        <div>
            {/* MENU SIDEBAR */}
            {menuItems.map((menuItem, index) => (
                <li key={index}>
                    <Link
                        href={menuItem.to}
                        className={`relative flex items-center ${expanded ? 'md:py-2 py-3 md:px-2 px-5' : 'py-3 px-5'} my-3 rounded-md cursor-pointer transition-colors
                        ${isActive(menuItem) ? 'bg-gradient-to-tr from-slate-100 to-indigo-100 text-black font-bold font-medium font-medium text-black' : 'hover:bg-indigo-50 hover:text-black text-white font-bold'}}`}>
                        {menuItem.icon} <span className={expanded ? "md:w-52 w-0 ml-3 md:inline hidden" : "hidden"}>{menuItem.label}</span>
                    </Link >
                </li>
            ))}
        </div>
    );
}

export default Menu;
