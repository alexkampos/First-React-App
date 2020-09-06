import React, {useState} from "react"

function PriceSlider(props){
    let alreadyExistingPrices=[]
    const prices = props.allHotels.map(hotel => {
        return hotel.price
    }).filter(price => {
        if(!alreadyExistingPrices.includes(price)){
            alreadyExistingPrices.push(price);
        return price
        }
    }).sort((a, b) => {
        return a - b
    })
    const [priceShowed, setPriceShowed] = useState(prices[0])

    function handleChange(e){
        const target = e.target
        setPriceShowed(prices[target.value])
        props.setPriceFilter(prices[target.value])
    }

    return (
        <div className="price-slider-container">
            <div>Price</div>
            <div className="price-showed">max: ${priceShowed}</div>
            <input type="range" max={prices.length-1} defaultValue={0} onChange={handleChange} className="price-slider"/>
        </div>
    )
}

export default PriceSlider