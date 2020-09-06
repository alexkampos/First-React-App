import React from "react"
import search from "../../images/search.png"
import "./Search.css"





function Search(props) {
    
    const allHotels = props.allHotels
    let alreadyExistingCities = [];
    const cities = allHotels.map(hotel => {
        return hotel.city
    }).filter(city => {
        if(!alreadyExistingCities.includes(city)){
        alreadyExistingCities.push(city);
        return city;
        }
    }).map(city => {
        return <option>{city}</option>
    })

    

    return (
        <div className="search">
            <input className="search-bar" placeholder="Champs Elyse&#769;es, Paris" list="cities"/>
            <datalist id="cities" className="search-options">{cities}</datalist>
            <img src={search} className="search-image" alt="search-icon" />
            <button className="search-button">Search</button>
        </div>
    )
}

export default Search