import React, { useState } from "react";

export default function Country({country, visitedCounts, handleVisitedFlag}) {
  const [visited, setVisited] = useState(false);
  const [nonVisited, setNonVisited] = useState(false);

  const handleVisited = () => {
    setVisited(true);
    setNonVisited(false);
  };

  const handleNonVisited = () => {
    setNonVisited(true);
    setVisited(false);
  };
  return (
    <div
  className={`p-2.5 rounded-xl shadow-xl border border-gray-200 ${
    visited ? "bg-green-100" : nonVisited ? "bg-white" : "bg-white"
  }`}
>

      <img
        className="mb-4 w-full rounded-2xl"
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>
        Status:
        {country.area.area > 300000 ? " Big Country" : " Small Country"}
      </p>
      <div className="flex gap-4 mt-5">
        <button
          className="cursor-pointer p-3 rounded-xl border border-gray-300"
          onClick={() => {
            if (!visited) {      
              handleVisited();
              visitedCounts();
            }
          }}
        >
          {visited ? "Visited🟢" : "Visited"}
        </button>

        <button
          className="cursor-pointer p-3 rounded-xl border border-gray-300"
          onClick={     
              handleNonVisited
            } 
        >
          {nonVisited ? "Non Visited🛑" : "Non-Visited"}
        </button>

        <button className="cursor-pointer p-3 rounded-xl border border-gray-300" onClick={() => {handleVisitedFlag(country.flags.flags.png)}}>Add Visited Flag</button>
      </div>
    </div>
  );
}
