import React, { useState } from "react";

export default function Country({ country }) {
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
    <div className="p-2.5 rounded-xl shadow-xl border border-gray-200">
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
          className="p-3 rounded-xl border border-gray-300"
          onClick={handleVisited}
        >
          {visited ? "Visited🟢" : "Visited"}
        </button>

        <button
          className="p-3 rounded-xl border border-gray-300"
          onClick={handleNonVisited}
        >
          {nonVisited ? "Non Visited🟢" : "Non-Visited"}
        </button>
      </div>
    </div>
  );
}
