import s from "./style.module.css";
import copyPasteIcon from "../../assets/copy-paste.svg";

export function PasswordGeneratorFooter(props) {
  function saveInClipboard() {
    navigator.clipboard.writeText(props.password);
  }
  return (
    <div className={s.root} onClick={saveInClipboard}>
      <div>
        {props.password}
        <img className={s.icon} src={copyPasteIcon} alt="Copy-paste icon" />
      </div>
    </div>
  );
}
