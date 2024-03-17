import { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    const {name, flags, population, area, cca3} = country;
    // console.log(country);
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(true);
    }
    return (
        <div className='country'>
           <h2>{name?.common} </h2>
           <img src={flags.png} alt="" />
           <p>population :{population}</p>
           <p>Area :{area}</p>
           <p><small>Code : {cca3}</small></p>
           <button onClick={handleVisited}>Visited</button>
           {visited && 'i visited'}
        </div>
    );
};

export default Country;