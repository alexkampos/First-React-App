import React from "react"
import heart from "../../../images/heart.png"
import star from "../../../images/star.png"
import next from "../../../images/next.png"

function HotelInfo(props){
    const hotel = props.hotel
    let stars = []
    for(let i = 0; i < hotel.rating; i++) {
        stars.push(<img src={star}></img>)
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }

    return (
        <div className="hotel-info-container">
            <div className="thumbnail-container">
            <img src={hotel.thumbnail} className="thumbnail"></img>
            <img className="heart-image" src={heart}></img>
            <div className="box-image">1/30</div>
            </div>
            <div className="more-hotel-info">
                <div className="hotel-name">{hotel.hotelName}</div>
                <div className="hotel-rating">{stars} <span>Hotel</span></div>
                <div className="fake-distance">Only 0.2 miles from center.</div>
                <div className="hotel-number-rating"><div>{hotel.ratings.no}</div> <span>{hotel.ratings.text}</span> (697 reviews)</div>
                <div>Excellent location 9.0/10</div>
            </div>
            <div className="hotel-deals">
                <div className="best-hotel-deal">Company no.1<span>${hotel.price}</span></div>
                <div>Company no.2<span>${hotel.price + getRandomInt(10,50)}</span></div>
                <div>Company no.3<span>${hotel.price + getRandomInt(10,50)}</span></div>
                <div>Company no.4<span>${hotel.price + getRandomInt(10,50)}</span></div>
            </div>
            <div className="best-deal">
                <div>
                    <span>Company no.1</span><span>${hotel.price}</span>3 nights for <span>${hotel.price * 3}</span>
                </div>
                <button>
                    View Deal <img src={next}/>
                </button>
            </div>
        </div>
    )
}

export default HotelInfo