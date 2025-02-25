import Image from "next/image";
import { InputSearch } from "../ui/inputSearch";
import Dropdown from "../ui/categoryButton";
import LinksRotas from "../ui/linksrotes";
import BotoesHeader from "../ui/linksrotes";
import Link from "next/link";

export default function Header() {




    return (
        <div className="fixed flex justify-between px-5 items-center gap-3 border-b-gray-300 border w-screen bg-[#fff8e7] ">
            
            <Link href={"/"}>
            <Image alt="Logo" src={'/images/trooqilogo.png'} width={110} height={150} />
            </Link>
            

            <InputSearch/>
            
            
            
            <Dropdown/>


            <BotoesHeader></BotoesHeader>

        </div>
    )

}