import React from "react";
import Cards from "./Cards";

const SearchCharacters = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  const [arrayCharacters, setArrayCharacters] = React.useState(null);

  const [inputValue, setInputValue] = React.useState(null);
  const [character, setCharacter] = React.useState(null);
  const [selectCharacter, setSelectCharacter] = React.useState(null);

  const [loading, setLoading] = React.useState(false);

  const fetchOtherPages = async () => {
    const numberOfPages = data.info.pages;
    let newArray = [];
    let i = 1;
    for (i; i <= numberOfPages; i++) {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${i}&name=${character}`
      );
      const json = await response.json();
      json.results.map((character) => {
        newArray.push(character);
      });
    }
    setArrayCharacters(newArray);
    setLoading(false);
  };

  React.useEffect(() => {
    if (character) {
      setLoading(true);
      fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
        .then((response) => {
          if (response.status !== 404) {
            setError(false);
            setSelectCharacter(character);
            return response.json();
          } else {
            setArrayCharacters(null);
            setError(true);
          }
        })
        .then((json) => setData(json));
    }
  }, [character]);

  React.useEffect(() => {
    if (data)
      if (data.info.pages !== 1) {
        fetchOtherPages();
      } else {
        const newArray = [];
        data.results.map((character) => {
          newArray.push(character);
        });
        setArrayCharacters(newArray);
        setLoading(false);
      }
  }, [data]);

  return (
    <main>
      <section>
        <div className="flex justify-center mt-8">
          <div className="flex align-middle gap-3">
            <input
              className="bg-zinc-800 rounded px-5 h-11 shadow-lg shadow-zinc-900"
              type="text"
              placeholder="Character name"
              onChange={(event) => setInputValue(event.target.value)}
            />
            <button
              className="bg-green-800 font-bold sm:text-xl py-2 px-5 rounded-2xl uppercase hover:bg-green-900 transition-colors shadow-lg shadow-zinc-900"
              onClick={() => setCharacter(inputValue)}
            >
              Search
            </button>
          </div>
        </div>
        {loading && !error && (
          <span className="block font-bold text-2xl text-center mt-4">
            Loading...
          </span>
        )}
        {!loading && arrayCharacters && (
          <span className="block font-bold text-2xl text-center mt-4">
            Were found {arrayCharacters.length} {selectCharacter} 's
          </span>
        )}
        <div className="max-w-7xl mx-auto">
          {error && (
            <span className="block font-bold text-2xl text-center mt-8">
              {" "}
              Nothing Found
            </span>
          )}
          <div className="grid place-items-center content-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {arrayCharacters &&
              arrayCharacters.map((character) => (
                <Cards
                  key={character.id}
                  image={character.image}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SearchCharacters;
