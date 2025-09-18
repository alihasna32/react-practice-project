import { use } from "react";
export default function Countries({countriesPromise}) {
    const countries = use(countriesPromise)
    console.log(countries)
    return(
        <>
            <h1>HElLO</h1>
        </>
    );
}

