import React from "react";

const Cards = ({ image, name, status, species, gender, origin, loading }) => {
  if (loading) {
    return (
      <div className="bg-green-800 w-80 sm:w-60 rounded-2xl mt-8 min-h-[500px] shadow-lg shadow-zinc-900">
        <div className="p-4">
          <div className="bg-zinc-500 h-10 opacity-40 rounded-2xl"></div>
        </div>
        <div className="bg-zinc-500 h-80 sm:h-60 opacity-40"></div>
        <div className="flex flex-col gap-1 p-4 font-bold">
          <div className="bg-zinc-500 h-6 opacity-40 rounded-2xl"></div>
          <div className="bg-zinc-500 h-6 opacity-40 rounded-2xl"></div>
          <div className="bg-zinc-500 h-6 opacity-40 rounded-2xl"></div>
          <div className="bg-zinc-500 h-6 opacity-40 rounded-2xl"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-green-800 w-80 sm:w-60 rounded-2xl mt-8 min-h-[500px] shadow-lg shadow-zinc-900">
      <div className="gap-1 p-2">
        <span className="flex justify-center items-center text-center font-bold h-14">
          {name}
        </span>
      </div>
      <div>
        <img className="w-full h-80 sm:h-60" src={image} alt="" />
      </div>
      <div className="flex flex-col gap-1 p-4 font-bold">
        <span>
          <span className="text-xs">Status:</span> {status}
        </span>

        <span>
          <span className="text-xs">gender:</span> {gender}
        </span>

        <span>
          <span className="text-xs">Species:</span> {species}
        </span>

        <span>
          <span className="text-xs">Origin:</span> {origin}
        </span>
      </div>
    </div>
  );
};

export default Cards;
