import { DisplayDifficulty } from "./DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./MenuList/MenuList";
import s from "./style.module.css";
import { useState } from "react";

export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  }
  return (
    <>
      <h1 style={{textAlign: "center"}}>Select your React difficulty</h1>
      <div className={s.workspace}>
        <MenuList onItemClick={onMenuListItemClick}/>
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </>
  );
}
