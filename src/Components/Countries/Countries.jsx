import { useEffect } from "react";
import { useState } from "react";
import './countries.css';

import Country from "../Country/Country";




const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])

    const handleVisitedCountry = country => {
        console.log('visited country')
        //  console.log(country);
        // visitedCountries.push(country);
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries (newVisitedCountries);

        const handleVisitedFlags = flag => {
           
            const handleVisitedFlags = [...visitedFlags, flags];
            setVisitedFlags()
        }



      
    // }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }

                </ul>
            </div>
           <div className="countries-container">
           {
             countries.map(country => <Country key={country.cca3} handleVisitedFlags={handleVisitedFlags}  handleVisitedCountry= {handleVisitedCountry} country={country}></Country>) 
            }
           </div>
           
            
        </div>
    );
};

export default Countries;