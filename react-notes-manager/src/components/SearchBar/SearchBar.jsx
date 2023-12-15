import { Input } from "components/Input/input";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onTextChange, placeholder }) {
  return (
    <>
      <SearchIcon size={25} className={s.icon} />
      <Input onTextChange={onTextChange} placeholder={placeholder} />
    </>
  );
}
