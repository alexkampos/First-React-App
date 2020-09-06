import React from "react"

function DropdownFilter(props){
    return (
        <div className="filter-container" style={ props.hideBorder ? {border: 0} : {} }>
            <div className="filter-text">{props.text}</div>
            <select  className="filter-select" onChange={props.handleChange}>
                <option value="All">All</option>
                {props.options}
            </select>
        </div>
    )
}

export default DropdownFilter