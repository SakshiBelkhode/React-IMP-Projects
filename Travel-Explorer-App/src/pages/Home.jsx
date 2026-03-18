import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("india");

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${search}`
      );
      const data = await res.json();
      setCountries(data || []);
    };

    fetchCountries();
  }, [search]);

  return (
    <div>
      <input
        placeholder="Search country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {countries.map((c) => (
          <CountryCard key={c.cca3} country={c} />
        ))}
      </div>
    </div>
  );
};

export default Home;