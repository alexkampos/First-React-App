import React from "react"

function RoomSize(props) {
    return (
        <div className="room-size">
            <div className="my-custom-select">
            <select>
                <option className="room-size-options"> &#xf007; {props.roomtypes[0].name}</option>
                <option className="room-size-options"> &#xf007;&#xf007; {props.roomtypes[2].name}</option>
                <option className="room-size-options"> &#xf0c0; {props.roomtypes[1].name}</option>
            </select>
            </div>
        </div>
    )
}

export default RoomSize