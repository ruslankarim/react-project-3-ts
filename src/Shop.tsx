import React, { PropsWithChildren, useState } from "react";
import Item from "./Item";

const Shop: React.FC = () => {

  const items = [
    {
      name: "Респиратор 3M",
      desc: "Степень защиты FFP2, есть клапан выдоха",
      image: "https://images.unsplash.com/photo-1585776461369-7727cfe97af0"
    },
    {
      name: "Перчатки латексные",
      desc: "Одноразовые перчатки повышенной прочности",
      image: "https://images.unsplash.com/photo-1599412227383-b7d4751c8765"
    }
  ];

  return (
    <div className="shop">
      {items.map(({name, desc, image}) => {
        return <Item name={name} desc={desc} imageUrl={image}/>
      })}
    </div>
  );
};

export default Shop;