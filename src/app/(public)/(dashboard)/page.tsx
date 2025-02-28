
'use client'
import Header from "@/components/layout/header";
import Image from "next/image";
import ListingCard from "../../listings/ListingCard";
import produtos from "@/services/utilsTest/Recomendedproducts";
import { Items } from "@/components/layout/itens";

export default function Home() {

  const images = [
    '/images/anuncio3.png',
    '/images/anuncio4.png',
    '/images/anuncio4.png',
    '/images/anuncio3.png',
  ];
  
  const titles = [
    'Imagem 1',
    'Imagem 2',
    'Imagem 2',
    'Imagem 3',
  ];
  return (
    <div className="flex-col items-center justify-center">
    <ListingCard images={images}  titles={titles} />

    {/* <Image className="flex mt-5 rounded-3xl" alt="1" src={'/images/recomendation3.png'} width={2000} height={50}/> */}

    <div className=" gap-4">
      
    </div>

    </div>
  );
}
