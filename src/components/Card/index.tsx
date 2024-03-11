import Image from "next/image";
import React from "react";
import Title from "../Title";

type Props = {
  title: string;
  image: string;
  description: string;
  price: string;
  name: string;
};

const Card = ({ name, title, image, description, price }: Props) => {
  return (
    <>
      <div>
        <Title title={title} />
        <div className="relative aspect-square w-[200px]">
          <Image src={image} alt="image" fill />
        </div>
        <p>{name}</p>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </>
  );
};
export default Card;
