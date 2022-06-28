import React from "react";

const Header = ({ setPage }) => {
  return (
    <header className="bg-neutral-900 shadow-lg shadow-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center sm:justify-between items-center py-4">
        <div className="flex justify-center">
          <img
            className="w-80"
            src="https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"
          />
        </div>
        <div className="flex flex-col items-center gap-2 px-10">
          <button
            className="bg-green-800 font-bold sm:text-xl py-2 w-60 rounded-2xl uppercase hover:bg-green-900 transition-colors"
            onClick={() => setPage("home")}
          >
            Random Cards
          </button>
          <button
            className="bg-green-800 font-bold sm:text-xl py-2 w-60 rounded-2xl uppercase hover:bg-green-900 transition-colors"
            onClick={() => setPage("search")}
          >
            Search Character
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
