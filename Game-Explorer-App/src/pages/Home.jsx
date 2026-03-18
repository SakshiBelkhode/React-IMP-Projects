import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";

const API_KEY = "YOUR_API_KEY";

const Home = () => {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("gta");

  useEffect(() => {
    const fetchGames = async () => {
      const res = await fetch(
        `https://api.rawg.io/api/games?search=${search}&key=${API_KEY}`
      );
      const data = await res.json();
      setGames(data.results || []);
    };

    fetchGames();
  }, [search]);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default Home;