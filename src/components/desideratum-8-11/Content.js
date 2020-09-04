import React from "react"
import HotelInfo from "./hotel-info/HotelInfo.js"
import "./Content.css"
import MapIframe from "./map-iframe/MapIframe.js"
import AmenitySort from "./amenity-sort/AmenitySort.js"


function Content(props){

    let hotelsShowed = props.hotels.map(hotel => {
      return <HotelInfo hotel={hotel}/>
    })
    return (
        <div className="content">
            <div className="fixed-main-content">
                <MapIframe/>
                <AmenitySort hotels={props.hotels} setAmenityFilter={props.setAmenityFilter}/>
            </div>
           <span>Designed by <a href="https://www.freepik.com">freepik</a></span> 
            {hotelsShowed}
        </div>
    )
}

export default Content