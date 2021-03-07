import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './CountryDetail.css'
const CountryDetails = () => {
    const {countryId} = useParams();
    const [country, setCountry] = useState({});
    const history = useHistory();
    const handleClick = () =>{
        const url = '/home';
        history.push(url);
    }
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/callingcode/${countryId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    },[]);
    const {capital, flag,population, region,name,subregion,currencies,languages,borders} = country
    return (
        <div className="country-detail">
            <img src={flag} alt="" />
            <h2>{name}</h2>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Sub Region: {subregion}</p>
            <p>Currency: {country.currencies?.map(currency => <span> {currency.name}</span>)}</p>
            <p>Languages: {country.languages?.map(language => <span> {language.name}</span>)}</p>
            <p>Border: {country.borders?.map(border => <span> {border}</span>)}</p>
            <button onClick = {()=>handleClick()}>Back</button>
        </div>
    );
};

export default CountryDetails;