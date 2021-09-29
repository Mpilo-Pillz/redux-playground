function Modal(props) {

    function cancelHandler() {
        props.onCancel();
    }
    function confirmHAndler() {
        props.onConfirm();
    }
    return (
        <div className='modal'>
            <div>Are you sure</div>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button className='btn' onClick={props.onConfirm}>Confirm</button>
            <button className='btn' onClick={confirmHAndler}>Close</button>
        </div>
    );
}

export default Modal;