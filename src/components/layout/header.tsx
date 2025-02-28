import Image from "next/image";
import { InputSearch } from "../ui/inputSearch";
import Dropdown from "../ui/categoryButton";
import LinksRotas from "../ui/linksrotes";
import BotoesHeader from "../ui/linksrotes";
import Link from "next/link";

export default function Header() {




    return (
        <div className="fixed flex justify-between px-5 items-center w-screen bg-[#382c24] pr-16">
            
            <Link href={"/"}>
            <Image alt="Logo" src={'/images/logotrooqi3.png'} width={110} height={150} />
            </Link>
            

            <InputSearch/>
            
            
            
            <Dropdown/>


            <BotoesHeader></BotoesHeader>

            

        </div>
    )

}