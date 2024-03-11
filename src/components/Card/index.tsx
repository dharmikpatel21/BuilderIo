import Image from "next/image";
import React from "react";
import Title from "../Title";
// const data = [
//   {
//     id: 1,
//     name: "Smartphone X",
//     price: 599.99,
//     description:
//       "The latest flagship smartphone from TechCorp with advanced features.",
//     image: "/images/1.jpg",
//   },
//   {
//     id: 2,
//     name: "Smartphone Y",
//     price: 699.99,
//     description: "The latest flagship smartphone.",
//     image: "/images/2.jpg",
//   },
//   {
//     id: 3,
//     name: "Smartphone Z",
//     price: 799.99,
//     description: "The latest flagship smartphone from TechCorp. ",
//     image: "/images/3.jpg",
//   },
// ];

type Props = {
  title: string;
  image: string;
  description: string;
  price: string;
};

const Card = ({ name, title, image, description, price }: Props) => {
  return (
    <>
      {/* {data.map((item) => {
        return (
          <div key={item.id}>
            <p>{children}</p>
            <div className="relative aspect-square w-[200px]">
              <Image src={item.image} alt="image" fill />
            </div>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        );
      })} */}
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
