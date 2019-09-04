import React, { Fragment } from "react";

const Sushi = props => {
  const handleClick = (price, id) => {
    if (props.wallet >= price) {
      props.eatSushi(price);
      props.updateSushi(id);
    } else {
      alert("You don't have enough money");
    }
  };

  const { id, name, price, img_url } = props.sushi;
  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleClick(price, id)}>
        <img src={img_url} alt={name} width="100%" />
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
