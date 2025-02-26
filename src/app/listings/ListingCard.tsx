import Image from 'next/image';
import React from 'react';

interface ListingCardProps {
  title: string;
  image: string;
}

const ListingCard: React.FC<ListingCardProps> = ({ title, image }) => {
  return (
  
      <Image  quality={100} src={image} alt={title} className=" object-cover rounded-2xl" width={2000} height={500}/>

  );
};

export default ListingCard;