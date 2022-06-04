import "./style.css";
import { useState, useEffect } from "react";
import { api, clearBaseURL } from "../../data/api";
import PokeCard from "../PokeCard";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";

const PokeList = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState("/pokemon?limit=6&offset=0");
  const [pokemonPage, setPokemonPage] = useState([]);

  useEffect(() => {
    setLoading(true);
    api
      .get(currentPage)
      .then((res) => {
        setPokemonPage(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <div>
      <div className="btn__container">
        <button
          disabled={!pokemonPage.previous}
          onClick={() => setCurrentPage(clearBaseURL(pokemonPage.previous))}
        >
          <TiArrowLeftOutline size={20} />
        </button>
        <button
          disabled={!pokemonPage.next}
          onClick={() => setCurrentPage(clearBaseURL(pokemonPage.next))}
        >
          <TiArrowRightOutline size={20} />
        </button>
      </div>
      {loading ? (
        <span className="span__loading">Carregando...</span>
      ) : (
        <ul className="ul__container">
          {pokemonPage?.results?.map((poke) => (
            <PokeCard name={poke.name} key={poke.name} url={poke.url} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default PokeList;
