import Header from "@/components/layout/header";
import Image from "next/image";
import ListingCard from "../../listings/ListingCard";
import produtos from "@/services/utilsTest/Recomendedproducts";
import { Items } from "@/components/layout/itens";

export default function Home() {
  return (
    <div className="flex-col justify-center">
    <ListingCard title="anuncio" image="/images/anuncionone.png"  />

    {/* <Image className="flex mt-5 rounded-3xl" alt="1" src={'/images/recomendation3.png'} width={2000} height={50}/> */}

    <div className=" gap-4">
      
    </div>

    </div>
  );
}
