import React from "react"
import "./HeaderMiddleSection.css"
import CheckInOut from "./check-in-out/CheckInOut.js"
import RoomSize from "./room-size/RoomSize.js"

function HeaderMiddleSection(props){
    return (
        <div className="header-middle-section">
            <CheckInOut lineColor="#438aba" inOrOut="Check-in"/>
            <CheckInOut lineColor="#febc59" inOrOut="Check-out"/>
            <RoomSize roomtypes={props.roomtypes}/>
        </div>
    )
}

export default HeaderMiddleSection