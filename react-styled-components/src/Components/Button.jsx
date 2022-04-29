import React from 'react';

function StyledButton({ className, buttonLabel}) {
    return (
        <button className={className}> {buttonLabel} </button>
    )
}

export default StyledButton;