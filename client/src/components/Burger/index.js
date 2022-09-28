import React from 'react'
import './Burger.css'

const Burger = ({ onClick }) => {
    return (
        <div className='burger' onClick={onClick}>
            <div className='burger-line'></div>
            <div className='burger-line'></div>
            <div className='burger-line'></div>
        </div>
    )
}

export default Burger