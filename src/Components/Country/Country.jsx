import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry,  handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;
    // console.log(country);
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(true);
    }

    const paramWithParas = () => handleVisitedCountry(country);

    // console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited && 'visited'}`}>
           <h2>{name?.common} </h2>
           <img src={flags.png} alt="" />
           <p>population :{population}</p>
           <p>Area :{area}</p>
           <p><small>Code : {cca3}</small></p>
           <button onClick={paramWithParas}>Mark visited</button>
           <br />
           <button onClick={handleVisited}>Visited</button>
           <br />
           <button onClick={() => handleVisitedFlags(country.flags.png)}>add flag</button>
           {visited && 'i visited'}
        </div>
    );
};
export default Country;