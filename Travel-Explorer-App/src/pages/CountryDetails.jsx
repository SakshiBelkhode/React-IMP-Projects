import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CountryDetails = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const data = await res.json();
      setCountry(data[0]);
    };

    fetchDetails();
  }, [name]);

  if (!country) return <p>Loading...</p>;

  return (
    <div>
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} width="200" />
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population}</p>
    </div>
  );
};

export default CountryDetails;