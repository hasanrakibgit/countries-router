import React from 'react';
import { NavLink } from 'react-router-dom';
import './Country.css'
const Country = (props) => {
    const { name, flag, callingCodes } = props.country;
    return (
        <div className="main">
            <div className="country-name">
                <h3>Name of the Country : {name} </h3>
                <img className="flag" src={flag} alt="" />
               
                

            </div>
            <NavLink to={`details/about/${callingCodes}`}>Show Details</NavLink>
                
            
        </div>



    );
};

export default Country;