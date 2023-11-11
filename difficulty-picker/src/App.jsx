import { DisplayDifficulty } from "./DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./MenuList/MenuList";
import s from "./style.module.css";

export function App() {
  return (
    <>
      <h1>Select your React difficulty</h1>
      <div className={s.workspace}>
        <MenuList />
        <DisplayDifficulty difficulty="Low" />
      </div>
    </>
  );
}
