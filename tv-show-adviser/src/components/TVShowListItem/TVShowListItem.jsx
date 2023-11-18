import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";

const MAX_TITLE_CHAR = 20;
export function TVShowListItem({ tvShow, onClick }) {
  const onClick_ = () => {
    onClick(tvShow);
  };
  return (
    <div onClick={onClick_} className={s.container}>
      <img
        alt={TVShowListItem.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
      />
      <div className={s.title}>
        {tvShow.name.length < MAX_TITLE_CHAR
          ? tvShow.name
          : tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."}
      </div>
    </div>
  );
}
