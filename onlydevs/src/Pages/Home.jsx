import { Icon } from "@iconify/react";
import { HeaderSticky } from "../componentes/HomePageComponents/HeaderSticky";
import { InputPublicar } from "../componentes/HomePageComponents/InputPublicar";
import { PublicacionCard } from "../componentes/HomePageComponents/PublicacionCard";

export const Home = () => {
    return (
        <main className="flex min-h-screen bg-white dark:bg-bg-dark max-w-[1200px] mx-auto">
        <section className="flex flex-col w-full h-screen">
            <article className="flex flex-col h-screen overflow-hidden border border-gray-600 border-t-0 border-b-0 dark:border-gray-600">
                <HeaderSticky/>
                <div className="overflow-y-auto">
                    <InputPublicar/>
                    <PublicacionCard/>
                </div>
                PRINCIPAL</article>
             <article>SIDEBAR DERECHO</article>
        </section>
        </main>
    );
};