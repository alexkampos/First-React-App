import React from "react"
import "./HeaderBottomSection.css"
import PriceSlider from "./price-slider/PriceSlider"
import DropdownFilter from "./dropdown-filter/DropdownFilter"


function HeaderBottomSection(props) {

    function handleStarsChange(e) {
        const target = e.target
        props.setStarsFilter(target.value)
    }


    const stars = []
    for (let i = 1; i < 6; i++) {
        stars.push(<option value={i}> &#xf005; {i} stars</option>)
    }

    function handleRatingsChange(e) {
        const target = e.target
        props.setRatingsFilter(target.value)
    }

    const ratings = [<option value="Okay">0-2: Okay</option>, <option value="Fair">2-6: Fair</option>,<option value="Good">6-7: Good</option>,<option value="Very Good">7-8.5: Very Good</option>,<option value="Excellent">8.5-10: Excellent</option>]
    
    function handleLocationChange(e) {
        const target = e.target
        props.setLocationFilter(target.value)
    }

    let alreadyExistingCities = [];
    let locations = props.allHotels.map(hotel => {
        return hotel.city
    }).filter(city => {
        if(!alreadyExistingCities.includes(city)){
        alreadyExistingCities.push(city)
        return city;
        }
    }).map(city => {
        return <option>{city}</option>
    })

    return (
        <div className="header-bottom-section">
            <PriceSlider setPriceFilter={props.setPriceFilter} allHotels={props.allHotels}/>
            <DropdownFilter hotels={props.hotels} text={"Property type"} options={stars} hotels={props.hotels} setHotels={props.setHotels} handleChange={handleStarsChange}/>
            <DropdownFilter hotels={props.hotels} text={"Guest rating"} options={ratings} hotels={props.hotels} setHotels={props.setHotels} handleChange={handleRatingsChange}/>
            <DropdownFilter hotels={props.hotels} text={"Hotel location"} options={locations} hotels={props.hotels} setHotels={props.setHotels} handleChange={handleLocationChange}/>
            <DropdownFilter hideBorder={true} hotels={props.hotels} text={"More filters"} />
        </div>
    )
}

export default HeaderBottomSection