import React from "react"
import help from "../../../images/help.png"

function AmenitySort(props){
    const amenities = ["Car Park", "Sauna", "Pool", "Wifi", "Balcony"]
    const optionAmenities = amenities.map(amenity => <option>{amenity}</option>)

    function handleChange(e){
        const target = e.target
        props.setAmenityFilter(target.value)
    }

    return (
        <div className="amenity-sort-container">
            <span>Sort by</span>
            <select  className="amenity-sort-select" onChange={handleChange}>
                <option value="All">Our recommendations</option>
                {optionAmenities}
            </select>
            <img src={help}/>
        </div>
    )
}

export default AmenitySort