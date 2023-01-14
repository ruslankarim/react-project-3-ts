import React, { useState } from "react";

type Items = {
  name: string
  desc: string
  imageUrl: string
}

type Quantity = {
  quantity: number
}

const Item: React.FC <Items> = ({name, desc, imageUrl}) => {

  const [quantity, setQuantity] = useState<Quantity["quantity"]>(0)

  const handleQuantityPlus = () => {
    setQuantity(quantity + 1)
  }

  const handleQuantityMinus = () => {
    setQuantity(quantity - 1)
  }

  return (
    <div className="item">
      <img src={imageUrl} />
      <div className="item-info">
        <h2>{name}</h2>
        <p>{desc}</p>
      </div>
      <div className="item-quantity">
        <button className="item-button" onClick={handleQuantityMinus} disabled={!(quantity > 0)}>-</button>
        {quantity > 0 ? <h3 className="item-total">{quantity}</h3> : null}
        <button className="item-button" onClick={handleQuantityPlus}>+</button>
      </div>
    </div>
  );
}

export default Item
