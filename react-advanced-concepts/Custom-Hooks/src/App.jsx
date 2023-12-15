import { useEffect, useState } from "react";
import { ImageList } from "./components/ImageList";
import s from "./App.module.css";
import { useScrollPosition } from "./hooks/useScrollPosition";
import axios from "axios";

export function App() {
  const [imageList, setImageList] = useState([]);
  const { isBottom } = useScrollPosition();
  const [pageToFetch, setPageToFetch] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchImagesByPage(pageToFetch);
  }, [pageToFetch]);

  useEffect(() => {
    if (isBottom) {
      console.log("Incrementing page number...");
      incrementPage();
    }
  }, [isBottom]);

  async function fetchImagesByPage(pageNumber) {
    console.log("http req...");
    setIsLoading(true);
    const { data } = await axios(
      `https://picsum.photos/v2/list?page=${pageNumber}&limit=5`
    );
    setImageList([...imageList, ...data]);
    setIsLoading(false);
  }
  function incrementPage() {
    setPageToFetch(pageToFetch + 1);
  }
  return (
    <div className={s.root}>
      <h1>Rand'images</h1>
      <h2>Download random open source images</h2>
      <ImageList imageList={imageList} />
      {isLoading && <div className="spinner-border" role = "status" />}
    </div>
  );
}
