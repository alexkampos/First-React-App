import React, {useState} from "react"
import calendar from "../../../images/calendar.png"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import back from "../../../images/back.png"
import next from "../../../images/next.png"


function CheckInOut(props) {
    const [selectedDate, setSelectedDate] = useState(null)

    const ExampleCustomInput = ({ value, onClick }) => {
      return ( 
           <button className="date-picker" onClick={onClick}>
            {value ? value : "Choose Date"}
        </button>
      )
    };
    return (
        <div className="check-in-out">
            
            <div style={{ backgroundColor: props.lineColor }} className="colored-line"></div>
            <div className="calendar-image-container">
            <img src={calendar}/>
            </div>
            <div className="container">
            <span className="in-or-out">{props.inOrOut}</span>
            
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                customInput={<ExampleCustomInput/>}
                dateFormat="eeee, dd/MM/yyyy"
            />
            </div>
            <div className="back-image-container">
            <img src={back}/>
            </div>
            <div className="next-image-container">
            <img src={next}/>
            </div>
        </div>
    )
}

export default CheckInOut