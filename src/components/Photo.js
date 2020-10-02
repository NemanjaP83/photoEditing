import React, { Component } from 'react'
import M from 'materialize-css'

import img1 from '../img/portrait.jpg'
import img2 from '../img/city.jpg'
import img3 from '../img/nature.jpg'

export default class Photo extends Component {
    componentDidMount() {
        M.AutoInit()
    }
    render() {
        return (
            <div className='container scrollspy' id='photo'>
                    <div className="row">
                        <div className="col s12 l4">
                            <img src={img1} alt="portrait" className='responsive-img materialboxed'/>
                        </div>
                        <div className="col s12 l6 offset-l1">
                            <h4 className="indigo-text text-darken-2">
                                Portrait
                            </h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, ut. Illum similique cumque doloremque eius in. Sed autem id nesciunt reiciendis veniam dolore voluptate a itaque. Rem aliquam ex maiores.</p>
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col s12 l4 push-l7 offset-l1">
                            <img src={img2} alt="city" className='responsive-img materialboxed'/>
                        </div>
                        <div className="col s12 l6 pull-l5 right-align offset-l1">
                            <h4 className="indigo-text text-darken-2">
                                Cityscapes
                            </h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, ut. Illum similique cumque doloremque eius in. Sed autem id nesciunt reiciendis veniam dolore voluptate a itaque. Rem aliquam ex maiores.</p>
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col s12 l4">
                            <img src={img3} alt="nature" className='responsive-img materialboxed'/>
                        </div>
                        <div className="col s12 l6 offset-l1">
                            <h4 className="indigo-text text-darken-2">
                                Nature
                            </h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, ut. Illum similique cumque doloremque eius in. Sed autem id nesciunt reiciendis veniam dolore voluptate a itaque. Rem aliquam ex maiores.</p>
                        </div>
                    </div>
    
                </div>
        )
    }
}

