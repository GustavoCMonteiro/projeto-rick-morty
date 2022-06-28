import React from "react";

const Header = ({ setPage }) => {
  return (
    <header className="bg-neutral-800">
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex justify-center">
          <img
            className="w-80"
            src="https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"
          />
        </div>
        <div className="flex justify-between items-center gap-2 px-10">
          <button
            className="bg-green-800 font-bold sm:text-xl py-2 px-5 rounded-2xl uppercase"
            onClick={() => setPage("home")}
          >
            Random Cards
          </button>
          <button
            className="bg-green-800 font-bold sm:text-xl py-2 px-5 rounded-2xl uppercase"
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
