import React from 'react'

const Button = ({ handleClick, children, ...propos }) => {
    return (
        <button onClick={handleClick} className='btn btn-primary'>{children}</button>
    )
}

export default Button