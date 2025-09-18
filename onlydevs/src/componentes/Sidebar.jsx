import { NavLink,} from "react-router-dom";
import { Icon } from "@iconify/react";

export const Sidebar = () => {
    const links =[
        {
            label : "Inicio",
            icon:"raphael:home",
            to:"/"
        },
        {
            label : "Notificaciones",
            icon:"ion:notifications",
            to:"/notificaciones"
        },
        {
            label : "Mensajes",
            icon:"tabler:message-2-filled",
            to:"/mensajes"
        },
        {
            label : "Colecciones",
            icon:"ic:baseline-collections",
            to:"/colecciones"
        },
        {
            label : "Suscripciones",
            icon:"stash:subscription-list",
            to:"/suscripciones"
        },
        {
            label : "Añadir tarjeta",
            icon:"bytesize:creditcard",
            to:"/tarjeta"
        },
        {
            label : "Perfil",
            icon:"gg:profile",
            to:"/perfil"
        },       
    ]
    return (
        <div className="h-screen p-2 bg-white dark:bg-bg-dark transition-all duration-300">
            {/*LOGO*/}
            <div>
                ONLYDEVS
            </div>
            {/*logo*/}
            <nav className="flex-1 flex flex-col gap-2 items-center">
            {links.map((item,index)=>{
                return (
                <NavLink key={index} to={item.to}className={({isActive})=>`flex items-center gap-3 gap-2 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-primary/10 dark:hover:text-primary transition-all w-full justify-center justify-start ${
                    isActive ? "text-blue-600 dark:text-red-600":"text-gray-600 dark:text-gray-400"
                }`}>
                <Icon icon={item.icon} width={24} height={24}/> 
                <span>{item.label}</span>   
                </NavLink> )
            }
            )}
            </nav>
        </div>
    );
};