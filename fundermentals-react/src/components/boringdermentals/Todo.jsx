import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function deleteHandler() {
        setModalIsOpen(true)
    }
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {/* {modalIsOpen ? <Modal /> : null} */}
            {/* using a shortcut that says if both conditions are true the second value is returned*/} 
            {modalIsOpen && <Modal /> }
            {modalIsOpen && <Backdrop /> }
            
        </div>
    );
}

export default Todo