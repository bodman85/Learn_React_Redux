import { useState } from "react";
import s from "./style.module.css"

export const MenuListItem = (props) => {
  const [isHovered, setIsHover] = useState(false);

  function activate() {
    setIsHover(true);
  }
  function deactivate() {
    setIsHover(false);
  }
  const getBackgroundColor = () => {
    if (isHovered) {
      return "#a5e9ff";
    } else {
      return "#eff0ef";
    }
  };
  console.log("is hovered ? ", isHovered);
  return (
    <div 
    className = {s.container}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      Set to : {props.difficulty}
    </div>
  );
};
