import { use, useState } from "react";
import Country from "../country/country";
export default function Countries({ countriesPromise }) {
  const [visited, setVisited] = useState(0)
  const [visitedFlags, setVisitedFlags] = useState([])

  const visitedCounts = () => {
    const visitedCount = visited + 1
    setVisited(visitedCount)
    return
  }

  const handleVisitedFlag = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag]
    setVisitedFlags(newVisitedFlags)
  } 

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div className="mx-5">
      <h1 className="text-3xl font-semibold">
        In the countries: {countries.length}
      </h1>

      <h1>Visited Counts: {visited}</h1>
      
      <div className="grid grid-cols-3 max-w-3xl gap-9 my-9 border-4 border-gray-200 p-4 rounded-2xl">
      
      <h3 className="text-3xl font-medium">Total Flags Visited: {visitedFlags.length}</h3>
          {
            visitedFlags.map((flag, index) => <img key={index} className="rounded-2xl" src={flag}></img>)
          }
      </div>

      <div className="grid grid-cols-3 gap-5">
        {countries.map((country) => (
        <Country visitedCounts={visitedCounts} key={country.name.common} country={country} handleVisitedFlag={handleVisitedFlag}></Country>
        ))}
      </div>     
    </div>
  );
}
