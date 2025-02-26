import Image from "next/image";
import { InputSearch } from "../ui/inputSearch";
import Dropdown from "../ui/categoryButton";
import LinksRotas from "../ui/linksrotes";
import BotoesHeader from "../ui/linksrotes";
import Link from "next/link";

export default function Header() {




    return (
        <div className="fixed flex justify-between px-5 items-center w-screen bg-[#2e241e] pr-16">
            
            <Link href={"/"}>
            <Image alt="Logo" src={'/images/logotrooqi2.png'} width={110} height={150} />
            </Link>
            

            <InputSearch/>
            
            
            
            <Dropdown/>


            <BotoesHeader></BotoesHeader>

        </div>
    )

}