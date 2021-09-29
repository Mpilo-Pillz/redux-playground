function Modal(props) {
    return (
        <div className='modal'>
            <div>Are you sure</div>
            <button className="btn btn--alt">Cancel</button>
            <button className='btn'>Confirm</button>
        </div>
    );
}

export default Modal;