import users from "@/services/utilsTest/profile";
import { Bell, ShoppingCart, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BotoesHeader() {

    return (
        <div className="flex  items-center gap-10">
            
            
            
            {/* Meu carrinho */}
            <Link href={'/carrinho'}>
            <button className="text-[#875a38] hover:text-amber-900 transition-all duration-300"> <ShoppingCart size={33}/> </button>
            </Link>


            {/* notificações */}
            <Link href={'/notificacoes'}>
            <button className="text-[#875a38] hover:text-amber-900 transition-all duration-300"> <Bell size={33}/> </button>
            </Link>


            <Link href={'/anuncios'}>
            <button className="text-[#875a38] hover:text-amber-900 transition-all duration-300"> <Tag size={33}/> </button>
            </Link>


            {/* quero vender */}
            <Link href={'/querovender'}>
            <button className="bg-[#875a38] text-white font-semibold p-5 rounded-2xl "> Quero Trocar </button>
            </Link>


            {/* Meu perfil */}

            <div>
                {/* {users.map((user) => (
                    <button key={1} ><Image  alt="PictureProfile" src={user.avatar} width={30} height={30}/></button>
                ))} */}
                <Link href={'/perfil'}>
                <button> <Image alt=" Profile Picture"  src={users.find(user => user.id === 3)?.avatar || "/default-avatar.jpg"} width={50} height={50}/> </button>
                </Link>


            </div>
        </div>
    )

}