import React, { use, useState } from "react";
import Country from "../country/Country";
import './Countries.css';


const Countries = ({countriesPromise}) => {

   const [visitedFlag, setVisitedFlag] = useState([])
   const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
    
  }
  const handelVisitedFlag = (flag) =>{
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
  }

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries

  return (
    <div>
      <h1>In the Countries : {countries.length}</h1>
      <h2>Visited All The Countries : {visitedCountries.length}</h2>
      <h2>Total Flag Visited : {visitedFlag.length}</h2>
      <ol>
        {
          visitedCountries.map(country => <li
          key={country.cca3.cca3}
          >{country.name.common}</li>)
        }
      </ol>
        <div className="visited-flag-container">
          {
            visitedFlag.map((flag, index)=> <img key={index} src={flag}></img>)
          }
        </div>

      <div className="Countries">
        {
        countries.map(country => <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handelVisitedFlag={handelVisitedFlag}
            ></Country>) 
        }
      </div>
    </div>
  );
};

export default Countries;
