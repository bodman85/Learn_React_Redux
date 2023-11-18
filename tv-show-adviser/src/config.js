const BASE_URL = "https://api.themoviedb.org/3/";
const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original/";
const SMALL_IMG_COVER_BASE_URL = "https://image.tmdb.org/t/p/w300/";

const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGFkMTRlZWMwZjUwMzYxZGU1NTUxOWNkY2YzZmUxMCIsInN1YiI6IjY1NTM4MzUzYWM0MTYxMDBjNjNiMDcxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E4Dl0OJARrJw0oCxzpJ1hC-Re_QUVZX2BcUNPgScQAY",
  },
};

export { BASE_URL, OPTIONS, BACKDROP_BASE_URL, SMALL_IMG_COVER_BASE_URL };
