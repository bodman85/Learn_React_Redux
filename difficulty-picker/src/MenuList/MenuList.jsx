import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
import { DIFFICULTIES } from "./constant";

export function MenuList(props) {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((currentDifficulty) => (
        <MenuListItem
          isSelected={props.difficulty === currentDifficulty}
          onClick={props.onItemClick}
          difficulty={currentDifficulty}
        />
      ))}
    </div>
  );
}
