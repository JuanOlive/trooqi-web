import Image from "next/image";

interface PropsItem {
    id: number;
    image: string;
    price: number;
    title: string;
    location: string;
    date?: Date;

}



export const Items: React.FC<PropsItem> = ({image, date, location, price, title}) => {

    return (
        <div className="">


            <div className="flex-col p-2 bg-[#fff8e7] border border-gray-500 max-w-52 rounded-lg">
            <Image alt="RecomendedProduct" className="rounded-lg" src={image} width={200} height={50} />

            <h2 className="font-bold">R$ {price}</h2>

            <h1>{title}</h1>

            <h1>{location}</h1>
            </div>
        

        </div>

    )
 

    

}