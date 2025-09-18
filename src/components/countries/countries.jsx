import { use } from "react";
import Country from "../country/country";
export default function Countries({ countriesPromise }) {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div className="mx-5">
      <h1 className="text-3xl font-semibold">
        In the countries: {countries.length}
      </h1>

      <div className="grid grid-cols-3 gap-5">
        {countries.map((country) => (
        <Country key={country.name.common} country={country}></Country>
        ))}
      </div>     
    </div>
  );
}
