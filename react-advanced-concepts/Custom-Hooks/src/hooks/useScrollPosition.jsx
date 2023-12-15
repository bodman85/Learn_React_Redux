import { useEffect, useState } from "react";

export function useScrollPosition() {
  const [isBottom, setIsBottom] = useState(false);

  //window.innerHeight -  Height of the visible window:
  // document.documentElement.scrollTop - How far you have scrolled from the top:
  // document.documentElement.offsetHeight - Entire space taken by your app:
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsBottom(
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight
      );
    });
  }, []);

  return { isBottom };
}
