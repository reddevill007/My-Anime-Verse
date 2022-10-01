import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { Carousel } from "react-responsive-carousel";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [topManga, setTopManga] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const len = 10;

  const getTopAnime = async () => {
    setLoading(true);
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    setTopAnime(temp.top.slice(0, 10));
    setLoading(false);
  };

  const getTopManga = async () => {
    setLoading(true);
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/manga/1/bypopularity`
    ).then((res) => res.json());

    setTopManga(temp.top.slice(0, 10));
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search, len);
  };

  const fetchAnime = async (query, size) => {
    setLoading(true);
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=${size}`
    ).then((res) => res.json());

    // console.log(temp.results);
    setAnimeList(temp.results);
    setLoading(false);
  };

  useEffect(() => {
    getTopAnime();
    getTopManga();
  }, []);

  // console.log(topManga);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} topManga={topManga} />
        <MainContent
          handleSearch={handleSearch}
          search={search}
          animeList={animeList}
          setSearch={setSearch}
          loading={loading}
        />
        <div>
          {animeList.length > 1 ? (
            <button onClick={() => fetchAnime(search, len + 10)}>More</button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
