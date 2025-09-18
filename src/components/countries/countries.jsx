import { use } from "react";
import Country from "../country/country";
export default function Countries({ countriesPromise }) {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h1>In the countries: {countries.length}</h1>
      {countries.map((country) => (
        <Country country={country}></Country>
      ))}
    </div>
  );
}
