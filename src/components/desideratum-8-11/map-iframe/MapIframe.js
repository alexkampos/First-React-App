import React, {useState} from "react"
import Modal from "react-modal"

Modal.setAppElement('#root')
function MapIframe(){
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className="modal-container">
            <button onClick={() => setModalIsOpen(true)}>View Map</button>
            <Modal isOpen={modalIsOpen}
             onRequestClose={() => setModalIsOpen(false)}
             style={
                 {
                    overlay:{
                        backgroundColor: "rgba(66, 66, 66, 0.8)",
                        border: "1px solid black"
                    },
                    content:{
                        border: "1px solid black",
                        height: "70vh",
                        width: "80vw",
                        top: "15vh",
                        left: "10vw",
                        padding: "0"
                    } 
                 }
             }>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d83998.94722687619!2d2.277019841665155!3d48.8588377391234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1554987763683!5m2!1sen!2sgr" className="map-box"></iframe>
            </Modal>
        </div>
    )}

export default MapIframe