import React from 'react'
import street from '../img/street.jpg'

function Street() {
    return (
        <div className="parallax-container">
            <div className="parallax">
                <img src={street} alt="street image" className='responsive-img' />
            </div>
        </div>  
    )
}

export default Street
