import React from "react";
import "./Emotionitems.css";

export const Emotionitems = ({ id, img, name, onClick, isSelected }) => {
  const handleOnClick = () => {
    onClick(id);
  };
  const selected = [
    "EmotionItems",
    isSelected ? `EmotionItems_on_${id}` : `EmotionItems_off`,
  ];
  return (
    <div className={selected.join(" ")} onClick={handleOnClick}>
      <img src={img} alt={`emotion${id}`} />
      <span>{name}</span>
    </div>
  );
};

export default React.memo(Emotionitems);
