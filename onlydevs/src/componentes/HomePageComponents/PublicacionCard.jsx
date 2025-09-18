import { Icon } from "@iconify/react";
import { PostImageFrame } from "./PostImageFrame";

export const PublicacionCard = () => {
    return (
        <div className="border-b bordeder-gray-500/50 p-4">
            <div className="flex justify-between">
                <div className="flex items-center gap-3">
                       <img src="https://i.redd.it/ta7p8nbpnr481.jpg" className="w-12 h-12 rounded-full object-cover" />
                       <span className="font-bold ">
                        Nombre de usuario
                       </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm whitespace-nowrap">
                        hace 8h
                    </span>
                    <button>
                        <Icon icon="mdi:dots-horizontal" width="24" height="24" />
                    </button>
                </div>
            </div>
            <div className="mt-3">
                <p className="mb-2">Titulo</p>
                <div>
                    <PostImageFrame src={"https://cdn.focus-home.com/fhi-fastforward-admin/custom/space-marine-2/headline.jpg"}/>
                </div>
                <div className="flex justify-between mt-4">
                    <button>
                        <Icon icon={"circum:heart"}className="text-3xl p-1 rounded-full text-gray-400 hover:bg-[rgba(78,184,233,0.2)] cursor-pointer" />
                    </button>
                    <button className="flex items-center gap-2 cursor-pointer">
                        <Icon icon="material-symbols:comment"className="text-3xl p-1 rounded-full text-gray-400 cursor-pointer" />
                        <span className="text-sm text-gray-400">Comentar</span>
                    </button>
                </div>
            </div>
        </div>
    );
};