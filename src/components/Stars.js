import React, { Component } from 'react'
import M from 'materialize-css'

import stars from '../img/stars.jpg'

export default class Stars extends Component {
    componentDidMount() {
        M.AutoInit()
    }
    render() {
        return (
            <div className='parallax-container'>
                <div className="parallax">
                    <img src={stars} alt="parallax-img" className='responsive-img stars'/>
                </div>
                
            </div>
        )
    }
}
