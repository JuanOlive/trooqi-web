
'use client'
import ListingCard from "../../listings/ListingCard";

export default function Home() {

  const images = [
    '/images/anuncio3.png',
    '/images/anuncio4.png',
    '/images/anuncio3.png',
    '/images/anuncio4.png',
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
