import { BtnClose } from "../UI/buttons/BtnClose";
import {useUsuariosStore} from "../../Store/UsuariosStore"

export const FormPost = () => {
    const {dataUsuarioAuth} = useUsuariosStore
    return (
        <main className="fixed z-50 flex items-center justify-center inset-0">
            {/*fondo difuminado*/}
            <div className="absolute inset-0 backdrop-blur-sm cursor-pointer"></div>
                <section className="bg-white relative text-withe w-full max-w-md dark:bg-bg-dark rounded-lg shadow-xl">
                    {/*header*/}
                    <header className="flex items-center justify-between p-4 border-b border-gray-500/40">
                        <h2 className="text-xl font-semibold">Crear Publicacion</h2>
                        <BtnClose/>
                    </header>
                    {/*User info*/}
                    <article>
                        <img className="w-10 h-10 rounded-full mr-3 " src={dataUsuarioAuth?.foto_perfil} alt="" />
                    </article>
                </section>
            
            <span>FormPost</span>
        </main>
    );
};