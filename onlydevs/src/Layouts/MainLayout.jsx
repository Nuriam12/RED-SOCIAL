import { Outlet } from "react-router-dom";
import { Sidebar } from "../componentes/Sidebar"

export const MainLayout = () => {
    return (
        <main className="flex justify-center h-screen overflow-hidden bg-white dark:bg-bg-dark text-black dark:text-white transition-colors duration-300"> {/*LAYOUT PARTE IZQUIERA*/}
            <section className="flex w-full max-w-[1300px] h-full">
            <Sidebar/>
            <section className="flex-1 px-4 overflow-y-auto h-full">
            <Outlet/>
            </section>
            
            </section>

            
        </main>
    );
};