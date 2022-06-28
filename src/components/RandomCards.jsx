import React from "react";
import Cards from "./Cards";

const RandomCards = () => {
  const [data, setData] = React.useState(null);
  const [randomNumbers, setRandomNumber] = React.useState(null);
  const [reset, setReset] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  function getRandomNumber() {
    return Math.floor(Math.random() * (826 - 1) + 1);
  }

  React.useEffect(() => {
    setLoading(true);
    let arrayNumbers = [];
    for (let i = 0; i < 8; i++) {
      const randomNumber = getRandomNumber();
      arrayNumbers.push(randomNumber);
    }
    setRandomNumber(arrayNumbers);
    setReset(false);
  }, [reset]);

  React.useEffect(() => {
    if (randomNumbers)
      fetch(
        `https://rickandmortyapi.com/api/character/${randomNumbers.toString()}`
      )
        .then((response) => response.json())
        .then((json) => setData(json));
  }, [randomNumbers]);

  React.useEffect(() => {
    setLoading(false);
  }, [data]);

  if (data === null) {
    return "";
  }

  return (
    <main>
      <section className="max-w-7xl mx-auto">
        <div className="mt-8 flex justify-center">
          <button
            className="bg-green-800 font-bold sm:text-xl py-2 px-5 rounded-2xl uppercase"
            onClick={() => setReset(true)}
          >
            Reset Cards
          </button>
        </div>
        <div className="grid place-items-center content-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data &&
            data.map((character) => (
              <Cards
                key={character.id}
                image={character.image}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                loading={loading}
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default RandomCards;
