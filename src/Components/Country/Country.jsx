import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, population, area, cca3} = country;
    // console.log(country);
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(true);
    }
    console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited && 'visited'}`}>
           <h2>{name?.common} </h2>
           <img src={flags.png} alt="" />
           <p>population :{population}</p>
           <p>Area :{area}</p>
           <p><small>Code : {cca3}</small></p>
           <button>Mark visited</button>
           <br />
           <button onClick={handleVisited}>Visited</button>
           {visited && 'i visited'}
        </div>
    );
};
export default Country;