import { Icon } from "@iconify/react";
import logo from "../assets/Warhammer-logo.jpg"
import bgImage from "../assets/assets_task_01k5f7k65afxk91wged91w71sm_1758226794_img_1.webp"
import { useState } from "react";
import bglogo from "../assets/assets_task_01k5ffy5f4fhpvf2j1g9sh01cq_1758235525_img_1.webp"
export const LoginPage = () => {
    const[showPassword, setShowPassWord] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassWord(!showPassword)
    };
    return (
    <div className="flex flex-col h-screen w-full">
            { /* 🔹 Sección superior (una sola) */}
            <section className="flex bg-black text-white items-center justify-center ">
                <img src={bglogo} className="h-20 w-25" />
                <span className="text-4xl font-bold text-[#A57719] p-3">
                        Warhammer Social
                       </span>
            </section>
        <main className="flex flex-1 w-full">
            {/*lado izquierdo*/}
            <section className="relative hidden md:flex md:w-1/2 flex-col justify-center items-center text-white overflow-hidden bg-center bg-no-repeat bg-cover"style={{backgroundImage:`url(${bgImage})`}}>
                <div className="px-8 ">
                    <div className="flex items-center gap-1 justify-center  ">
                       <img src={logo} className="h-10 w-15"/>
                       <span className="text-4xl font-bold text-white p-3">
                        Warhammer 40000
                       </span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-3xl font-semibold mb-2 p-3">
                            Unete al lejano futuro del milenio 40
                        </span>
                        <span>
                            En el oscuro futuro del milenio 40 solo existe la guerra
                        </span>
                    </div>
                </div>
            </section>

            {/*lado derecho - formulario*/}
            <section className="bg-[#65686F] w-full md:w-1/2 flex items-center justify-center px-6 md:px-16 py-8">
                <div className="w-full max-w-md">
                    <h1 className="text-2xl font-medium mb-6 text-center">
                        INICIAR SESION <span className="text-white text xl">(Modo invitado)</span>
                    </h1>
                    <form>
                        <div className="mb-4">
                            <input placeholder="Email" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00aff0]" />
                        </div>
                        <div className="relative mb-4">
                            <input placeholder="Password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00aff0]" />
                            <button type="button" className="absolute top-1/3 right-5 cursor-pointer" onClick={togglePasswordVisibility}>
                                <Icon icon={showPassword?"mdi:eye-off":"mdi:eye"}/>
                            </button>
                        </div>
                        <button type="submit" className="w-full bg-gray-200 text-gray-500 font-medium py-3 rounde-full hover:bg-[#00AFF0] transition duration-200 cursor pointer hover:text-white">
                            INICIAR SESION
                        </button>
                    </form>
                    <div className="mt-4 text-xs text-center">
                        Al iniciar sesion y usar WarhammerSocial, aceptas nuestros {"  "} <a href="#" className="text-amber-300">
                            terminos de servicio
                        </a> {"  "} , {"  "} <a href="#" className="text-amber-300">Politicas de privacidad</a> {" "} y confirmas que tienes al menos 18 años
                    </div>
                    <div className="mt-6 text-center">
                        <a href="#" className="text-amber-300 text-sm"> ¿Has olvidado tu contraseña?</a>
                        <div className="mt-1">
                            <a href="#" className="text-amber-300 text-sm" >Registrate</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>    
    );
};