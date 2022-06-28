import React from "react";

const Cards = ({ image, name, status, species, gender, loading }) => {
  if (loading) {
    return (
      <div className="bg-green-800 w-60 rounded-2xl mt-8 min-h-[500px]">
        <div className="bg-zinc-500 h-60 opacity-40 rounded-t-2xl"></div>
        <div className="flex flex-col gap-2 p-4 font-bold">
          <div className="bg-zinc-500 h-12 opacity-40 rounded-2xl"></div>
          <div className="bg-zinc-500 h-12 opacity-40 rounded-2xl"></div>
          <div className="bg-zinc-500 h-12 opacity-40 rounded-2xl"></div>
          <div className="bg-zinc-500 h-12 opacity-40 rounded-2xl"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-green-800 w-80 sm:w-60 rounded-2xl mt-8 min-h-[500px]">
      <div>
        <img className="w-full h-80 sm:h-60 rounded-t-2xl" src={image} alt="" />
      </div>
      <div className="flex flex-col gap-1 p-4 font-bold">
        <div>
          <h2 className="text-xs">Name:</h2>
          <span className="text-2xl">{name}</span>
        </div>

        <div>
          <h2 className="text-xs">Status:</h2>
          <span className="text-2xl">{status}</span>
        </div>

        <div>
          <h2 className="text-xs">Species:</h2>
          <span className="text-2xl">{species}</span>
        </div>

        <div>
          <h2 className="text-xs">Gender:</h2>
          <span className="text-2xl">{gender}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
