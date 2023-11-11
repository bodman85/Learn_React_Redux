import { MenuListItem } from "../MenuListItem/MenuListItem"
import s from "./style.module.css"
export function MenuList(props){
    return <div className={s.container}>
        <MenuListItem onClick={props.onItemClick} difficulty = "Low" />
        <MenuListItem onClick={props.onItemClick} difficulty = "Medium" />
        <MenuListItem onClick={props.onItemClick} difficulty = "Hard" />
        <MenuListItem onClick={props.onItemClick} difficulty = "Insane" />
    </div>
}