import users from "@/services/utilsTest/profile";
import { ArrowRightLeft, Bell, ShoppingCart, Tag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BotoesHeader() {

    return (
        <div className="flex  items-center gap-10">
            
            
            
            {/* Meu carrinho */}
            <Link href={'/carrinho'}>
            <button className="text-[#fff8e7] hover:text-[#ffcb7c] transition-all duration-300"> <ShoppingCart size={33}/> </button>
            </Link>


            {/* notificações */}
            <Link href={'/notificacoes'}>
            <button className="text-[#fff8e7] hover:text-[#ffcb7c] transition-all duration-300"> <Bell size={33}/> </button>
            </Link>


            <Link href={'/anuncios'}>
            <button className="text-[#fff8e7] hover:text-[#ffcb7c] transition-all duration-300"> <Tag size={33}/> </button>
            </Link>


            {/* quero vender */}
            <Link href={'/querovender'}>
            <button className="flex gap-1 bg-[#fff8e7] hover:bg-[#ffcb7c] text-[#2e241e] font-semibold p-4 rounded-2xl transition-all duration-300"><ArrowRightLeft/> Quero Trocar </button>
            </Link>


            {/* Meu perfil */}

            <div>
                {/* {users.map((user) => (
                    <button key={1} ><Image  alt="PictureProfile" src={user.avatar} width={30} height={30}/></button>
                ))} */}
                <Link href={'/login'}>
                <button className="flex bg-[#fff8e7] hover:bg-[#ffcb7c] text-[#2e241e] font-semibold p-2 gap-1  rounded-2xl transition-all duration-300"> <User/> Login </button>
                </Link>


            </div>
        </div>
    )

}