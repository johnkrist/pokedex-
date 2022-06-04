import "./style.css";
import pokeball from "../../img/icon-pokeball-png.png";
import grama from "../../img/Grama.png";
import { useState } from "react";
import { api } from "../../data/api";
import CardInfo from "../CardInfo";

const PokeCard = ({ name, url }) => {
  const [click, setClick] = useState(false);
  const [pokemons, setPokemon] = useState();
  const loadingPokemon = (url) => {
    api.get(url).then((res) => {
      const pokemon = {
        name: res.data.name,
        id: res.data.id,
        img: res.data.sprites.front_default,
        type: res.data.types[0].type.name,
      };

      setPokemon([pokemon]);
    });
  };

  return (
    <div
      onClick={() => setClick(true) & loadingPokemon(url)}
      className="li__ball"
    >
      {click ? (
        pokemons?.map((pokemon) => (
          <CardInfo
            name={pokemon.name}
            id={pokemon.id}
            img={pokemon.img}
            type={pokemon.type}
            key={pokemon.name}
          />
        ))
      ) : (
        <>
          <div className="div__container__ball">
            {name}
            <img className="img__pokeball" src={pokeball} alt="pokeball" />
            <img className="grama" src={grama} alt="grama" />
          </div>
        </>
      )}
    </div>
  );
};

export default PokeCard;
