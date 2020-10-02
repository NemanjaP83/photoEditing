import React, { Component } from 'react'

import M from 'materialize-css/dist/js/materialize.min.js'

export default class Navbar extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            let sidenav = document.querySelectorAll('.sidenav');
            M.Sidenav.init(sidenav, {edge: 'right', draggable: true});
          })  
    }

    render() {
        return (
            <div>
                <div className="navbar-fixed">
                <nav>
                    <div class="nav-wrapper indigo darken-4">
                    <div className="container">
                    <div href="#" class="brand-logo">PhotoEditing</div>
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="#photo">Photo</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact-form">Contact</a></li>
                        </ul>
                    </div>
                    </div>
                </nav>
                </div>

                <ul class="sidenav" id="mobile-demo">
                    <li><a className='sidenav-close' href="#!"><i class="material-icons">close</i>PhotoEditing</a></li>
                    <li><div class="divider"></div></li>
                    <li><a className='sidenav-close' href="#photo">Photo</a></li>
                    <li><a className='sidenav-close' href="#services">Services</a></li>
                    <li><a className='sidenav-close' href="#contact-form">Contact</a></li>
                </ul>
            </div>
        )
    }
}
