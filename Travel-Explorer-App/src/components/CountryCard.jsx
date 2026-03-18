import { Link } from "react-router-dom";
import { useContext } from "react";
import { TravelContext } from "../context/TravelContext";

const CountryCard = ({ country }) => {
  const { addFavorite } = useContext(TravelContext);

  return (
    <div>
      <img src={country.flags.png} width="150" />
      <h3>{country.name.common}</h3>

      <Link to={`/country/${country.name.common}`}>
        Details
      </Link>

      <button onClick={() => addFavorite(country)}>
        ❤️ Save
      </button>
    </div>
  );
};

export default CountryCard;