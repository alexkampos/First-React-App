import React, {useState,  useEffect} from "react"
import Content from "./desideratum-8-11/Content.js"
import Search from "./desideratum-1-and-2/Search.js"
import HeaderMiddleSection from "./desideratum-3/HeaderMiddleSection.js"
import HeaderBottomSection from "./desideratum-4-to-7/HeaderBottomSection.js"
import 'bootstrap/dist/css/bootstrap.css';
import destinationData from "../destination-data/data.json"


function App(){
    const [hotels, setHotels] = useState(destinationData[1].entries)
    const allHotels = destinationData[1].entries
    const roomtypes = destinationData[0].roomtypes
    const [starsFilter, setStarsFilter] = useState("All")
    const [ratingsFilter, setRatingsFilter] = useState("All")
    const [locationFilter, setLocationFilter] = useState("All")

    const prices = allHotels.map(hotel => {
        return hotel.price
    })

    const [priceFilter, setPriceFilter] = useState(Math.min(...prices))
    const [amenityFilter, setAmenityFilter] = useState("All")

    function afterFiltersHotels(){
       setHotels(allHotels.filter(hotel => {
            if(starsFilter !== "All"){
                if(hotel.rating !== parseInt(starsFilter)){
                    return false
                }
            }

            if(ratingsFilter !== "All"){
                if(hotel.ratings.text !== ratingsFilter){
                    return false
                }
            }

            if(locationFilter !== "All"){
                if(hotel.city !== locationFilter){
                    return false
                }
            }

            if(amenityFilter !== "All"){
                if(!hotel.filters.some(filter => filter.name === amenityFilter)){
                    return false
                }
            }

            return hotel.price <= priceFilter 
        }))
    }

    useEffect(() => {
        afterFiltersHotels()
    },[starsFilter, ratingsFilter, locationFilter, priceFilter, amenityFilter])

    return (
        <>
            <Search allHotels={allHotels}/>
            <HeaderMiddleSection roomtypes={roomtypes} hotels={hotels} setHotels={setHotels}/>
            <HeaderBottomSection 
            hotels={hotels} 
            setHotels={setHotels}
            setStarsFilter={setStarsFilter}
            setRatingsFilter={setRatingsFilter}
            setLocationFilter={setLocationFilter} 
            setPriceFilter={setPriceFilter}
            allHotels={allHotels}/>
            <Content 
            hotels={hotels}
            setAmenityFilter={setAmenityFilter}
            />
        </>
    )
}

export default App